export type UserRole = 'super_admin' | 'event_admin' | 'content_editor' | 'reviewer' | 'participant';

export type SubmissionStatus =
  | 'draft'
  | 'submitted'
  | 'under_review'
  | 'shortlisted'
  | 'prototype_stage'
  | 'prototype_submitted'
  | 'finalist'
  | 'winner'
  | 'not_selected'
  | 'withdrawn';

export interface UserProfile {
  id: string;
  email: string;
  fullName: string;
  phone?: string;
  institutionId?: string;
  institutionName?: string;
  collegeCity?: string;
  course?: string;
  academicYear?: string;
  role: UserRole;
  avatarUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Institution {
  id: string;
  name: string;
  city: string;
  district: string;
  state: string;
  website?: string;
  verificationStatus: 'verified' | 'pending' | 'unverified';
}

export interface TeamMember {
  userId: string;
  fullName: string;
  email: string;
  role: 'leader' | 'member';
  status: 'active' | 'invited' | 'declined';
  joinedAt: string;
}

export interface Team {
  id: string;
  name: string;
  code: string;
  leaderId: string;
  leaderName: string;
  members: TeamMember[];
  maxMembers: number;
  createdAt: string;
}

export interface InnovationTrack {
  id: string;
  slug: string;
  name: string;
  iconName: string;
  description: string;
  detailedDescription: string;
  examples: string[];
  evaluationFocus: string[];
  isActive: boolean;
  sortOrder: number;
}

export interface SuggestedTrack {
  id: string;
  name: string;
  description: string;
  iconName: string;
  row: number;
}

export interface Submission {
  id: string;
  referenceNumber: string;
  title: string;
  trackId: string;
  trackName: string;
  teamId?: string;
  teamName?: string;
  submittedBy: string;
  submitterName: string;
  submitterEmail: string;
  institutionName: string;
  problemStatement: string;
  solutionDescription: string;
  targetUsers: string[];
  impactDescription: string;
  developmentStage: 'Idea' | 'Concept Validation' | 'Working Prototype' | 'Lab Tested' | 'Field Tested';
  prototypePlan: string;
  feasibilityAndResources: string;
  prototypeUrl?: string;
  pitchDeckUrl?: string;
  demoVideoUrl?: string;
  supportingDocuments?: string[];
  status: SubmissionStatus;
  scoreAverage?: number;
  internalNotes?: string;
  submittedAt: string;
  updatedAt: string;
}

export interface EvaluationCriterion {
  id: string;
  name: string;
  description: string;
  maxScore: number;
  weight: number;
}

export interface Evaluation {
  id: string;
  submissionId: string;
  reviewerId: string;
  reviewerName: string;
  criterionScores: Record<string, number>;
  totalScore: number;
  comments: string;
  status: 'draft' | 'submitted';
  submittedAt: string;
}

export interface Announcement {
  id: string;
  title: string;
  summary: string;
  body: string;
  category: 'general' | 'deadline' | 'shortlist' | 'event';
  audience: 'all' | 'participants' | 'finalists';
  publishedAt: string;
  isPublished: boolean;
  isPinned?: boolean;
}

export interface ProgrammeTimelineEvent {
  id: string;
  stageNumber: number;
  title: string;
  shortDescription: string;
  longDescription: string;
  participantAction: string;
  dates: string;
  isDateConfirmed: boolean;
  status: 'completed' | 'in_progress' | 'upcoming' | 'open';
}

export interface PrizeCategory {
  id: string;
  title: string;
  award: string;
  amount?: number;
  description: string;
  badgeText: string;
  benefits: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Eligibility' | 'Teams & Registration' | 'Submissions & Prototype' | 'Mentorship & Judging' | 'Awards & Venue';
}

export interface CollegeInterestSubmission {
  id: string;
  collegeName: string;
  city: string;
  district: string;
  coordinatorName: string;
  coordinatorDesignation: string;
  email: string;
  phone: string;
  estimatedParticipants: number;
  areaOfInterest: string;
  status: 'new' | 'contacted' | 'partnered';
  createdAt: string;
}

export interface ProgrammeSettings {
  isRegistrationOpen: boolean;
  isIdeaSubmissionOpen: boolean;
  isPrototypeSubmissionOpen: boolean;
  isEvaluationLive: boolean;
  areResultsPublished: boolean;
  maxTeamSize: number;
  minTeamSize: number;
  bannerMessage?: string;
  isBannerActive: boolean;
  bannerLink?: string;
}
