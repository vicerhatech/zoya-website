import { Helmet } from "react-helmet";

const DeleteAccount = () => {
  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://zoyasupply.com/delete-account" />
      </Helmet>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12 lg:pt-20">
        <div className="max-w-2xl w-full bg-white shadow-lg rounded-xl p-8">

          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Zoya Procurement – Account Deletion Request
          </h1>

          <p className="text-gray-600 mb-6">
            If you would like to delete your Zoya account and all associated data,
            please submit a deletion request by sending an email to the address
            below.
          </p>

          <div className="bg-gray-100 p-4 rounded-lg mb-6">
            <p className="font-semibold text-gray-700">
              Email your request to:
            </p>

            <a
              href="mailto:support@zoyasupply.com "
              className="text-blue-600 font-medium underline"
            >
              support@zoyasupply.com
            </a>
          </div>

          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Include the following information in your email:
          </h2>

          <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
            <li>Your registered email address</li>
            <li>Your username (if applicable)</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Account Deletion Timeline
          </h2>

          <p className="text-gray-600 mb-6">
            Once we receive your request, we will process the account deletion
            within <span className="font-semibold">7 days</span>.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Data That Will Be Deleted
          </h2>

          <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
            <li>User account information (email and profile details)</li>
            <li>Marketplace activity associated with the account</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Data That May Be Retained Temporarily
          </h2>

          <p className="text-gray-600">
            Some records may be retained for a limited time if required for
            security purposes, fraud prevention, or legal compliance.
          </p>

        </div>
      </div>
    </>
  );
};

export default DeleteAccount;