import * as React from "react";
import { PageProps } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

export default function IndexPage() {
  return (
    <Layout title="title : hello world!">
      <h1>환영해요!</h1>
    </Layout>
  );
};

// Head 컴포넌트를 export하면 웹사이트 head 즉 title에 들어가게 된다
export const Head = () => <Seo title="Home"/>
