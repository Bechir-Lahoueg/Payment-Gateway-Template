import React, { useState } from 'react';
import { CreditCard } from 'lucide-react';

interface CreditCardFormProps {
  onSubmit: (data: any) => void;
}

const CreditCardForm: React.FC<CreditCardFormProps> = ({ onSubmit }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    
    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };

  const formatExpiry = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    
    if (v.length >= 3) {
      return `${v.substring(0, 2)}/${v.substring(2, 4)}`;
    }
    
    return value;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: Record<string, string> = {};
    
    if (!cardNumber.trim()) {
      newErrors.cardNumber = 'Card number is required';
    } else if (cardNumber.replace(/\s+/g, '').length < 16) {
      newErrors.cardNumber = 'Card number must be 16 digits';
    }
    
    if (!cardName.trim()) {
      newErrors.cardName = 'Cardholder name is required';
    }
    
    if (!expiry.trim()) {
      newErrors.expiry = 'Expiry date is required';
    } else {
      const [month, year] = expiry.split('/');
      const currentYear = new Date().getFullYear() % 100;
      const currentMonth = new Date().getMonth() + 1;
      
      if (
        !month || 
        !year || 
        parseInt(month) < 1 || 
        parseInt(month) > 12 || 
        (parseInt(year) < currentYear || (parseInt(year) === currentYear && parseInt(month) < currentMonth))
      ) {
        newErrors.expiry = 'Invalid expiry date';
      }
    }
    
    if (!cvc.trim()) {
      newErrors.cvc = 'CVC is required';
    } else if (cvc.length < 3) {
      newErrors.cvc = 'CVC must be 3 or 4 digits';
    }
    
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length === 0) {
      onSubmit({ cardNumber, cardName, expiry, cvc });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <CreditCard className="h-5 w-5 text-gray-400" />
        </div>
        <label htmlFor="card-number" className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
        <input
          id="card-number"
          type="text"
          value={cardNumber}
          onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
          placeholder="1234 5678 9012 3456"
          maxLength={19}
          className={`
            pl-10 block w-full rounded-lg border 
            focus:ring-2 focus:ring-blue-500 focus:border-blue-500
            transition duration-150 ease-in-out py-3 shadow-sm
            ${errors.cardNumber ? 'border-red-300' : 'border-gray-300'}
          `}
        />
        {errors.cardNumber && (
          <p className="mt-1 text-sm text-red-500">{errors.cardNumber}</p>
        )}
      </div>
      
      <div>
        <label htmlFor="card-name" className="block text-sm font-medium text-gray-700 mb-1">Cardholder Name</label>
        <input
          id="card-name"
          type="text"
          value={cardName}
          onChange={(e) => setCardName(e.target.value)}
          placeholder="John Smith"
          className={`
            block w-full rounded-lg border shadow-sm py-3
            focus:ring-2 focus:ring-blue-500 focus:border-blue-500
            transition duration-150 ease-in-out
            ${errors.cardName ? 'border-red-300' : 'border-gray-300'}
          `}
        />
        {errors.cardName && (
          <p className="mt-1 text-sm text-red-500">{errors.cardName}</p>
        )}
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="expiry" className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
          <input
            id="expiry"
            type="text"
            value={expiry}
            onChange={(e) => setExpiry(formatExpiry(e.target.value))}
            placeholder="MM/YY"
            maxLength={5}
            className={`
              block w-full rounded-lg border shadow-sm py-3
              focus:ring-2 focus:ring-blue-500 focus:border-blue-500
              transition duration-150 ease-in-out
              ${errors.expiry ? 'border-red-300' : 'border-gray-300'}
            `}
          />
          {errors.expiry && (
            <p className="mt-1 text-sm text-red-500">{errors.expiry}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="cvc" className="block text-sm font-medium text-gray-700 mb-1">CVC</label>
          <input
            id="cvc"
            type="text"
            value={cvc}
            onChange={(e) => setCvc(e.target.value.replace(/[^0-9]/g, ''))}
            placeholder="123"
            maxLength={4}
            className={`
              block w-full rounded-lg border shadow-sm py-3
              focus:ring-2 focus:ring-blue-500 focus:border-blue-500
              transition duration-150 ease-in-out
              ${errors.cvc ? 'border-red-300' : 'border-gray-300'}
            `}
          />
          {errors.cvc && (
            <p className="mt-1 text-sm text-red-500">{errors.cvc}</p>
          )}
        </div>
      </div>
      
      <div className="pt-4">
        <button
          type="submit"
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200 ease-in-out transform hover:translate-y-[-1px] active:translate-y-[1px]"
        >
          Pay $129.99
        </button>
      </div>
    </form>
  );
};

export default CreditCardForm;