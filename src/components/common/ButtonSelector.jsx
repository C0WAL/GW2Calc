import React, { useState, useEffect } from 'react';
import { SkirmishRewardTrack } from '../../data/SkirmishBuffs';

const ButtonSelector = ({ chest, onSelect }) => {
    const [currentTier, setCurrentTier] = useState(1);
    const chestData = SkirmishRewardTrack.find(track => track.chest === chest);
    const tiers = chestData ? chestData.tiers : 0;
    const buttons = Array.from({ length: tiers }, (_, index) => index + 1);

    const handleButtonClick = (tier) => {
        setCurrentTier(tier);
        onSelect(tier);
    };

    useEffect(() => {
        setCurrentTier(1);
        onSelect(1);
    }, [chest,onSelect]);

    return (
        <div className="flex items-center justify-center mt-4 mb-4 gap-4">
            {buttons.map((tier) => (
                <button
                    key={tier}
                    className={`tier-button w-[50px] h-[50px] rounded-full border border-background_color transition ease-in-out cursor-pointer border-4 shadow-custom-outline ${tier === currentTier ? 'bg-details_color' : 'bg-background_color'}`}
                    onClick={() => handleButtonClick(tier)}
                    disabled={tier === currentTier}
                    aria-label={`Selected tier ${tier}`}
                />
            ))}
        </div>
    )
};

export default ButtonSelector;