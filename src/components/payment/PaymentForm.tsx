import React, { useState } from 'react';
import PaymentMethodSelector from './PaymentMethodSelector';
import CreditCardForm from './CreditCardForm';
import ApplePayForm from './ApplePayForm';
import PayPalForm from './PayPalForm';
import { PaymentMethod } from '../../types/payment';

const PaymentForm: React.FC = () => {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handlePaymentSubmit = (data: any) => {
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      
      // Redirect to confirmation page in real app
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    }, 2000);
  };

  if (isProcessing) {
    return (
      <div className="py-10 text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <h3 className="text-lg font-medium text-gray-900 mb-1">Processing your payment</h3>
        <p className="text-gray-500">Please wait, do not close this page...</p>
      </div>
    );
  }

  if (isSuccess) {
    return (
      <div className="py-10 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-1">Payment successful!</h3>
        <p className="text-gray-500">Redirecting to confirmation page...</p>
      </div>
    );
  }

  return (
    <div>
      <PaymentMethodSelector 
        selectedMethod={paymentMethod}
        onSelectMethod={setPaymentMethod}
      />
      
      <div className="mt-8">
        {paymentMethod === 'card' && <CreditCardForm onSubmit={handlePaymentSubmit} />}
        {paymentMethod === 'apple-pay' && <ApplePayForm onSubmit={handlePaymentSubmit} />}
        {paymentMethod === 'paypal' && <PayPalForm onSubmit={handlePaymentSubmit} />}
      </div>
    </div>
  );
};

export default PaymentForm;