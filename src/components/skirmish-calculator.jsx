import { useCallback, useEffect, useState } from "react";
import React from "react";
import { CommanderBuff, CommitmentBuff, PublicCommanderBuff, WarScoreBuff, WvwRankBuff, WvwTick } from "../consts/skirmish-buffs";
import ToggleSwitch from "./toggle-switch";
import WarScoreSelector from "./war-score-selector";
import WvwRankSelector from "./wvw-rank-selector";
import RewardTracker from "./reward-tracker";
import prettyMilliseconds from "pretty-ms";
const SkirmishCalculator = () => {
    const [isCommander, setIsCommander] = useState(false);
    const [isPublicCommander, setIsPublicCommander] = useState(false);
    const [isCommitted, setIsCommitted] = useState(false);
    const [warScoreOption, setWarScoreOption] = useState('war-score-2');
    const [wvwRankOption, setWvwRankOption] = useState('initiate');
    const [pipsPerTick, setPipsPerTick] = useState(0);
    const [remainingPoints, setRemainingPoints] = useState(1450);
    const [remainingTime, setRemainingTime] = useState(0);

    const handleWarScoreSelect = (id) => {
        setWarScoreOption(id);
    };

    const handleWvwRankSelect = (id) => {
        setWvwRankOption(id);
    };

    const handleRemainingPoints = (points) => {
        setRemainingPoints(points);
    }

    const calculateRemainingTime = useCallback(() => {
        let time = 0;
        if(pipsPerTick != 0){
            time = Math.round(remainingPoints / pipsPerTick * WvwTick.durationMs);
        }
        let pretty = prettyMilliseconds(time);
        setRemainingTime(pretty);
    }, [remainingPoints, pipsPerTick]);

    const calculatePipsPerTick = useCallback(() => {
        let result = 0;

        const selectedWarScore = WarScoreBuff.find((buff) => buff.id === warScoreOption);
        if (selectedWarScore) {
            result += selectedWarScore.value;
        }

        const selectedWvwRank = WvwRankBuff.find((buff) => buff.id === wvwRankOption);
        if (selectedWvwRank) {
            result += selectedWvwRank.value;
        }

        if (isCommander) {
            result += CommanderBuff.value;
        }

        if (isCommitted) {
            result += CommitmentBuff.value;
        }

        if (isPublicCommander) {
            result += PublicCommanderBuff.value;
        }

        setPipsPerTick(result);
    }, [isCommander, isCommitted, isPublicCommander, warScoreOption, wvwRankOption]);

    useEffect(() => {
        calculatePipsPerTick();
    }, [calculatePipsPerTick]);

    useEffect(() => { calculateRemainingTime() }, [calculateRemainingTime]);

    return (
        <div>
            <div className="p-4 flex justify-center space-x-4">
                <WarScoreSelector selectedOption={warScoreOption} onSelect={handleWarScoreSelect} />
                <div className="space-y-6 p-4 bg-white border-gray-300 border rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold text-gray-800">Additional options</h2>
                    <div className="space-y-4">
                        <ToggleSwitch
                            isChecked={isCommander}
                            onChange={(e) => setIsCommander(e.target.checked)}
                            label={CommanderBuff.name}
                            icon={CommanderBuff.icon}
                        />
                        <ToggleSwitch
                            isChecked={isPublicCommander}
                            onChange={(e) => setIsPublicCommander(e.target.checked)}
                            label={PublicCommanderBuff.name}
                            icon={PublicCommanderBuff.icon}
                        />
                        <ToggleSwitch
                            isChecked={isCommitted}
                            onChange={(e) => setIsCommitted(e.target.checked)}
                            label={CommitmentBuff.name}
                            icon={CommitmentBuff.icon}
                        />
                    </div>
                </div>
                <WvwRankSelector selectedOption={wvwRankOption} onSelect={handleWvwRankSelect} />
            </div>
            <div className="p-4 flex justify-center space-x-4">
                <RewardTracker onSelect={handleRemainingPoints} />
                <div className="space-y-6 p-4 bg-white border-gray-300 border rounded-lg shadow-md">
                    <span>Pips per tick:
                        <span className="font-semibold"> {pipsPerTick}</span>
                    </span>
                    <span>Tick occurs every:
                        <span className="font-semibold"> {WvwTick.toString()}</span>
                    </span>
                    <span>{remainingTime}</span>
                </div>
            </div>
        </div>
    );
};

export default SkirmishCalculator;
