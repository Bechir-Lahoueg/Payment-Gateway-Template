import React from 'react';
import { CreditCardIcon } from 'lucide-react';

interface PayPalFormProps {
  onSubmit: (data: any) => void;
}

const PayPalForm: React.FC<PayPalFormProps> = ({ onSubmit }) => {
  return (
    <div className="space-y-6">
      <div className="text-center p-6 border border-gray-200 rounded-lg bg-gray-50">
        <CreditCardIcon className="h-10 w-10 mx-auto text-gray-500 mb-3" />
        <p className="text-gray-600 mb-4">PayPal integration is not available in the demo version.</p>
        <p className="text-sm text-gray-500">In a production environment, this would integrate with the PayPal API.</p>
      </div>
      
      <button
        type="button"
        onClick={() => onSubmit({})}
        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 transition duration-200 ease-in-out transform hover:translate-y-[-1px] active:translate-y-[1px]"
      >
        Pay with PayPal
      </button>
    </div>
  );
};

export default PayPalForm;