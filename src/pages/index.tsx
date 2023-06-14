import * as React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { PageProps, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function IndexPage({ data }: PageProps<Queries.StickersQuery>) {
  return (
    <Layout title="title : hello world!">
      <div className="grid">
        {data.allContentfulStickerPack.nodes.map((stickers) => (
          <article>
            <GatsbyImage
              image={getImage(stickers.preview?.gatsbyImageData!)!}
              alt={stickers.name!}
            />
            <a href={`/product/${stickers.id}`}>
              <h3>{stickers.name}</h3>
              <h4>{stickers.price}</h4>
            </a>
          </article>
        ))}
      </div>
    </Layout>
  );
}

export const query = graphql`
  query Stickers {
    allContentfulStickerPack {
      nodes {
        id
        name
        price
        preview {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  }
`;

// Head 컴포넌트를 export하면 웹사이트 head 즉 title에 들어가게 된다
export const Head = () => <Seo title="Home" />;
