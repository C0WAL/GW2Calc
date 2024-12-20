import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';

export const useDropdownImage = () => {
    const { allFile } = useStaticQuery(graphql`
        query {
            allFile(filter: { relativePath: { regex: "/dropdown/" } ,extension: { eq: "png" } }) {
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

    return (icon) => imageMap[`dropdown/${icon}`] || null;
};