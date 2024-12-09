import { useCallback, useMemo, useState } from "react";
import React from "react";
import RewardTracker from "./RewardTracker";
import {
    WvwRankBuff,
    WarScoreBuff,
    AdditionalOptions
} from "../data/SkirmishBuffs";
import prettyMilliseconds from "pretty-ms";
import GridSelector from "./common/GridSelector";
import Selector from "./common/selector";
import { calculatePipsPerTick, calculateRemainingTime } from "../utilities/Calculations";
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";

const SkirmishCalculator = () => {
    const [remainingPoints, setRemainingPoints] = useState(1450);
    const [selectedOptions, setSelectedOptions] = useState({
        warScore: 'war-score-2',
        additionalOptions: ['commitment'],
        wvwRank: 'initiate',
    });
    const { allFile } = useStaticQuery(graphql`
        query {
            allFile(filter: { extension: { eq: "png" } }) {
                nodes {
                    relativePath
                    childImageSharp {
                        gatsbyImageData(width: 100, height: 100, placeholder: BLURRED)
                    }
                }
            }
        }
    `);

    const getImageForOption = (icon) => {
        const imageNode = allFile.nodes.find((node) =>
            node.relativePath === icon
        );
        return imageNode ? getImage(imageNode.childImageSharp) : null;
    };

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
            <div className="p-4 flex justify-center space-x-4">
                <RewardTracker onSelect={handleRemainingPoints} />
                <div className="space-y-6 p-4 bg-white border-gray-300 border rounded-lg shadow-md">
                    <p>Pips per tick: {pipsPerTick}</p> <br></br>
                    <p>Remaining time ms: {remainingTimeMs}</p> <br></br>
                    <p>Remaining time formatted: {prettyMilliseconds(remainingTimeMs)}</p>
                </div>
            </div>
        </div>
    );
};

export default SkirmishCalculator;
