import React, { useEffect, useMemo, useState } from "react";
import { SkirmishRewardTrack } from "../data/SkirmishBuffs";
import { calculateRemainingPoints } from "../utilities/Calculations";

const RewardTracker = ({ onSelect, tier, chest }) => {
    const [selectedChest, setSelectedChest] = useState(0);
    const [selectedTier, setSelectedTier] = useState(1);
    const chestId = SkirmishRewardTrack.findIndex(track => track.chest === chest);
    const remainingPoints = useMemo(() => calculateRemainingPoints(chestId, tier), [chestId, tier])

    useEffect(() => {
        onSelect(remainingPoints);
    }, [remainingPoints, onSelect])

    return (
        <div className="space-y-6 p-4 bg-white border-gray-300 border rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800">Your progress</h2>
            <div>
                <label htmlFor="chest" className="block text-sm font-medium text-gray-700">
                    Current Chest
                </label>
                <select
                    id="chest"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    value={selectedChest}
                    onChange={(e) => setSelectedChest(Number(e.target.value))}
                >
                    {SkirmishRewardTrack.map((chest, index) => (
                        <option key={index} value={index}>
                            {chest.chest}
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <label htmlFor="tier" className="block text-sm font-medium text-gray-700">
                    Current Tier
                </label>
                <select
                    id="tier"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    value={selectedTier}
                    onChange={(e) => setSelectedTier(Number(e.target.value))}
                >
                    {Array.from({ length: SkirmishRewardTrack[selectedChest].tiers }).map((_, index) => (
                        <option key={index} value={index + 1}>
                            Tier {index + 1}
                        </option>
                    ))}
                </select>
            </div>

            <div className="bg-gray-100 p-4 rounded-md">
                <p className="text-lg font-medium text-gray-800">
                    Points Remaining: <span className="text-blue-600">{remainingPoints}</span>
                </p>
            </div>
        </div>
    );
};

export default RewardTracker;