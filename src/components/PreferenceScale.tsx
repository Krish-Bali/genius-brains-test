import React from 'react';

const options = [
  { label: "STRONGLY DISAGREE", score: 1, color: "border-green-700 text-green-700" },
  { label: "DISAGREE", score: 2, color: "border-green-500 text-green-500" },
  { label: "NEUTRAL", score: 3, color: "border-yellow-600 text-yellow-600" },
  { label: "AGREE", score: 4, color: "border-blue-400 text-blue-400" },
  { label: "STRONGLY AGREE", score: 5, color: "border-blue-700 text-blue-700" },
];

interface Props {
  questionId: number;
  text: string;
  onSelect: (id: number, score: number) => void;
}

export const PreferenceScale: React.FC<Props> = ({ questionId, text, onSelect }) => {
  return (
    <div className="my-8 p-4 bg-white rounded-lg">
      <p className="text-lg font-semibold mb-6 text-gray-800">{questionId}. {text}</p>
      
      {/* This div creates the straight line layout */}
      <div className="flex justify-between items-start w-full max-w-2xl mx-auto">
        {options.map((opt) => (
          <div key={opt.score} className="flex flex-col items-center flex-1">
            <input
              type="radio"
              name={`q${questionId}`}
              className={`w-10 h-10 border-4 rounded-full appearance-none cursor-pointer transition-all 
                checked:bg-current hover:scale-110 ${opt.color}`}
              onChange={() => onSelect(questionId, opt.score)}
            />
            <span className="mt-2 text-[10px] font-bold text-center leading-tight uppercase max-w-[70px]">
              {opt.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};