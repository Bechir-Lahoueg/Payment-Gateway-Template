import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Package, Truck } from 'lucide-react';
import { OrderItem } from '../../types/payment';

const OrderSummary: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const items: OrderItem[] = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 99.99,
      quantity: 1,
      image: "https://images.pexels.com/photos/3394666/pexels-photo-3394666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];
  
  const shipping = 6.99;
  const tax = 23.01;
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0) + shipping + tax;
  
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-6 sm:p-8">
        <h2 className="text-2xl font-medium text-gray-900 mb-6">Order Summary</h2>
        
        <div className="sm:hidden flex justify-between items-center mb-4">
          <button 
            type="button"
            className="flex items-center text-sm font-medium text-blue-600"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? 'Hide order details' : 'Show order details'}
            {isExpanded ? <ChevronUp className="h-4 w-4 ml-1" /> : <ChevronDown className="h-4 w-4 ml-1" />}
          </button>
        </div>
        
        <div className={`space-y-4 mb-8 ${isExpanded ? 'block' : 'hidden sm:block'}`}>
          {items.map(item => (
            <div key={item.id} className="flex items-start">
              <div className="h-16 w-16 rounded-lg bg-gray-200 overflow-hidden flex-shrink-0">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div className="ml-4 flex-1">
                <h3 className="text-base font-medium text-gray-900">{item.name}</h3>
                <p className="mt-1 text-xs text-gray-500">Quantity: {item.quantity}</p>
              </div>
              <span className="text-base font-medium text-gray-900">${item.price.toFixed(2)}</span>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-200 pt-6 space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-medium text-gray-900">${items.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Shipping</span>
            <span className="font-medium text-gray-900">${shipping.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Tax</span>
            <span className="font-medium text-gray-900">${tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between pt-3 border-t border-gray-200 text-base font-semibold">
            <span className="text-gray-900">Total</span>
            <span className="text-blue-700">${total.toFixed(2)}</span>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-200 pt-6">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <Truck className="h-5 w-5 text-gray-400" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-gray-900">Standard Shipping</h3>
              <p className="mt-1 text-xs text-gray-500">Delivery in 3-5 business days</p>
            </div>
          </div>
          
          <div className="flex items-start mt-4">
            <div className="flex-shrink-0">
              <Package className="h-5 w-5 text-gray-400" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-gray-900">Return Policy</h3>
              <p className="mt-1 text-xs text-gray-500">30-day return guarantee</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 px-6 py-4 sm:px-8 sm:py-6">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">Payment Total</span>
          <span className="text-xl font-semibold text-gray-900">${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;