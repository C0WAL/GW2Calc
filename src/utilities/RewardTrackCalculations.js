import { BasicRewardTrackBonuses } from "../data/RewardTrackMods";

export const calculateTotalBonus = (selectedOptions) => {
    let result = 0;

    if (selectedOptions.guildBonus) {
        result += selectedOptions.guildBonus;
    }

    if (selectedOptions.restedBonus) {
        result += selectedOptions.restedBonus;
    }

    if (selectedOptions.basicBonus && Array.isArray(selectedOptions.basicBonus)) {
        selectedOptions.basicBonus.forEach((optionId) => {
            const selectedOption = BasicRewardTrackBonuses.find((option) => option.id === optionId);
            if (selectedOption) {
                result += selectedOption.value;
            }
        });
    }

    return result;
}