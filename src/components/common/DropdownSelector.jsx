import { GatsbyImage } from "gatsby-plugin-image"
import React, { useState } from "react"
import Select from 'react-select'
import { useDropdownImage } from "../../utilities/DropdownImageUtils"
export const DropdownSelector = ({ title, icon, content, width, onChange }) => {
    const dropDownWidth = width || "min-w-96";
    const [selectedOption, setSelectedOption] = useState(0);
    const getImageForOption = useDropdownImage();
    const image = getImageForOption(icon);

    const handleChange = (option) => {
        setSelectedOption(option.value);
    };

    return (
        <div className="space-y-6 p-4 bg-background_color border-border_color border rounded-lg shadow-md">
            <div className="flex mb-2 space-x-2">
                <GatsbyImage
                    image={image}
                    alt={icon}
                />
                <h4 className="text-xl font-semibold text-text_color">{title}</h4>
            </div>
            <Select
                options={content}
                onChange={handleChange}
                className={`${dropDownWidth}`}
            />
            <span>{selectedOption}</span>
        </div>
    )
}