export type SectionType =
  | 'Linguistic'
  | 'Logical'
  | 'Spatial'
  | 'Kinesthetic'
  | 'Musical'
  | 'Interpersonal'
  | 'Intrapersonal'
  | 'Naturalist';

export interface Option {
  text: string;
  weight: number;
}

export interface Question {
  id: number;
  category: string; // Add this if your questions.ts uses 'category' instead of 'section'
  section: SectionType;
  question: string;
  options: Option[];
}

export interface AssessmentResult {
  id?: string; // Optional, but good to have since Supabase generates it
  student_name: string;
  created_at: string; // Changed from completed_at to match your DB and Admin.tsx
  linguistic_score: number;
  logical_score: number;
  spatial_score: number;
  kinesthetic_score: number;
  musical_score: number;
  interpersonal_score: number;
  intrapersonal_score: number;
  naturalist_score: number;
}