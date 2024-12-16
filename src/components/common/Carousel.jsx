import React, { useState } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import '../../styles/Carousel.css';

const Carousel = ({ tracks, onSelect }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const getWrappedIndex = (index) => {
        if (index < 0) return tracks.length - 1;
        if (index >= tracks.length) return 0;
        return index;
    };

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => {
            const newIndex = getWrappedIndex(prevIndex - 1);
            onSelect(tracks[newIndex].chest);
            return newIndex;
        });
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => {
            const newIndex = getWrappedIndex(prevIndex + 1);
            onSelect(tracks[newIndex].chest);
            return newIndex;
        });
    };

    return (
        <div className="carousel-container">
            <div className="carousel-wrapper">
                <button className="carousel-arrow left-arrow" onClick={goToPrevious}>
                    &#8249;
                </button>

                <div className="carousel-images">
                    {[-1, 0, 1].map((offset) => {
                        const trackIndex = getWrappedIndex(currentIndex + offset);
                        const track = tracks[trackIndex];

                        const isCenter = offset === 0;

                        return (
                            <div
                                key={`${track.chest}-${offset}`}
                                className={`carousel-item ${isCenter ? 'center' : 'side'}`}
                                style={{
                                    opacity: isCenter ? 1 : 0.5,
                                    transform: isCenter ? 'scale(1)' : 'scale(0.8)',
                                }}
                            >
                                <GatsbyImage
                                    image={track.image}
                                    alt={track.chest}
                                    style={{ width: '250px', height: '167px', objectFit: 'contain' }}
                                />
                                {isCenter && <p className="track-label">{track.chest}</p>}
                            </div>
                        );
                    })}
                </div>

                <button className="carousel-arrow right-arrow" onClick={goToNext}>
                    &#8250;
                </button>
            </div>
        </div>
    );
};


export default Carousel;