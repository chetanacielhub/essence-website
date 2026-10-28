-- ==============================================================================
-- ESSENCE 2027: PostgreSQL Database Schema & Row-Level Security
-- Presented by Chetana's Centre for Innovation & Entrepreneurship Learning (CiEL)
-- ==============================================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. INSTITUTIONS
CREATE TABLE IF NOT EXISTS public.institutions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    city TEXT NOT NULL,
    district TEXT NOT NULL,
    state TEXT NOT NULL DEFAULT 'Maharashtra',
    website TEXT,
    verification_status TEXT NOT NULL DEFAULT 'verified' CHECK (verification_status IN ('verified', 'pending', 'unverified')),
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

CREATE INDEX IF NOT EXISTS idx_institutions_city ON public.institutions(city);
CREATE INDEX IF NOT EXISTS idx_institutions_district ON public.institutions(district);

-- 2. PROFILES (Extends Supabase auth.users)
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT NOT NULL UNIQUE,
    full_name TEXT NOT NULL,
    phone TEXT,
    institution_id UUID REFERENCES public.institutions(id) ON DELETE SET NULL,
    institution_name TEXT,
    college_city TEXT,
    course TEXT,
    academic_year TEXT,
    role TEXT NOT NULL DEFAULT 'participant' CHECK (role IN ('super_admin', 'event_admin', 'content_editor', 'reviewer', 'participant')),
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

CREATE INDEX IF NOT EXISTS idx_profiles_role ON public.profiles(role);
CREATE INDEX IF NOT EXISTS idx_profiles_institution ON public.profiles(institution_id);

-- 3. TEAMS
CREATE TABLE IF NOT EXISTS public.teams (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    code TEXT NOT NULL UNIQUE,
    leader_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE RESTRICT,
    created_by UUID NOT NULL REFERENCES public.profiles(id) ON DELETE RESTRICT,
    status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'disbanded', 'locked')),
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

CREATE INDEX IF NOT EXISTS idx_teams_leader ON public.teams(leader_id);

-- 4. TEAM MEMBERS
CREATE TABLE IF NOT EXISTS public.team_members (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    team_id UUID NOT NULL REFERENCES public.teams(id) ON DELETE CASCADE,
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    membership_role TEXT NOT NULL DEFAULT 'member' CHECK (membership_role IN ('leader', 'member')),
    membership_status TEXT NOT NULL DEFAULT 'active' CHECK (membership_status IN ('active', 'invited', 'declined')),
    joined_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    CONSTRAINT uq_team_user UNIQUE (team_id, user_id)
);

CREATE INDEX IF NOT EXISTS idx_team_members_user ON public.team_members(user_id);

-- 5. COMPETITION TRACKS
CREATE TABLE IF NOT EXISTS public.competition_tracks (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug TEXT NOT NULL UNIQUE,
    name TEXT NOT NULL,
    icon_name TEXT NOT NULL DEFAULT 'Cpu',
    description TEXT NOT NULL,
    detailed_description TEXT,
    is_active BOOLEAN NOT NULL DEFAULT true,
    sort_order INT NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- 6. SUBMISSIONS (Ideas & Prototypes)
CREATE TABLE IF NOT EXISTS public.submissions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    reference_number TEXT NOT NULL UNIQUE,
    title TEXT NOT NULL,
    track_id UUID NOT NULL REFERENCES public.competition_tracks(id) ON DELETE RESTRICT,
    team_id UUID REFERENCES public.teams(id) ON DELETE SET NULL,
    submitted_by UUID NOT NULL REFERENCES public.profiles(id) ON DELETE RESTRICT,
    problem_statement TEXT NOT NULL,
    solution_description TEXT NOT NULL,
    target_users JSONB NOT NULL DEFAULT '[]'::jsonb,
    impact_description TEXT NOT NULL,
    development_stage TEXT NOT NULL DEFAULT 'Idea',
    prototype_plan TEXT,
    feasibility_and_resources TEXT,
    prototype_url TEXT,
    pitch_deck_url TEXT,
    demo_video_url TEXT,
    status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN (
        'draft', 'submitted', 'under_review', 'shortlisted',
        'prototype_stage', 'prototype_submitted', 'finalist',
        'winner', 'not_selected', 'withdrawn'
    )),
    is_showcase_approved BOOLEAN NOT NULL DEFAULT false,
    submitted_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

