import { useState, useEffect } from 'react';
import { Lock, Download, RefreshCw, BarChart2 } from 'lucide-react';
import { supabase } from '../lib/supabase';

// Updated Password as per your request
const ADMIN_PASSWORD = 'Vikrambali';

// Preference Keyword Mapping
const preferenceKeywords: { [key: string]: string } = {
  pref_81: "People",
  pref_82: "Tech",
  pref_83: "Numbers",
  pref_84: "Outdoor",
  pref_85: "Creative",
  pref_86: "Leadership",
  pref_87: "Helping",
  pref_88: "Speaking",
  pref_89: "Design",
  pref_90: "Physical",
  pref_91: "Science",
  pref_92: "Business"
};

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [results, setResults] = useState<any[]>([]); 
  const [loading, setLoading] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      fetchResults();
    }
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Incorrect password');
      setPassword('');
    }
  };

  const fetchResults = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('assessment_results')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setResults(data || []);
    } catch (err) {
      console.error('Error fetching results:', err);
    } finally {
      setLoading(false);
    }
  };

  const downloadCSV = () => {
    const headers = [
      'Student Name',
      'DOB',
      'Class',
      'Date/Time',
      'Linguistic',
      'Logical',
      'Spatial',
      'Kinesthetic',
      'Musical',
      'Interpersonal',
      'Intrapersonal',
      'Naturalist',
      ...Object.values(preferenceKeywords) // Uses keywords for CSV headers
    ];

    const rows = results.map(result => [
      `"${result.student_name}"`,
      result.student_dob || 'N/A',
      `"${result.student_class || 'N/A'}"`,
      new Date(result.created_at).toLocaleString(),
      result.linguistic_score,
      result.logical_score,
      result.spatial_score,
      result.kinesthetic_score,
      result.musical_score,
      result.interpersonal_score,
      result.intrapersonal_score,
      result.naturalist_score,
      result.pref_81 || 0,
      result.pref_82 || 0,
      result.pref_83 || 0,
      result.pref_84 || 0,
      result.pref_85 || 0,
      result.pref_86 || 0,
      result.pref_87 || 0,
      result.pref_88 || 0,
      result.pref_89 || 0,
      result.pref_90 || 0,
      result.pref_91 || 0,
      result.pref_92 || 0
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `genius-brainz-results-${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-8">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-gray-800 p-4 rounded-full">
              <Lock className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 text-center mb-6">Admin Access</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Enter Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none"
              />
            </div>
            {error && (
              <div className="bg-red-50 border-l-4 border-red-600 p-3 rounded-r">
                <p className="text-red-700 text-sm">{error}</p>
              </div>
            )}
            <button type="submit" className="w-full bg-gray-800 text-white py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors">Login</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
            <h1 className="text-3xl font-bold text-gray-900">Genius Brainz Dashboard</h1>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setShowPreferences(!showPreferences)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${showPreferences ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700'}`}
              >
                <BarChart2 className="w-4 h-4" />
                {showPreferences ? 'Show MI Scores' : 'Show Preferences'}
              </button>
              <button
                onClick={fetchResults}
                disabled={loading}
                className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                Refresh
              </button>
              <button
                onClick={downloadCSV}
                disabled={results.length === 0}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Download className="w-4 h-4" />
                Export CSV
              </button>
            </div>
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-12">
              <RefreshCw className="w-8 h-8 text-gray-400 animate-spin" />
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b-2 border-gray-200">
                    <th className="px-4 py-3 text-left font-semibold text-gray-900">Student Info</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-900">Class</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-900">Date/Time</th>
                    {!showPreferences ? (
                      <>
                        <th className="px-2 py-3 text-center font-semibold text-gray-900">LING</th>
                        <th className="px-2 py-3 text-center font-semibold text-gray-900">LOGI</th>
                        <th className="px-2 py-3 text-center font-semibold text-gray-900">SPAT</th>
                        <th className="px-2 py-3 text-center font-semibold text-gray-900">KINE</th>
                        <th className="px-2 py-3 text-center font-semibold text-gray-900">MUSI</th>
                        <th className="px-2 py-3 text-center font-semibold text-gray-900">INTE</th>
                        <th className="px-2 py-3 text-center font-semibold text-gray-900">INTR</th>
                        <th className="px-2 py-3 text-center font-semibold text-gray-900">NATU</th>
                      </>
                    ) : (
                      <>
                        {Object.values(preferenceKeywords).map((keyword) => (
                          <th key={keyword} className="px-2 py-3 text-center font-semibold text-indigo-700 whitespace-nowrap">
                            {keyword}
                          </th>
                        ))}
                      </>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {results.map((result, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-4">
                        <div className="font-bold text-gray-900">{result.student_name}</div>
                        <div className="text-[10px] text-gray-500 uppercase font-semibold">DOB: {result.student_dob || 'N/A'}</div>
                      </td>
                      <td className="px-4 py-4 text-gray-700 font-medium">
                        {result.student_class || 'N/A'}
                      </td>
                      <td className="px-4 py-4 text-gray-500 whitespace-nowrap">
                        {new Date(result.created_at).toLocaleDateString()}
                      </td>
                      {!showPreferences ? (
                        <>
                          <td className="text-center font-medium">{result.linguistic_score}</td>
                          <td className="text-center font-medium">{result.logical_score}</td>
                          <td className="text-center font-medium">{result.spatial_score}</td>
                          <td className="text-center font-medium">{result.kinesthetic_score}</td>
                          <td className="text-center font-medium">{result.musical_score}</td>
                          <td className="text-center font-medium">{result.interpersonal_score}</td>
                          <td className="text-center font-medium">{result.intrapersonal_score}</td>
                          <td className="text-center font-medium">{result.naturalist_score}</td>
                        </>
                      ) : (
                        <>
                          <td className="text-center text-indigo-600 font-bold">{result.pref_81 || '-'}</td>
                          <td className="text-center text-indigo-600 font-bold">{result.pref_82 || '-'}</td>
                          <td className="text-center text-indigo-600 font-bold">{result.pref_83 || '-'}</td>
                          <td className="text-center text-indigo-600 font-bold">{result.pref_84 || '-'}</td>
                          <td className="text-center text-indigo-600 font-bold">{result.pref_85 || '-'}</td>
                          <td className="text-center text-indigo-600 font-bold">{result.pref_86 || '-'}</td>
                          <td className="text-center text-indigo-600 font-bold">{result.pref_87 || '-'}</td>
                          <td className="text-center text-indigo-600 font-bold">{result.pref_88 || '-'}</td>
                          <td className="text-center text-indigo-600 font-bold">{result.pref_89 || '-'}</td>
                          <td className="text-center text-indigo-600 font-bold">{result.pref_90 || '-'}</td>
                          <td className="text-center text-indigo-600 font-bold">{result.pref_91 || '-'}</td>
                          <td className="text-center text-indigo-600 font-bold">{result.pref_92 || '-'}</td>
                        </>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}