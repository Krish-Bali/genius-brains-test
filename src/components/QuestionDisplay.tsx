import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import { Question } from '../data/questions'; 

interface QuestionDisplayProps {
  question: Question;
  currentQuestionIndex: number;
  totalQuestions: number;
  onAnswer: (score: number) => void;
}

export default function QuestionDisplay({
  question,
  currentQuestionIndex,
  totalQuestions,
  onAnswer,
}: QuestionDisplayProps) {
  const [timeLeft, setTimeLeft] = useState(60);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const isPreference = question.category === 'Preference';

  // Colors for the linear scale circles
  const circleColors = [
    'border-green-700 text-green-700', // Strongly Disagree
    'border-green-500 text-green-500', // Disagree
    'border-yellow-600 text-yellow-600', // Neutral
    'border-blue-400 text-blue-400',   // Agree
    'border-blue-700 text-blue-700',   // Strongly Agree
  ];

  useEffect(() => {
    setTimeLeft(60);
    setSelectedOption(null);

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          onAnswer(0);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentQuestionIndex, onAnswer]);

  const handleOptionSelect = (score: number) => {
    setSelectedOption(score);
  };

  const handleNext = () => {
    if (selectedOption !== null) {
      onAnswer(selectedOption);
    }
  };

  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;
  const isLastQuestion = currentQuestionIndex === totalQuestions - 1;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex flex-col">
      {/* Progress Bar */}
      <div className="w-full bg-white shadow-sm">
        <div className="h-2 bg-gray-200">
          <div
            className="h-full bg-blue-600 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center p-4">
        <motion.div
          key={currentQuestionIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-2xl shadow-xl max-w-3xl w-full p-8 md:p-12"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="text-sm font-medium text-gray-500">
              Question {currentQuestionIndex + 1} of {totalQuestions}
            </div>
            <div
              className={`flex items-center gap-2 px-4 py-2 rounded-full ${
                timeLeft <= 10
                  ? 'bg-red-100 text-red-700'
                  : 'bg-blue-100 text-blue-700'
              }`}
            >
              <Clock className="w-4 h-4" />
              <span className="font-bold text-lg">{timeLeft}s</span>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 leading-tight">
            {question.text}
          </h2>

          {/* Conditional Rendering: Linear Scale vs List */}
          {isPreference ? (
            /* --- LINEAR CIRCLE UI --- */
            <div className="flex justify-between items-start w-full py-10 mb-8 overflow-x-auto">
              {question.options.map((option, index) => (
                <div key={index} className="flex flex-col items-center flex-1 min-w-[70px]">
                  <button
                    onClick={() => handleOptionSelect(option.score)}
                    className={`w-12 h-12 md:w-14 md:h-14 border-4 rounded-full transition-all duration-200 
                      hover:scale-110 active:scale-95 mb-4 ${circleColors[index]} 
                      ${selectedOption === option.score ? 'bg-current bg-opacity-100' : 'bg-transparent'}
                    `}
                    style={{ 
                      backgroundColor: selectedOption === option.score ? 'currentColor' : 'transparent' 
                    }}
                  >
                    {selectedOption === option.score && (
                      <div className="w-full h-full flex items-center justify-center">
                         <div className="w-3 h-3 bg-white rounded-full shadow-inner" />
                      </div>
                    )}
                  </button>
                  <span className="text-[10px] md:text-xs font-bold text-center leading-tight uppercase text-gray-500 max-w-[80px]">
                    {option.text}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            /* --- STANDARD LIST UI --- */
            <div className="space-y-3 mb-8">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionSelect(option.score)}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                    selectedOption === option.score
                      ? 'border-blue-600 bg-blue-50 shadow-md'
                      : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        selectedOption === option.score
                          ? 'border-blue-600 bg-blue-600'
                          : 'border-gray-300'
                      }`}
                    >
                      {selectedOption === option.score && (
                        <div className="w-2 h-2 bg-white rounded-full" />
                      )}
                    </div>
                    <span className="text-lg text-gray-700">{option.text}</span>
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* Navigation Button */}
          <button
            onClick={handleNext}
            disabled={selectedOption === null}
            className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
          >
            {isLastQuestion ? 'Submit Assessment' : 'Next Question'}
          </button>
        </motion.div>
      </div>
    </div>
  );
}