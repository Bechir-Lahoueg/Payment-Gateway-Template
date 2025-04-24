import React, { useState } from 'react';
import { CreditCard, Wallet, CreditCardIcon } from 'lucide-react';
import { PaymentMethod } from '../../types/payment';

interface PaymentMethodSelectorProps {
  selectedMethod: PaymentMethod;
  onSelectMethod: (method: PaymentMethod) => void;
}

const PaymentMethodSelector: React.FC<PaymentMethodSelectorProps> = ({ 
  selectedMethod, 
  onSelectMethod 
}) => {
  const methods = [
    { id: 'card', name: 'Credit / Debit Card', icon: CreditCard },
    { id: 'apple-pay', name: 'Apple Pay', icon: Wallet },
    { id: 'paypal', name: 'PayPal', icon: CreditCardIcon }
  ];

  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-3">
        Payment Method
      </label>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {methods.map(method => (
          <button
            key={method.id}
            type="button"
            onClick={() => onSelectMethod(method.id as PaymentMethod)}
            className={`
              group relative p-4 w-full rounded-xl border border-gray-200 
              transition-all duration-300 ease-in-out focus:outline-none
              ${selectedMethod === method.id 
                ? 'bg-blue-50 border-blue-500 shadow-sm ring-2 ring-blue-500 ring-opacity-25' 
                : 'hover:bg-gray-50 hover:border-gray-300'
              }
            `}
            aria-pressed={selectedMethod === method.id}
          >
            <div className="flex items-center">
              <div className={`
                flex items-center justify-center h-10 w-10 rounded-full 
                ${selectedMethod === method.id ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200'}
                transition-colors duration-200
              `}>
                <method.icon className="h-5 w-5" />
              </div>
              <span className={`ml-3 font-medium ${selectedMethod === method.id ? 'text-blue-700' : 'text-gray-900'}`}>{method.name}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default PaymentMethodSelector;