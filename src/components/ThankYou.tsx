import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

interface ThankYouProps {
  studentName: string;
}

export default function ThankYou({ studentName }: ThankYouProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl shadow-xl max-w-2xl w-full p-8 md:p-12 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="flex items-center justify-center mb-6"
        >
          <div className="bg-green-100 p-6 rounded-full">
            <CheckCircle className="w-16 h-16 text-green-600" />
          </div>
        </motion.div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Assessment Complete!
        </h1>

        <p className="text-xl text-gray-700 mb-6">
          Thank you, <span className="font-semibold text-blue-600">{studentName}</span>
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8 rounded-r-lg">
          <p className="text-gray-700 leading-relaxed">
            Your responses have been successfully recorded. The assessment administrator will review your results and provide feedback accordingly.
          </p>
        </div>

        <div className="space-y-3 text-gray-600">
          <p className="text-sm">
            Your results are being processed securely
          </p>
          <p className="text-sm">
            You may now close this window
          </p>
        </div>
      </motion.div>
    </div>
  );
}
