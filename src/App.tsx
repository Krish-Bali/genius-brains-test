import { useState, useEffect } from 'react';
import { SectionType } from './types';
import { questions } from './data/questions';
import { supabase } from './lib/supabase';
import Guidelines from './components/Guidelines';
import QuestionDisplay from './components/QuestionDisplay';
import ThankYou from './components/ThankYou';
import Admin from './components/Admin';

type Screen = 'guidelines' | 'assessment' | 'thankyou' | 'admin';

function App() {
  const [screen, setScreen] = useState<Screen>('guidelines');
  const [studentName, setStudentName] = useState('');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  // Route handling for Admin panel
  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/admin') {
      setScreen('admin');
    }
  }, []);

  const handleStart = (name: string) => {
    setStudentName(name);
    setScreen('assessment');
    setCurrentQuestionIndex(0);
    setAnswers([]);
  };

  const handleAnswer = (weight: number) => {
    const newAnswers = [...answers, weight];
    setAnswers(newAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Pass studentName directly to ensure it isn't lost in state timing
      submitAssessment(newAnswers, studentName);
    }
  };

  const submitAssessment = async (finalAnswers: number[], nameToSave: string) => {
    // Initialize scores for all 8 categories
    const scores: Record<SectionType, number> = {
      Linguistic: 0,
      Logical: 0,
      Spatial: 0,
      Kinesthetic: 0,
      Musical: 0,
      Interpersonal: 0,
      Intrapersonal: 0,
      Naturalist: 0,
    };

    // Calculate scores based on the questions and user answers
    questions.forEach((question, index) => {
      const cat = question.category as SectionType;
      if (scores[cat] !== undefined) {
        scores[cat] += finalAnswers[index] || 0;
      }
    });

    try {
      // Safety check: Don't submit if name is empty
      if (!nameToSave || nameToSave.trim() === '') {
        throw new Error("Student name is missing. Please refresh and enter your name again.");
      }

      // Insert into Supabase
      const { error } = await supabase.from('assessment_results').insert({
        student_name: nameToSave,
        linguistic_score: scores.Linguistic,
        logical_score: scores.Logical,
        spatial_score: scores.Spatial,
        kinesthetic_score: scores.Kinesthetic,
        musical_score: scores.Musical,
        interpersonal_score: scores.Interpersonal,
        intrapersonal_score: scores.Intrapersonal,
        naturalist_score: scores.Naturalist,
      });

      if (error) throw error;

      // Move to Thank You screen only on success
      setScreen('thankyou');
    } catch (error) {
      console.error('Error submitting assessment:', error);
      // Detailed error alert to help us debug
      alert('Error: ' + (error instanceof Error ? error.message : 'Unknown database error'));
    }
  };

  // --- RENDER LOGIC ---

  if (screen === 'admin') {
    return <Admin />;
  }

  if (screen === 'guidelines') {
    return <Guidelines onStart={handleStart} />;
  }

  if (screen === 'assessment') {
    return (
      <QuestionDisplay
        question={questions[currentQuestionIndex]}
        currentQuestionIndex={currentQuestionIndex}
        totalQuestions={questions.length}
        onAnswer={handleAnswer}
      />
    );
  }

  return <ThankYou studentName={studentName} />;
}

export default App;