import React from "react";
import Layout from "../../components/Layout";
import { graphql } from "gatsby";
import Seo from "../../components/Seo";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

interface IBlogProps {
  data: Queries.PostDetailQuery;
  children: any;
}

export default function BlogPost({ data, children }: IBlogProps) {
  const image = getImage(

    // ! : null이나 undefined) 값이 아니라고 타입스크립트에게 단언
    data.mdx?.frontmatter?.headerImage?.childImageSharp?.gatsbyImageData!
  );
  return (
    <Layout title="Blog Post">
      <GatsbyImage image={image as any} alt={data.mdx?.frontmatter?.title!} />
      <div>{children}</div>
    </Layout>
  );
}

export const query = graphql`
  query PostDetail($frontmatter__slug: String) {
    mdx(frontmatter: { slug: { eq: $frontmatter__slug } }) {
      frontmatter {
        category
        data
        name
        slug
        title
        headerImage {
          childImageSharp {
            gatsbyImageData(height: 300, placeholder: BLURRED)
          }
        }
      }
    }
  }
`;

// title! : value가 undefined 또는 null이 될 수 없음을 강제로 지정
export const Head = ({ data }: IBlogProps) => (
  <Seo title={data.mdx?.frontmatter?.title!} />
);
