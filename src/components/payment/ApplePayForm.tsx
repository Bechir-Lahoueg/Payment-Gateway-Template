import React from 'react';
import { Wallet } from 'lucide-react';

interface ApplePayFormProps {
  onSubmit: (data: any) => void;
}

const ApplePayForm: React.FC<ApplePayFormProps> = ({ onSubmit }) => {
  return (
    <div className="space-y-6">
      <div className="text-center p-6 border border-gray-200 rounded-lg bg-gray-50">
        <Wallet className="h-10 w-10 mx-auto text-gray-500 mb-3" />
        <p className="text-gray-600 mb-4">Apple Pay is not available in the demo version.</p>
        <p className="text-sm text-gray-500">In a production environment, this would integrate with the Apple Pay API.</p>
      </div>
      
      <button
        type="button"
        onClick={() => onSubmit({})}
        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 transition duration-200 ease-in-out transform hover:translate-y-[-1px] active:translate-y-[1px]"
      >
        <Wallet className="h-5 w-5 mr-2" />
        Pay with Apple Pay
      </button>
    </div>
  );
};

export default ApplePayForm;