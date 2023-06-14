import React from "react";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";
import { PageProps, graphql} from "gatsby";

// 밑에 선언한 query명(BlogTitle)으로 타입 자동완성(BlogTitlesQuery)
// Queries로 네임스페이스 사용
export default function Blog({ data }: PageProps<Queries.BlogPostQuery>) {
  return (
    <Layout title="title : Blog">
      <section className="grid">
        {data.allMdx.nodes.map((file, index) => (
          <article key={index}>
            <a href={`/blog/${file.frontmatter?.slug}`}>
              <h1>{file.frontmatter?.title}</h1>
              <h1>{file.frontmatter?.category}</h1>
              <h1>{file.frontmatter?.data}</h1>
              <h1>{file.frontmatter?.name}</h1>
              <h1>{file.excerpt}</h1>
              <hr />
            </a>
          </article>
        ))}
      </section>
    </Layout>
  );
}

export const query = graphql`
  query BlogPost {
    allMdx {
      nodes {
        frontmatter {
          slug
          title
          category
          data(formatString: "YYY.MM.DD")
          name
        }
        excerpt(pruneLength: 10)
      }
    }
  }
`;

export const Head = () => <Seo title="Blog" />;
