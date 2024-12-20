import React, { useCallback, useState } from "react";
import { useWvWRewardTrackImages } from "../utilities/WvWRewardTrackImageUtils";
import { BasicRewardTrackBonuses, RestedInComfyHome, WvWGuildEnhancement } from "../data/RewardTrackMods";
import GridSelector from "./common/GridSelector";
import { DropdownSelector } from "./common/DropdownSelector";

const RewardTrackCalculator = () => {
    const [basicBonus, setBasicBonus] = useState([]);
    const [restedBonus, setRestedBonus] = useState(0);
    const [guildBonus, setGuildBonus] = useState(0);

    const handleBasicBonus = useCallback((bonus) => {
        setBasicBonus(bonus);
    }, []);

    const handleRestedBonus = useCallback((bonus) => {
        setRestedBonus(bonus);
    }, []);

    const handleGuildBonus = useCallback((bonus) => {
        setGuildBonus(bonus);
    }, []);

    const getImageForOption = useWvWRewardTrackImages();
    const enrichedBasicWvWBonuses = BasicRewardTrackBonuses.map((buff) => ({
        ...buff,
        image: getImageForOption(buff.icon),
    }));



    return (
        <div>
            <GridSelector
                data={enrichedBasicWvWBonuses}
                label="Basic bonuses"
                multiple={true}
                onSelectionChange={handleBasicBonus}
            />
            <div className="flex mt-4 space-x-6">
                <DropdownSelector title="Rested bonus" icon="resting-bonus.png" content={RestedInComfyHome}/>
                <DropdownSelector title="Guild bonus" icon="guild-bonus.png" content={WvWGuildEnhancement}/>
            </div>
        </div>
    )
}

export default RewardTrackCalculator;