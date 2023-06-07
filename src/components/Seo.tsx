import { graphql, useStaticQuery } from "gatsby";
import React from "react";

interface ISeoProp {
  title: string;
}

export default function Seo({ title }: ISeoProp) {

  // 밑에 선언한 query명(MyQuery)으로 타입이 자동완성(MyQueryQuery)
  const data = useStaticQuery<Queries.MyQueryQuery>(graphql`
    query MyQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <title>
      {title} | {data.site?.siteMetadata?.title}
    </title>
  );
}
