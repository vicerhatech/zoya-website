import { CheckCircle } from "lucide-react"; // Make sure you have lucide-react installed

const ThankYouPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-purple-800 to-purple-600 p-4 lg:pt-20">
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl max-w-xl w-full text-center p-8 md:p-12">
        <div className="flex justify-center mb-6">
          <CheckCircle className="text-green-500 w-20 h-20 md:w-24 md:h-24" />
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Thank You!
        </h1>

        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6">
          Your message has been successfully sent. Our team at Zoya Supply will get back to you shortly.
        </p>

        <a
          href="/"
          className="inline-block bg-purple-800 hover:bg-purple-900 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 text-lg md:text-xl"
        >
          Back to Home
        </a>

        <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
          If you don’t hear from us within 24 hours, feel free to email us directly at{" "}
          <a href="mailto:support@zoyasupply.com" className="text-purple-700 hover:underline">
            support@zoyasupply.com
          </a>.
        </p>
      </div>
    </div>
  );
};

export default ThankYouPage;