import React from 'react';
import { Star, Check, Info } from 'lucide-react';
export const AgentCard = ({
  icon,
  name,
  rating,
  reviews,
  description,
  features,
  credits,
  popular = false,
  isNew = false,
  onClick
}) => {
  return <div className="bg-white p-5 rounded-lg border border-gray-200 relative" onClick={onClick && (() => onClick())}>
      {popular && <span className="absolute top-3 right-3 bg-blue-100 text-blue-700 text-xs font-medium px-2 py-1 rounded">
          POPULAR
        </span>}
      {isNew && <span className="absolute top-3 right-3 bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded">
          NEW
        </span>}
      <div className="flex items-start mb-3">
        <div className="text-2xl mr-3">{icon}</div>
        <div>
          <h3 className="font-medium text-lg">{name}</h3>
          <div className="flex items-center">
            <Star className="text-yellow-400 fill-yellow-400" size={16} />
            <span className="ml-1 font-medium">{rating}</span>
            <span className="text-gray-500 text-sm ml-1">
              ({reviews} reviews)
            </span>
          </div>
        </div>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="mb-4">
        <h4 className="font-medium mb-2">Features:</h4>
        <div className="grid grid-cols-2 gap-1">
          {features.map((feature, index) => <div key={index} className="flex items-center">
              <Check className="text-green-500 mr-1" size={16} />
              <span className="text-sm">{feature}</span>
            </div>)}
        </div>
      </div>
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center text-gray-600">
          <span>{credits} credits per use</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center text-gray-700 border border-gray-300 px-3 py-1 rounded hover:bg-gray-50">
            <Info size={16} className="mr-1" />
            Learn More
          </button>
          <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
            + Add Agent
          </button>
        </div>
      </div>
    </div>;
};