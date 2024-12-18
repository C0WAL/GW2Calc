import React, { useCallback, useState } from "react";
import { useWvWRewardTrackImages } from "../utilities/WvWRewardTrackImageUtils";
import { BasicRewardTrackBonuses, RestedInComfyHome } from "../data/RewardTrackMods";
import GridSelector from "./common/GridSelector";
import Select from 'react-select'

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
            <Select options={RestedInComfyHome}/>
        </div>
    )
}

export default RewardTrackCalculator;