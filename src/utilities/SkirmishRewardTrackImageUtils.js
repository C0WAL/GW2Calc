import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';

export const useSkirmishRewardTrackImages = () => {
    const { allFile } = useStaticQuery(graphql`
        query {
            allFile(filter: { relativePath: { regex: "/tracks/" } ,extension: { eq: "png" } }) {
                nodes {
                    relativePath
                    childImageSharp {
                        gatsbyImageData(width: 250, height: 167, placeholder: BLURRED)
                    }
                }
            }
        }
    `);

    const imageMap = allFile.nodes.reduce((acc, node) => {
        acc[node.relativePath] = getImage(node.childImageSharp);
        return acc;
    }, {});

    return (icon) => imageMap[`tracks/${icon}`] || null;
};