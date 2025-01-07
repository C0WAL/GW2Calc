import { GatsbyImage } from 'gatsby-plugin-image';
import React, { useState, useEffect } from 'react';

const GridSelector = ({ data, label, defaultOptionId, onSelectionChange, multiple = false }) => {
    const [selectedOptions, setSelectedOptions] = useState(multiple ? (defaultOptionId || []) : (defaultOptionId || null));
    console.log(selectedOptions);

    useEffect(() => {
        if (multiple && Array.isArray(selectedOptions)) {
            onSelectionChange && onSelectionChange(selectedOptions);
        } else if (!multiple) {
            onSelectionChange && onSelectionChange(selectedOptions);
        }
    }, [selectedOptions, multiple, onSelectionChange]);

    const handleChange = (optionId) => {
        if (multiple) {
            setSelectedOptions((prevSelectedOptions) => {
                const newSelectedOptions = prevSelectedOptions.includes(optionId)
                    ? prevSelectedOptions.filter((id) => id !== optionId)
                    : [...prevSelectedOptions, optionId];

                return newSelectedOptions;
            });
        } else {
            setSelectedOptions(optionId);
        }
    };

    return (
        <div className="space-y-6 p-4 bg-white border-gray-300 border rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-light_text">{label}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {data && Array.isArray(data) ? (
                    data.map((option) => (
                        <label
                            key={option.id}
                            className={`flex items-center cursor-pointer p-2 rounded-lg transition-colors duration-200 ${(multiple && selectedOptions.includes(option.id)) || (!multiple && selectedOptions === option.id)
                                ? 'bg-light_details'
                                : 'hover:bg-gray-100'
                                }`}
                        >
                            <input
                                type={multiple ? 'checkbox' : 'radio'}
                                name="war-score"
                                value={option.id}
                                checked={multiple ? selectedOptions.includes(option.id) : selectedOptions === option.id}
                                onChange={() => handleChange(option.id)}
                                className="sr-only peer"
                            />
                            <div className="flex items-center space-x-3">
                                <GatsbyImage
                                    image={option.image}
                                    alt={option.name}
                                />
                                <span className="text-lg font-medium text-light_text">{option.name}</span>
                            </div>
                        </label>
                    ))) : (<p>No data available</p>)}
            </div>
        </div>
    );
};

export default GridSelector;