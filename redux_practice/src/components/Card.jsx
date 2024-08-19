// src/components/Card.js
import React from 'react';
import { Plus } from 'lucide-react';

const Card = ({ title, progress, icon, bgColor, onPlusClick }) => {
  const handleAddToCart = () => {
    onPlusClick({ title, icon });
  };

  return (
    <div className={`bg-gradient-to-r ${bgColor} p-6 rounded-xl shadow-md relative`}>
      <div className="flex justify-between items-start">
        <span className="text-3xl">{icon}</span>
        <button
          onClick={handleAddToCart}
          className="text-gray-500 hover:text-gray-700"
        >
          <Plus className="w-6 h-6" />
        </button>
      </div>
      <h2 className="text-lg font-semibold mt-4">{title}</h2>
      <div className="mt-2 text-sm text-gray-700">{progress}</div>
      <div className="w-full h-2 bg-gray-200 rounded-full mt-4">
        <div className="h-full bg-gray-700 rounded-full" style={{ width: '98%' }}></div>
      </div>
    </div>
  );
};

export default Card;
