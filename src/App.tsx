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
  
  // 1. Updated state to hold all student info (Name, DOB, Class)
  const [studentData, setStudentData] = useState({
    name: '',
    dob: '',
    studentClass: ''
  });
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  // Route handling for Admin panel
  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/admin') {
      setScreen('admin');
    }
  }, []);

  // 2. Updated handleStart to accept the 3 arguments from Guidelines.tsx
  const handleStart = (name: string, dob: string, studentClass: string) => {
    setStudentData({ name, dob, studentClass });
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
      // Pass the collected data to the submission function
      submitAssessment(newAnswers);
    }
  };

  const submitAssessment = async (finalAnswers: number[]) => {
    // Initialize MI Scores
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

    // 3. Logic to capture preference scores 81 through 92
    const prefScores: Record<string, number> = {};

    questions.forEach((question, index) => {
      const answerValue = finalAnswers[index] || 0;
      
      if (question.category === 'Preference') {
        // Store preference by question ID (pref_81, pref_82 ... pref_92)
        prefScores[`pref_${question.id}`] = answerValue;
      } else {
        const cat = question.category as SectionType;
        if (scores[cat] !== undefined) {
          scores[cat] += answerValue;
        }
      }
    });

    try {
      if (!studentData.name || studentData.name.trim() === '') {
        throw new Error("Student data is missing. Please restart the assessment.");
      }

      // 4. Final Insert into Supabase with DOB and Class
      const { error } = await supabase.from('assessment_results').insert({
        student_name: studentData.name,
        student_dob: studentData.dob,      // Matches your new DB column
        student_class: studentData.studentClass, // Matches your new DB column
        linguistic_score: scores.Linguistic,
        logical_score: scores.Logical,
        spatial_score: scores.Spatial,
        kinesthetic_score: scores.Kinesthetic,
        musical_score: scores.Musical,
        interpersonal_score: scores.Interpersonal,
        intrapersonal_score: scores.Intrapersonal,
        naturalist_score: scores.Naturalist,
        // Spreads pref_81, pref_82, ..., pref_92 into the object
        ...prefScores 
      });

      if (error) throw error;
      setScreen('thankyou');
    } catch (error) {
      console.error('Error submitting assessment:', error);
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

  return <ThankYou studentName={studentData.name} />;
}

export default App;