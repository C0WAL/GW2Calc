import { GatsbyImage } from "gatsby-plugin-image"
import React, { useCallback, useEffect, useState } from "react"
import Select from 'react-select'
import { useDropdownImage } from "../../utilities/DropdownImageUtils"
import ToggleSwitch from "./ToggleSwitch"
export const ToggleDropdownSelector = ({ title, icon, content,content2, width, onChange }) => {
    const dropDownWidth = width || "min-w-96";
    const getImageForOption = useDropdownImage();
    const image = getImageForOption(icon);
    const [switchState, setSwitchState] = useState(false);
    const [options, setOptions] = useState(content);

    useEffect(() => {
        if(switchState){
            setOptions(content2);
        }else{
            setOptions(content);
        }
    },[switchState])

    const handleSwitchState = useCallback((tier) => {
        setSwitchState(tier);
    }, []);

    const handleChange = (option) => {
        onChange(option.value);
    };

    return (
        <div className="space-y-4 p-4 bg-background_color border-border_color border rounded-lg shadow-md">
            <div className="flex mb-2 space-x-2">
                <GatsbyImage
                    image={image}
                    alt={icon}
                />
                <h4 className="text-xl font-semibold text-text_color">{title}</h4>
            </div>
            <div className="flex flex-col space-y-2">
                <ToggleSwitch label_left="Core" label_right="EoTM" onChange={handleSwitchState} />
                <span>{switchState.toString()}</span>
                <Select
                    options={options}
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
        </div>
    )
}