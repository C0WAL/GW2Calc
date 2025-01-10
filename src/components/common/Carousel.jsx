import React, { useEffect, useState } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

const Carousel = ({ tracks, onSelect }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const getWrappedIndex = (index) => {
        if (index < 0) return tracks.length - 1;
        if (index >= tracks.length) return 0;
        return index;
    };

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => getWrappedIndex(prevIndex - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => getWrappedIndex(prevIndex + 1));
    };

    useEffect(() => {
        onSelect(tracks[currentIndex].chest);
    }, [currentIndex, onSelect, tracks]);

    return (
        <div className="flex justify-center items-center w-full overflow-hidden relative">
            <div className="flex items-center relative gap-2.5">
                <button className="cursor-pointer left-arrow" onClick={goToPrevious} aria-label={`Left carousel arrow`}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" className="fill-current text-text_color">
                        <path d="M472-440h128q17 0 28.5-11.5T640-480q0-17-11.5-28.5T600-520H472l36-36q11-11 11-28t-11-28q-11-11-28-11t-28 11L348-508q-12 12-12 28t12 28l104 104q11 11 28 11t28-11q11-11 11-28t-11-28l-36-36Zm8 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                    </svg>
                </button>

                <div className="flex items-center overflow-hidden gap-5">
                    {[-1, 0, 1].map((offset) => {
                        const trackIndex = getWrappedIndex(currentIndex + offset);
                        const track = tracks[trackIndex];

                        const isCenter = offset === 0;

                        return (
                            <div
                                key={`${track.chest}-${offset}`}
                                className={`text-center opacity-50 relative w-[250px] flex-[0_0_auto] ${isCenter ? 'center' : 'side'} ${offset === 1 ? 'translate-x-[100%] scale-[0.8]' : ''} ${offset === -1 ? 'translate-x-[-100%] scale-[0.8]' : ''}`}
                                style={{
                                    opacity: isCenter? 1 : 0.5,
                                    transform: isCenter ? 'scale(1)' : 'scale(0.8)',
                                }}
                            >
                                <GatsbyImage
                                    image={track.image}
                                    alt={track.chest}
                                    style={{ width: '250px', height: '167px', objectFit: 'contain' }}
                                />
                                {isCenter && <p className="mt-2.5 text-lg font-bold text-text_color text-center">{track.chest}</p>}
                            </div>
                        );
                    })}
                </div>

                <button className="cursor-pointer right-arrow" onClick={goToNext} aria-label={`Right carousel arrow`}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" className="fill-current text-text_color">
                        <path d="m488-440-36 36q-11 11-11 28t11 28q11 11 28 11t28-11l104-104q12-12 12-28t-12-28L508-612q-11-11-28-11t-28 11q-11 11-11 28t11 28l36 36H360q-17 0-28.5 11.5T320-480q0 17 11.5 28.5T360-440h128Zm-8 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                    </svg>
                </button>
            </div>
        </div>
    );
};


export default Carousel;