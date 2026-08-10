import { Coffee, Heart } from 'lucide-react';

export default function DonationBanner() {
  return (
    <div className="mt-12 bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-6 sm:p-8 text-center border border-blue-100 dark:border-blue-800/30 shadow-sm transition-all duration-300 hover:shadow-md">
      <div className="flex justify-center mb-4">
        <div className="p-3 bg-blue-100 dark:bg-blue-800 rounded-full animate-bounce-slow">
          <Heart className="w-6 h-6 text-blue-600 dark:text-blue-300 fill-current" />
        </div>
      </div>
      <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
        Find this calculator helpful?
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-lg mx-auto text-sm sm:text-base">
        This tool is completely free and built to help students like you. If it saved you some time or helped plan your grades, consider buying me a coffee to keep it running! ☕
      </p>
      <a
        href="https://paypal.me/itssahil786"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-[#0070ba] hover:bg-[#005ea6] text-white font-semibold rounded-lg transition-colors duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
      >
        <Coffee className="w-5 h-5" />
        <span>Support with PayPal</span>
      </a>
    </div>
  );
}
