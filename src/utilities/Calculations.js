import { AdditionalOptions, SkirmishRewardTrack, WarScoreBuff, WvwRankBuff } from "../data/SkirmishBuffs";
import { WvwTick } from "../data/WvwConsts";

export const calculatePipsPerTick = (selectedOptions) => {
    let result = 0;

    const selectedWarScore = WarScoreBuff.find((buff) => buff.id === selectedOptions.warScore);
    if (selectedWarScore) {
        result += selectedWarScore.value;
    }

    const selectedWvwRank = WvwRankBuff.find((buff) => buff.id === selectedOptions.wvwRank);
    if (selectedWvwRank) {
        result += selectedWvwRank.value;
    }

    if (selectedOptions.additionalOptions && Array.isArray(selectedOptions.additionalOptions)) {
        selectedOptions.additionalOptions.forEach((optionId) => {
            const selectedOption = AdditionalOptions.find((option) => option.id === optionId);
            if (selectedOption) {
                result += selectedOption.value;
            }
        });
    }

    return result;
}

export const calculateRemainingTime = (pipsPerTick, remainingPoints) => {
    if (isNaN(pipsPerTick) || isNaN(remainingPoints)) {
        console.error('Invalid input values.');
        return 0;
    }

    if (pipsPerTick <= 0 || remainingPoints < 0) {
        console.error('Invalid input values: pipPerTick must be greater than 0, remainingPoints cannot be negative.');
        return 0;
    }

    const result = (remainingPoints / pipsPerTick) * WvwTick.durationMs;

    return Math.floor(result);
}

export const calculateRemainingPoints = (selectedChest, selectedTier) => {
    return SkirmishRewardTrack.reduce((total, chest, index) => {
        if (index < selectedChest) {
            return total;
        } else if (index === selectedChest) {
            return total + (chest.tiers - selectedTier + 1) * chest.pipsPerTier;
        } else {
            return total + chest.tiers * chest.pipsPerTier;
        }
    }, 0);
};