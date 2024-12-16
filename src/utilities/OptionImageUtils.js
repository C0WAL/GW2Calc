import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';

export const useImages = () => {
    const { allFile } = useStaticQuery(graphql`
        query {
            allFile(filter: { extension: { eq: "png" } }) {
                nodes {
                    relativePath
                    childImageSharp {
                        gatsbyImageData(width: 49, height: 60, placeholder: BLURRED)
                    }
                }
            }
        }
    `);

    const imageMap = allFile.nodes.reduce((acc, node) => {
        acc[node.relativePath] = getImage(node.childImageSharp);
        return acc;
    }, {});

    return (icon) => imageMap[icon] || null;
};