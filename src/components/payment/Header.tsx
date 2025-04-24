import React from 'react';
import { ShoppingBag } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center">
      <div className="flex items-center">
        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100">
          <ShoppingBag className="h-6 w-6 text-blue-600" />
        </div>
        <h1 className="ml-3 text-2xl font-bold text-gray-900">YourBrand</h1>
      </div>
      
      <div className="mt-4 sm:mt-0">
        <div className="flex items-center space-x-3">
          <div className="flex flex-col items-center">
            <div className="h-8 w-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-medium">1</div>
            <span className="mt-1 text-xs text-gray-500">Cart</span>
          </div>
          <div className="w-12 h-[2px] bg-gray-200">
            <div className="w-full h-full bg-blue-500"></div>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-8 w-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-medium">2</div>
            <span className="mt-1 text-xs font-medium text-gray-900">Payment</span>
          </div>
          <div className="w-12 h-[2px] bg-gray-200">
            <div className="w-0 h-full bg-blue-500"></div>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-8 w-8 rounded-full bg-gray-200 text-gray-400 flex items-center justify-center text-sm font-medium">3</div>
            <span className="mt-1 text-xs text-gray-500">Confirmation</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;