import { useState } from 'react';

interface GuidelinesProps {
  onStart: (name: string) => void;
}

export default function Guidelines({ onStart }: GuidelinesProps) {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onStart(name.trim());
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full p-8 md:p-12">
        
        {/* --- LOGO SECTION --- */}
        <div className="flex items-center justify-center mb-6">
          <img 
            src="/logo.png" 
            alt="Genius Brainz Logo" 
            className="h-40 w-auto object-contain drop-shadow-md" 
          />
        </div>

        {/* --- HEADER SECTION --- */}
        <div className="text-center mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Genius Brainz Life Solutions
          </h1>
          {/* Using a custom hex code to match the gold/yellow in your logo */}
          <h2 className="text-2xl md:text-3xl text-[#b08d3c] font-extrabold mt-2 uppercase tracking-tight">
            Physiometric Test
          </h2>
        </div>

        <p className="text-gray-500 text-center mb-8 text-lg italic">
          Unlock your potential
        </p>

        {/* --- INSTRUCTIONS SECTION --- */}
        <div className="bg-yellow-50 border-l-4 border-[#b08d3c] p-6 mb-8 rounded-r-lg">
          <h2 className="font-semibold text-gray-900 mb-4 text-lg">Instructions</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-[#b08d3c] font-bold mr-2">•</span>
              <span>This assessment contains 80 questions to evaluate your cognitive abilities</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#b08d3c] font-bold mr-2">•</span>
              <span>Each question has a 60-second timer. Answer thoughtfully but promptly</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#b08d3c] font-bold mr-2">•</span>
              <span>If time expires, the question will auto-advance with no points awarded</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#b08d3c] font-bold mr-2">•</span>
              <span>Choose the option that best reflects your abilities and preferences</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#b08d3c] font-bold mr-2">•</span>
              <span>There are no right or wrong answers - be honest with yourself</span>
            </li>
          </ul>
        </div>

        {/* --- FORM SECTION --- */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Enter Your Full Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              required
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b08d3c] focus:border-transparent outline-none transition-all"
            />
          </div>

          <button
            type="submit"
            disabled={!name.trim()}
            className="w-full bg-[#b08d3c] text-white py-4 rounded-lg font-bold text-lg hover:bg-[#967832] transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
          >
            Begin Assessment
          </button>
        </form>

        <p className="text-sm text-gray-500 text-center mt-6">
          Estimated time: 80 minutes
        </p>
      </div>
    </div>
  );
}