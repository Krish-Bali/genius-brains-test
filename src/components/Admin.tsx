import { useState, useEffect } from 'react';
import { Lock, Download, RefreshCw } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { AssessmentResult } from '../types';

const ADMIN_PASSWORD = 'Admin@2026';

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [results, setResults] = useState<AssessmentResult[]>([]);
  const [loading, setLoading] = useState(false);

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
        .order('created_at', { ascending: false }); // FIXED: Changed from completed_at to created_at

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
      'Date/Time',
      'Linguistic',
      'Logical',
      'Spatial',
      'Kinesthetic',
      'Musical',
      'Interpersonal',
      'Intrapersonal',
      'Naturalist'
    ];

    const rows = results.map(result => [
      `"${result.student_name}"`, // Wrap in quotes to handle names with commas
      new Date(result.created_at).toLocaleString(), // Matches the database column
      result.linguistic_score,
      result.logical_score,
      result.spatial_score,
      result.kinesthetic_score,
      result.musical_score,
      result.interpersonal_score,
      result.intrapersonal_score,
      result.naturalist_score
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `assessment-results-${new Date().toISOString().split('T')[0]}.csv`;
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

          <h1 className="text-2xl font-bold text-gray-900 text-center mb-6">
            Admin Access
          </h1>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Enter Password
              </label>
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

            <button
              type="submit"
              className="w-full bg-gray-800 text-white py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors"
            >
              Login
            </button>
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
            <h1 className="text-3xl font-bold text-gray-900">
              Assessment Results Dashboard
            </h1>
            <div className="flex gap-3">
              <button
                onClick={fetchResults}
                disabled={loading}
                className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors disabled:bg-gray-400"
              >
                <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                Refresh
              </button>
              <button
                onClick={downloadCSV}
                disabled={results.length === 0}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400"
              >
                <Download className="w-4 h-4" />
                Download CSV
              </button>
            </div>
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-12">
              <RefreshCw className="w-8 h-8 text-gray-400 animate-spin" />
            </div>
          ) : results.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No assessment results yet</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b-2 border-gray-200">
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Student Name</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Date/Time</th>
                    <th className="px-4 py-3 text-center text-sm font-semibold text-gray-900">Linguistic</th>
                    <th className="px-4 py-3 text-center text-sm font-semibold text-gray-900">Logical</th>
                    <th className="px-4 py-3 text-center text-sm font-semibold text-gray-900">Spatial</th>
                    <th className="px-4 py-3 text-center text-sm font-semibold text-gray-900">Kinesthetic</th>
                    <th className="px-4 py-3 text-center text-sm font-semibold text-gray-900">Musical</th>
                    <th className="px-4 py-3 text-center text-sm font-semibold text-gray-900">Interpersonal</th>
                    <th className="px-4 py-3 text-center text-sm font-semibold text-gray-900">Intrapersonal</th>
                    <th className="px-4 py-3 text-center text-sm font-semibold text-gray-900">Naturalist</th>
                  </tr>
                </thead>
                <tbody>
                  {results.map((result, index) => (
                    <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm text-gray-900 font-medium">{result.student_name}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">
                        {new Date(result.created_at).toLocaleString()}
                      </td>
                      <td className="px-4 py-3 text-sm text-center font-semibold text-gray-900">{result.linguistic_score}/50</td>
                      <td className="px-4 py-3 text-sm text-center font-semibold text-gray-900">{result.logical_score}/50</td>
                      <td className="px-4 py-3 text-sm text-center font-semibold text-gray-900">{result.spatial_score}/50</td>
                      <td className="px-4 py-3 text-sm text-center font-semibold text-gray-900">{result.kinesthetic_score}/50</td>
                      <td className="px-4 py-3 text-sm text-center font-semibold text-gray-900">{result.musical_score}/50</td>
                      <td className="px-4 py-3 text-sm text-center font-semibold text-gray-900">{result.interpersonal_score}/50</td>
                      <td className="px-4 py-3 text-sm text-center font-semibold text-gray-900">{result.intrapersonal_score}/50</td>
                      <td className="px-4 py-3 text-sm text-center font-semibold text-gray-900">{result.naturalist_score}/50</td>
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