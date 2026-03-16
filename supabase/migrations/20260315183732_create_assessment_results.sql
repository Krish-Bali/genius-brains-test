/*
  # Psychometric Assessment Results Table

  1. New Tables
    - `assessment_results`
      - `id` (uuid, primary key) - Unique identifier for each assessment
      - `student_name` (text) - Name of the student taking the assessment
      - `completed_at` (timestamptz) - Timestamp when assessment was completed
      - `linguistic_score` (integer) - Score for Linguistic section (0-50)
      - `logical_score` (integer) - Score for Logical section (0-50)
      - `spatial_score` (integer) - Score for Spatial section (0-50)
      - `kinesthetic_score` (integer) - Score for Kinesthetic section (0-50)
      - `musical_score` (integer) - Score for Musical section (0-50)
      - `interpersonal_score` (integer) - Score for Interpersonal section (0-50)
      - `intrapersonal_score` (integer) - Score for Intrapersonal section (0-50)
      - `naturalist_score` (integer) - Score for Naturalist section (0-50)
      
  2. Security
    - Enable RLS on `assessment_results` table
    - Allow public INSERT for students to submit their results
    - Restrict SELECT to authenticated users only (admin access)

  3. Important Notes
    - Students can submit results but cannot view them
    - Admin dashboard will require authentication to view results
    - All scores are stored as integers ranging from 0 to 50
*/

CREATE TABLE IF NOT EXISTS assessment_results (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  student_name text NOT NULL,
  completed_at timestamptz DEFAULT now(),
  linguistic_score integer NOT NULL DEFAULT 0,
  logical_score integer NOT NULL DEFAULT 0,
  spatial_score integer NOT NULL DEFAULT 0,
  kinesthetic_score integer NOT NULL DEFAULT 0,
  musical_score integer NOT NULL DEFAULT 0,
  interpersonal_score integer NOT NULL DEFAULT 0,
  intrapersonal_score integer NOT NULL DEFAULT 0,
  naturalist_score integer NOT NULL DEFAULT 0
);

ALTER TABLE assessment_results ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert assessment results"
  ON assessment_results
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Only authenticated users can view results"
  ON assessment_results
  FOR SELECT
  TO authenticated
  USING (true);