CREATE INDEX IF NOT EXISTS idx_submissions_track ON public.submissions(track_id);
CREATE INDEX IF NOT EXISTS idx_submissions_status ON public.submissions(status);
CREATE INDEX IF NOT EXISTS idx_submissions_user ON public.submissions(submitted_by);
CREATE INDEX IF NOT EXISTS idx_submissions_team ON public.submissions(team_id);

-- 7. SUBMISSION FILES (Pitch deck, prototype photos, test docs)
CREATE TABLE IF NOT EXISTS public.submission_files (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    submission_id UUID NOT NULL REFERENCES public.submissions(id) ON DELETE CASCADE,
    storage_path TEXT NOT NULL,
    file_name TEXT NOT NULL,
    mime_type TEXT NOT NULL,
    file_size BIGINT NOT NULL,
    file_type TEXT NOT NULL DEFAULT 'pitch_deck',
    uploaded_by UUID NOT NULL REFERENCES public.profiles(id) ON DELETE RESTRICT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

CREATE INDEX IF NOT EXISTS idx_submission_files_sub ON public.submission_files(submission_id);

-- 8. EVALUATION CRITERIA
CREATE TABLE IF NOT EXISTS public.evaluation_criteria (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    max_score INT NOT NULL DEFAULT 10,
    weight NUMERIC NOT NULL DEFAULT 1.0,
    is_active BOOLEAN NOT NULL DEFAULT true,
    sort_order INT NOT NULL DEFAULT 0
);

-- 9. REVIEW ASSIGNMENTS
CREATE TABLE IF NOT EXISTS public.review_assignments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    submission_id UUID NOT NULL REFERENCES public.submissions(id) ON DELETE CASCADE,
    reviewer_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    has_conflict_of_interest BOOLEAN NOT NULL DEFAULT false,
    conflict_reason TEXT,
    status TEXT NOT NULL DEFAULT 'assigned' CHECK (status IN ('assigned', 'in_progress', 'completed', 'declined')),
    assigned_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    CONSTRAINT uq_submission_reviewer UNIQUE (submission_id, reviewer_id)
);

-- 10. EVALUATIONS (Scores & Comments)
CREATE TABLE IF NOT EXISTS public.evaluations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    submission_id UUID NOT NULL REFERENCES public.submissions(id) ON DELETE CASCADE,
    reviewer_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    criterion_scores JSONB NOT NULL DEFAULT '{}'::jsonb,
    total_score NUMERIC NOT NULL DEFAULT 0,
    comments TEXT,
    status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'submitted')),
    submitted_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    CONSTRAINT uq_evaluation_entry UNIQUE (submission_id, reviewer_id)
);

-- 11. ANNOUNCEMENTS
CREATE TABLE IF NOT EXISTS public.announcements (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    summary TEXT NOT NULL,
    body TEXT NOT NULL,
    category TEXT NOT NULL DEFAULT 'general' CHECK (category IN ('general', 'deadline', 'shortlist', 'event')),
    audience TEXT NOT NULL DEFAULT 'all' CHECK (audience IN ('all', 'participants', 'finalists')),
    is_published BOOLEAN NOT NULL DEFAULT false,
    is_pinned BOOLEAN NOT NULL DEFAULT false,
    published_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()),
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- 12. PRIZES
CREATE TABLE IF NOT EXISTS public.prizes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    category TEXT NOT NULL,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    amount NUMERIC,
    badge_text TEXT,
    benefits JSONB NOT NULL DEFAULT '[]'::jsonb,
    is_published BOOLEAN NOT NULL DEFAULT true,
    sort_order INT NOT NULL DEFAULT 0
);

-- 13. COLLEGE INTEREST
CREATE TABLE IF NOT EXISTS public.college_interest (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    college_name TEXT NOT NULL,
    city TEXT NOT NULL,
    district TEXT NOT NULL,
    coordinator_name TEXT NOT NULL,
    coordinator_designation TEXT,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    estimated_participants INT DEFAULT 20,
    area_of_interest TEXT,
    status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'partnered')),
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- 14. AUDIT LOGS
CREATE TABLE IF NOT EXISTS public.audit_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    actor_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
    action TEXT NOT NULL,
    entity_type TEXT NOT NULL,
    entity_id TEXT,
    metadata JSONB DEFAULT '{}'::jsonb,
    ip_address TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

CREATE INDEX IF NOT EXISTS idx_audit_logs_actor ON public.audit_logs(actor_id);
CREATE INDEX IF NOT EXISTS idx_audit_logs_action ON public.audit_logs(action);

