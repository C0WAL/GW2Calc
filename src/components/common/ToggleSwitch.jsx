import React from "react";
const ToggleSwitch = ({label_left,label_right}) => {
    return (
        <div className="flex items-center text-text_color font-semibold">
            <span>{label_left}</span>
            <label className="relative flex justify-center items-center group p-2 text-xl">
                <input type="checkbox" className="absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none rounded-md" />
                <span className="w-24 h-10 flex items-center flex-shrink-0 ml-1 p-1 bg-hover_color rounded-full duration-300 ease-in-out peer-checked:bg-details_color after:w-8 after:h-8 after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-14"></span>
            </label>
            <span>{label_right}</span>
        </div>
    );
};

export default ToggleSwitch;