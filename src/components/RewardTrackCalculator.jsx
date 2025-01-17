import React, { useCallback, useMemo, useState } from "react";
import { useWvWRewardTrackImages } from "../utilities/WvWRewardTrackImageUtils";
import { BasicRewardTrackBonuses, RestedInComfyHome, WvWGuildEnhancement } from "../data/RewardTrackMods";
import GridSelector from "./common/GridSelector";
import { DropdownSelector } from "./common/DropdownSelector";
import prettyMilliseconds from "pretty-ms";
import { calculateTotalBonus } from "../utilities/RewardTrackCalculations";
import ToggleSwitch from "./common/ToggleSwitch";

const RewardTrackCalculator = () => {
    const [pointsPerTick, setPointsPerTick] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState({
        basicBonus: [],
        restedBonus: 0,
        guildBonus: 0,
    });

    const handleSelectionChange = useCallback((key, value) => {
        setSelectedOptions((prevState) => {
            if (prevState[key] === value) {
                return prevState;
            }

            return {
                ...prevState,
                [key]: value,
            }
        });
    }, []);

    const getImageForOption = useWvWRewardTrackImages();
    const enrichedBasicWvWBonuses = BasicRewardTrackBonuses.map((buff) => ({
        ...buff,
        image: getImageForOption(buff.icon),
    }));

    const totalBonus = useMemo(() => {
        return calculateTotalBonus(selectedOptions);
    }, [selectedOptions])



    return (
        <div>
            <div className="flex space-x-4 justify-center">
                <GridSelector
                    data={enrichedBasicWvWBonuses}
                    label="Basic bonuses"
                    multiple={true}
                    onSelectionChange={(value) => handleSelectionChange('basicBonus', value)}
                />
                <div className="flex flex-col space-y-4">
                    <DropdownSelector title="Rested bonus" icon="resting-bonus.png" content={RestedInComfyHome} onChange={(value) => handleSelectionChange('restedBonus', value)} />
                    <DropdownSelector title="Guild bonus" icon="guild-bonus.png" content={WvWGuildEnhancement} onChange={(value) => handleSelectionChange('guildBonus', value)} />
                </div>
            </div>
            <div>
                <ToggleSwitch label="test"></ToggleSwitch>
            </div>
            <div className="p-4 flex justify-center space-x-4">
                <div className="p-4 bg-background_color items-center flex-col flex border-border_color border-2 rounded-lg shadow-md">
                    <h3 className="font-bold text-text_color text-3xl mb-2">You will finish your reward track in
                        <div className="center ml-2 relative inline-block select-none whitespace-nowrap rounded-lg bg-details_color py-2 px-3.5 align-baseline font-sans text-3xl font-bold uppercase leading-none text-text_color" style={{ minWidth: "700px" }}>
                            <div className="mt-px flex justify-center">{prettyMilliseconds(100, { verbose: true })}</div>
                        </div>
                    </h3>
                    <span className="text-text_color text-xl">You're currently gaining {pointsPerTick} points per tick (5 minutes).</span>
                    <span className="text-text_color text-xl">Your total bonus from boosters is {totalBonus}%.</span>
                </div>
            </div>
        </div>
    )
}

export default RewardTrackCalculator;