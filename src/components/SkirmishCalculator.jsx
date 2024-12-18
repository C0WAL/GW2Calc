import { useCallback, useMemo, useState } from "react";
import React from "react";
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
import { calculateRemainingPoints } from "../utilities/Calculations";

const SkirmishCalculator = () => {
    const [selectedOptions, setSelectedOptions] = useState({
        warScore: 'war-score-2',
        additionalOptions: ['commitment'],
        wvwRank: 'initiate',
    });
    const [chosenChest, setChosenChest] = useState(SkirmishRewardTrack[0].chest);
    const [chosenTier, setChosenTier] = useState(1);

    const getImageForOption = useImages();
    const getSkirmishRewardTrackImage = useSkirmishRewardTrackImages();
    const chosenChestId = SkirmishRewardTrack.findIndex(track => track.chest === chosenChest);
    const remainingPoints = calculateRemainingPoints(chosenChestId, chosenTier);

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
                <ButtonSelector chest={chosenChest} onSelect={handleChosenTier} />
            </div>
            <div className="p-4 flex justify-center space-x-4">
                <div className="p-4 bg-white items-center flex-col flex border-clay border-2 rounded-lg shadow-md">
                    <h3 className="font-bold text-3xl mb-2">You will finish weekly skirmish reward track in
                        <div className="center ml-2 relative inline-block select-none whitespace-nowrap rounded-lg bg-clay py-2 px-3.5 align-baseline font-sans text-3xl font-bold uppercase leading-none text-black" style={{ minWidth: "700px" }}>
                            <div className="mt-px flex justify-center">{prettyMilliseconds(remainingTimeMs, { verbose: true })}</div>
                        </div>
                    </h3>
                    <span>You're currently gaining {pipsPerTick} pips per tick (5 minutes).</span>
                    <span>You need {remainingPoints} more pips to finish.</span>
                </div>
            </div>
        </div>
    );
};

export default SkirmishCalculator;
