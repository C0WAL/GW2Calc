import { GatsbyImage } from 'gatsby-plugin-image';
import React, { useState, useEffect } from 'react';

const Selector = React.memo(({ data, label, defaultOptionId, onSelectionChange, multiple = false }) => {
    const [selectedOptions, setSelectedOptions] = useState(multiple ? (defaultOptionId || []) : (defaultOptionId || null));

    useEffect(() => {
        if (onSelectionChange) {
            if (multiple && Array.isArray(selectedOptions)) {
                onSelectionChange(selectedOptions);
            } else if (!multiple) {
                onSelectionChange(selectedOptions);
            }
        }
    }, [selectedOptions,multiple,onSelectionChange]);

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
            <h2 className="text-xl font-semibold text-gray-800">{label}</h2>
            <div className="space-y-4">
                {data && Array.isArray(data) ? (
                    data.map((option) => (
                        <label
                            key={option.id}
                            className={`flex items-center cursor-pointer p-2 rounded-lg transition-colors duration-200 ${(multiple && selectedOptions.includes(option.id)) || (!multiple && selectedOptions === option.id)
                                ? 'bg-sand'
                                : 'hover:bg-gray-100'
                                }`}
                        >
                            <input
                                type={multiple ? 'checkbox' : 'radio'}
                                name={label}
                                value={option.id}
                                checked={multiple ? selectedOptions.includes(option.id) : selectedOptions === option.id}
                                onChange={() => handleChange(option.id)}
                                className="sr-only peer"
                            />
                            <div className="flex items-center space-x-3">
                                <GatsbyImage
                                    image={option.image}
                                    alt={option.name}
                                    style={{ width: '49px', height: '60px', objectFit: 'contain' }}
                                />
                                <span className="text-lg font-medium text-gray-700">{option.name}</span>
                            </div>
                        </label>
                    ))
                ) : (
                    <p>No data available</p>
                )}
            </div>
        </div>
    );
});

export default Selector;