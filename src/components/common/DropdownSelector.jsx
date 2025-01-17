import { GatsbyImage } from "gatsby-plugin-image"
import React, { useState } from "react"
import Select from 'react-select'
import { useDropdownImage } from "../../utilities/DropdownImageUtils"
export const DropdownSelector = ({ title, icon, content, width, onChange }) => {
    const dropDownWidth = width || "min-w-96";
    const getImageForOption = useDropdownImage();
    const image = getImageForOption(icon);

    const handleChange = (option) => {
        onChange(option.value);
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
                styles={{
                    control: (base) => ({
                        ...base,
                        backgroundColor: 'var(--background)',
                        color: 'var(--text)',
                        borderColor: 'var(--border)',
                    }),
                    menu: (base) => ({
                        ...base,
                        backgroundColor: 'var(--background)',
                        color: 'var(--text)',
                    }),
                    option: (base, state) => ({
                        ...base,
                        backgroundColor: state.isSelected
                            ? 'var(--background)'
                            : 'var(--background)',
                        color: 'var(--text)',
                        ':hover': {
                            backgroundColor: 'var(--hover)', 
                            color: 'var(--text)',
                        },
                    }),
                    singleValue: (base) => ({
                        ...base,
                        color: 'var(--text)',
                    })
                }}
            />
        </div>
    )
}