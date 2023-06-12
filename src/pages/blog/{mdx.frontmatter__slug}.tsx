import React from "react";
import Layout from "../../components/Layout";
import { graphql } from "gatsby";
import Seo from "../../components/Seo";

interface IBlogProps {
  data: Queries.PostDetailQuery;
  children: any;
}

export default function BlogPost({ data, children }: IBlogProps) {
  return (
    <Layout title="Blog Post">
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
      }
    }
  }
`;

// title! : value가 undefined 또는 null이 될 수 없음을 강제로 지정
export const Head = ({ data }: IBlogProps) => <Seo title={data.mdx?.frontmatter?.title!} />;