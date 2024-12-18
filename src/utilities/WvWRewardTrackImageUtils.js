import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';

export const useWvWRewardTrackImages = () => {
    const { allFile } = useStaticQuery(graphql`
        query {
            allFile(filter: { relativePath: { regex: "/wvwtracks/" } ,extension: { eq: "png" } }) {
                nodes {
                    relativePath
                    childImageSharp {
                        gatsbyImageData(width: 32, height: 32, placeholder: BLURRED)
                    }
                }
            }
        }
    `);

    const imageMap = allFile.nodes.reduce((acc, node) => {
        acc[node.relativePath] = getImage(node.childImageSharp);
        return acc;
    }, {});

    return (icon) => imageMap[`wvwtracks/${icon}`] || null;
};