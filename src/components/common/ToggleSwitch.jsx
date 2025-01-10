import React from "react";
const ToggleSwitch = ({ isChecked, onChange, label, icon }) => {

    return (
        <label className={`flex items-center cursor-pointer p-2 rounded-lg transition-colors duration-200 ${isChecked ? 'bg-blue-100' : 'hover:bg-gray-100'}`}>
            <div className="flex items-center space-x-3">
                {icon && (
                    <img
                        src={icon}
                        alt="icon"
                        className="w-12 h-12 border border-border_color"
                    />
                )}
                <span className="text-lg font-medium text-text_color">{label}</span>
            </div>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={onChange}
                className="sr-only peer"
            />
        </label >
    );
};

export default ToggleSwitch;