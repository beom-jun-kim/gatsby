import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { PageProps, graphql } from "gatsby";

// 밑에 선언한 query명(BlogTitle)으로 타입 자동완성(BlogTitlesQuery)
// Queries로 네임스페이스 사용
export default function Blog({ data }: PageProps<Queries.BlogTitlesQuery>) {
  return (
    <Layout title="title : Blog">
      <ul>
        {data.allFile.nodes.map((file, index) => (
          <li key={index}>{file.name}</li>
        ))}
      </ul>
    </Layout>
  );
}

export const query = graphql`
  query BlogTitles {
    allFile {
      nodes {
        name
      }
    }
  }
`;

export const Head = () => <Seo title="Blog" />;