-- 15. PROGRAMME SETTINGS
CREATE TABLE IF NOT EXISTS public.programme_settings (
    id INT PRIMARY KEY DEFAULT 1,
    is_registration_open BOOLEAN NOT NULL DEFAULT true,
    is_idea_submission_open BOOLEAN NOT NULL DEFAULT true,
    is_prototype_submission_open BOOLEAN NOT NULL DEFAULT false,
    is_evaluation_live BOOLEAN NOT NULL DEFAULT false,
    are_results_published BOOLEAN NOT NULL DEFAULT false,
    max_team_size INT NOT NULL DEFAULT 4,
    min_team_size INT NOT NULL DEFAULT 1,
    banner_message TEXT,
    is_banner_active BOOLEAN NOT NULL DEFAULT true,
    banner_link TEXT,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    CONSTRAINT single_row_settings CHECK (id = 1)
);

-- ==============================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ==============================================================================

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.institutions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.teams ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.team_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.competition_tracks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.submission_files ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.evaluation_criteria ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.review_assignments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.evaluations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.announcements ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.prizes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.college_interest ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.audit_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.programme_settings ENABLE ROW LEVEL SECURITY;

-- Helper security function: Check user role
CREATE OR REPLACE FUNCTION public.get_auth_role()
RETURNS TEXT AS $$
  SELECT role FROM public.profiles WHERE id = auth.uid();
$$ LANGUAGE sql SECURITY DEFINER STABLE;

-- Profiles Policies
CREATE POLICY "Public profiles are readable by authenticated users"
  ON public.profiles FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can edit own profile only"
  ON public.profiles FOR UPDATE
  TO authenticated
  USING (id = auth.uid())
  WITH CHECK (id = auth.uid() AND role = (SELECT role FROM public.profiles WHERE id = auth.uid()));

-- Institutions: readable by all, editable by admins
CREATE POLICY "Institutions viewable by anyone"
  ON public.institutions FOR SELECT
  USING (true);

-- Tracks & Prizes: public read
CREATE POLICY "Competition tracks viewable by anyone"
  ON public.competition_tracks FOR SELECT
  USING (true);

CREATE POLICY "Prizes viewable by anyone"
  ON public.prizes FOR SELECT
  USING (is_published = true OR public.get_auth_role() IN ('super_admin', 'event_admin'));

-- Submissions Policies:
-- 1. Participants can view own or team submissions
CREATE POLICY "Participants view own submissions"
  ON public.submissions FOR SELECT
  TO authenticated
  USING (
    submitted_by = auth.uid() OR
    team_id IN (SELECT team_id FROM public.team_members WHERE user_id = auth.uid() AND membership_status = 'active') OR
    public.get_auth_role() IN ('super_admin', 'event_admin') OR
    (id IN (SELECT submission_id FROM public.review_assignments WHERE reviewer_id = auth.uid() AND status != 'declined'))
  );

-- 2. Participants can insert own submission
CREATE POLICY "Participants create own submissions"
  ON public.submissions FOR INSERT
  TO authenticated
  WITH CHECK (submitted_by = auth.uid());

-- 3. Participants can update own drafts only
CREATE POLICY "Participants edit own draft submissions"
  ON public.submissions FOR UPDATE
  TO authenticated
  USING (
    (submitted_by = auth.uid() AND status = 'draft') OR
    public.get_auth_role() IN ('super_admin', 'event_admin')
  );

-- Evaluations Policies:
CREATE POLICY "Reviewers can view their assigned evaluations"
  ON public.evaluations FOR SELECT
  TO authenticated
  USING (
    reviewer_id = auth.uid() OR
    public.get_auth_role() IN ('super_admin', 'event_admin')
  );

CREATE POLICY "Reviewers can update own evaluations"
  ON public.evaluations FOR UPDATE
  TO authenticated
  USING (reviewer_id = auth.uid());

CREATE POLICY "Reviewers can insert own evaluations"
  ON public.evaluations FOR INSERT
  TO authenticated
  WITH CHECK (reviewer_id = auth.uid());

-- College Interest: public insert
CREATE POLICY "Anyone can submit college interest"
  ON public.college_interest FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Admins can view college interest"
  ON public.college_interest FOR SELECT
  TO authenticated
  USING (public.get_auth_role() IN ('super_admin', 'event_admin'));

-- Programme Settings: public read
CREATE POLICY "Anyone can read programme settings"
  ON public.programme_settings FOR SELECT
  USING (true);

CREATE POLICY "Admins can update programme settings"
  ON public.programme_settings FOR UPDATE
  TO authenticated
  USING (public.get_auth_role() IN ('super_admin'));
