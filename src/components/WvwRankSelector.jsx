import React from 'react';
import { WvwRankBuff } from '../data/SkirmishBuffs';

const WvwRankSelector = ({ selectedOption, onSelect }) => {

    return (
        <div className="space-y-6 p-4 bg-white border-gray-300 border rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800">WvW rank</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {WvwRankBuff.map((option) => (
                    <label
                        key={option.id}
                        className={`flex items-center cursor-pointer p-2 rounded-lg transition-colors duration-200 ${selectedOption === option.id ? 'bg-blue-100' : 'hover:bg-gray-100'}`}
                    >
                        <input
                            type="radio"
                            name="war-score"
                            value={option.id}
                            checked={selectedOption === option.id}
                            onChange={() => onSelect(option.id)}
                            className="sr-only peer"
                        />
                        <div className="flex items-center space-x-3">
                            <img
                                src={option.icon}
                                alt={option.name}
                                className="w-12 h-12 border border-gray-300"
                            />
                            <span className="text-lg font-medium text-gray-700">{option.name}</span>
                        </div>
                    </label>
                ))}
            </div>
        </div>
    );
};

export default WvwRankSelector;