import { useCallback, useMemo, useState } from "react";
import React from "react";
import RewardTracker from "./RewardTracker";
import {
    WvwRankBuff,
    WarScoreBuff,
    AdditionalOptions,
    SkirmishRewardTrack
} from "../data/SkirmishBuffs";
import prettyMilliseconds from "pretty-ms";
import GridSelector from "./common/GridSelector";
import Selector from "./common/Selector";
import { calculatePipsPerTick, calculateRemainingTime } from "../utilities/Calculations";
import Carousel from "./common/Carousel";
import { useImages } from "../utilities/OptionImageUtils";
import { useSkirmishRewardTrackImages } from "../utilities/SkirmishRewardTrackImageUtils";
import ButtonSelector from "./common/ButtonSelector";

const SkirmishCalculator = () => {
    const [remainingPoints, setRemainingPoints] = useState(1450);
    const [selectedOptions, setSelectedOptions] = useState({
        warScore: 'war-score-2',
        additionalOptions: ['commitment'],
        wvwRank: 'initiate',
    });
    const [chosenChest, setChosenChest] = useState(SkirmishRewardTrack[0].chest);
    const [chosenTier, setChosenTier] = useState(1);

    const getImageForOption = useImages();
    const getSkirmishRewardTrackImage = useSkirmishRewardTrackImages();

    const enrichedWarScoreBuff = WarScoreBuff.map((buff) => ({
        ...buff,
        image: getImageForOption(buff.icon),
    }));

    const enrichedAdditionalOptions = AdditionalOptions.map((option) => ({
        ...option,
        image: getImageForOption(option.icon),
    }));

    const enrichedWvwRankBuff = WvwRankBuff.map((buff) => ({
        ...buff,
        image: getImageForOption(buff.icon),
    }));

    const enrichedSkirmishRewardTrack = SkirmishRewardTrack.map((buff) => ({
        ...buff,
        image: getSkirmishRewardTrackImage(buff.imageClosed)
    }));

    const pipsPerTick = useMemo(() => {
        return calculatePipsPerTick(selectedOptions);
    }, [selectedOptions])

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

    const handleRemainingPoints = useCallback((points) => {
        setRemainingPoints(points);
    }, []);

    const handleChosenChest = useCallback((chest) => {
        setChosenChest(chest);
    }, []);

    const handleChosenTier = useCallback((tier) => {
        setChosenTier(tier);
     }, []);

    const remainingTimeMs = useMemo(() => {
        return calculateRemainingTime(pipsPerTick, remainingPoints);
    }, [remainingPoints, pipsPerTick])

    return (
        <div>
            <div className="p-4 flex justify-center space-x-4">
                <Selector
                    data={enrichedWarScoreBuff}
                    label="War score"
                    defaultOptionId="war-score-2"
                    multiple={false}
                    onSelectionChange={(value) => handleSelectionChange('warScore', value)}
                />
                <Selector
                    data={enrichedAdditionalOptions}
                    label="Additional options"
                    defaultOptionId={['commitment']}
                    multiple={true}
                    onSelectionChange={(value) => handleSelectionChange('additionalOptions', value)}
                />
                <GridSelector
                    data={enrichedWvwRankBuff}
                    label="WvW rank"
                    defaultOptionId='initiate'
                    multiple={false}
                    onSelectionChange={(value) => handleSelectionChange('wvwRank', value)}
                />
            </div>
            <div className="justify-center">
                <Carousel tracks={enrichedSkirmishRewardTrack} onSelect={handleChosenChest} />
                <ButtonSelector chest={chosenChest} onSelect={handleChosenTier}/>
            </div>
            <div className="p-4 flex justify-center space-x-4">
                <RewardTracker onSelect={handleRemainingPoints} tier={chosenTier} chest={chosenChest}/>
                <div className="space-y-6 p-4 bg-white border-gray-300 border rounded-lg shadow-md">
                    <p>Pips per tick: {pipsPerTick}</p> <br></br>
                    <p>Remaining time ms: {remainingTimeMs}</p> <br></br>
                    <p>Remaining time formatted: {prettyMilliseconds(remainingTimeMs)}</p>
                    <p>Chest chosen: {chosenChest}</p>
                    <p>Tier chosen: {chosenTier}</p>
                </div>
            </div>
        </div>
    );
};

export default SkirmishCalculator;
