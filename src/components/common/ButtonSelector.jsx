import React, { useState, useEffect } from 'react';
import '../../styles/ButtonSelector.css'
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
    }, [chest]);

    return (
        <div className="button-container justify-center mt-4 mb-4">
            {buttons.map((tier) => (
                <button
                    key={tier}
                    className={`tier-button ${tier === currentTier ? 'active' : ''}`}
                    onClick={() => handleButtonClick(tier)}
                    disabled={tier === currentTier}
                />
            ))}
        </div>
    )
};

export default ButtonSelector;