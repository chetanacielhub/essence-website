-- ==============================================================================
-- ESSENCE 2027: Seed Data for Initial Deployment
-- ==============================================================================

-- 1. Initial Programme Settings
INSERT INTO public.programme_settings (
  id,
  is_registration_open,
  is_idea_submission_open,
  is_prototype_submission_open,
  is_evaluation_live,
  are_results_published,
  max_team_size,
  min_team_size,
  banner_message,
  is_banner_active,
  banner_link
) VALUES (
  1,
  true,
  true,
  false,
  false,
  false,
  4,
  1,
  'Registration is now open for Maharashtra Undergraduate Colleges. Submit your idea today!',
  true,
  '/register'
) ON CONFLICT (id) DO NOTHING;

-- 2. Innovation Tracks
INSERT INTO public.competition_tracks (slug, name, icon_name, description, is_active, sort_order) VALUES
  ('tech-digital', 'Technology & Digital Innovation', 'Cpu', 'Software, IoT, AI/ML tools, cybersecurity, and connected hardware creating tangible workflow and industrial efficiencies.', true, 1),
  ('sustainability-environment', 'Sustainability & Environment', 'Leaf', 'Clean energy solutions, circular waste valorisation, water conservation, and eco-friendly consumer alternatives.', true, 2),
  ('healthcare-wellbeing', 'Healthcare & Social Well-being', 'HeartPulse', 'Preventative wellness tech, assistive devices, maternal and elderly care gadgets, and clinic workflow aids.', true, 3),
  ('agriculture-rural', 'Agriculture & Rural Development', 'Sprout', 'Precision farming tools, post-harvest preservation, farm mechanisation, and farmer market linkage solutions.', true, 4),
  ('education-accessibility', 'Education & Accessibility', 'GraduationCap', 'Inclusive learning aids, STEM experimental kits, neurodiverse curriculum tools, and vocational training hardware.', true, 5),
  ('business-fintech', 'Business, Commerce & FinTech', 'TrendingUp', 'Financial inclusion tools, supply chain verification, micro-lending tech, and retail empowerment platforms.', true, 6),
  ('smart-communities', 'Smart Communities & Civic Problem-Solving', 'Building2', 'Urban mobility, municipal waste reporting, public safety systems, and participatory governance tools.', true, 7)
ON CONFLICT (slug) DO NOTHING;

-- 3. Evaluation Criteria (Approved rubrics for reviewers)
INSERT INTO public.evaluation_criteria (name, description, max_score, weight, is_active, sort_order) VALUES
  ('Problem Significance & Clarity', 'How acute and well-articulated is the problem? Is there clear evidence that the target beneficiaries experience this challenge?', 10, 1.0, true, 1),
  ('Innovation & Originality', 'Does the solution introduce a novel mechanism, fresh architecture, or distinct improvement over existing approaches?', 10, 1.2, true, 2),
  ('Technical & Operational Feasibility', 'Can this be realistically built, tested, and maintained using accessible resources and sound engineering principles?', 10, 1.0, true, 3),
  ('Potential Societal & Economic Impact', 'What is the demonstrable value created for users or communities across Maharashtra? Is the model sustainable?', 10, 1.0, true, 4),
  ('Prototype Execution & Verification', 'Quality of physical/software prototype progress, demonstration evidence, and user validation results.', 10, 1.3, true, 5)
ON CONFLICT DO NOTHING;

-- 4. Initial Institutional Colleges across Maharashtra
INSERT INTO public.institutions (name, city, district, state) VALUES
  ('Chetana’s Institute of Management & Research (Host)', 'Mumbai', 'Mumbai Suburban', 'Maharashtra'),
  ('Veermata Jijabai Technological Institute (VJTI)', 'Mumbai', 'Mumbai City', 'Maharashtra'),
  ('College of Engineering Pune (COEP Tech)', 'Pune', 'Pune', 'Maharashtra'),
  ('Visvesvaraya National Institute of Technology (VNIT)', 'Nagpur', 'Nagpur', 'Maharashtra'),
  ('Government College of Engineering, Aurangabad', 'Chhatrapati Sambhajinagar', 'Aurangabad', 'Maharashtra'),
  ('Walchand College of Engineering', 'Sangli', 'Sangli', 'Maharashtra'),
  ('Government College of Engineering, Karad', 'Karad', 'Satara', 'Maharashtra'),
  ('K. J. Somaiya College of Engineering', 'Mumbai', 'Mumbai Suburban', 'Maharashtra'),
  ('Thadomal Shahani Engineering College', 'Mumbai', 'Mumbai Suburban', 'Maharashtra'),
  ('MIT World Peace University', 'Pune', 'Pune', 'Maharashtra')
ON CONFLICT DO NOTHING;
