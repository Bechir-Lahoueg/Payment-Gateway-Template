import React from 'react';
import { ShoppingBag, ShieldCheck, LockKeyhole } from 'lucide-react';
import PaymentForm from './PaymentForm';
import OrderSummary from './OrderSummary';
import Header from './Header';

const PaymentPage: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Header />
      
      <div className="mt-8 lg:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        <div className="order-2 lg:order-1">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 sm:p-8">
              <h2 className="text-2xl font-medium text-gray-900 mb-6">Payment Details</h2>
              
              <PaymentForm />
              
              <div className="mt-10 pt-6 border-t border-gray-100">
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <ShieldCheck className="h-4 w-4 text-blue-500" />
                  <span>Your payment information is secure</span>
                </div>
                <div className="mt-2 flex items-center space-x-2 text-sm text-gray-500">
                  <LockKeyhole className="h-4 w-4 text-blue-500" />
                  <span>SSL encrypted checkout</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="order-1 lg:order-2">
          <OrderSummary />
        </div>
      </div>
      
      <footer className="mt-16 text-center text-sm text-gray-500">
        <div className="flex justify-center space-x-6 mb-4">
          <img src="https://images.pexels.com/photos/6956305/pexels-photo-6956305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Payment methods" className="h-6" />
        </div>
        <p>© {new Date().getFullYear()} YourBrand. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PaymentPage;