import * as React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { StaticImage } from "gatsby-plugin-image";

export default function IndexPage() {
  return (
    <Layout title="title : hello world!">

      {/* .webp 형식으로 전환 */}
      {/* 서버를 kill하고 재시작 */}
      <StaticImage
        height={500}
        src="https://cdn.pixabay.com/photo/2022/06/30/13/32/family-7293705_1280.png"
        alt="대문이미지"
      />
    </Layout>
  );
}

// Head 컴포넌트를 export하면 웹사이트 head 즉 title에 들어가게 된다
export const Head = () => <Seo title="Home" />;
