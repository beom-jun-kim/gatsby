import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

export default function AboutUs() {
  return (
    <Layout title="title : About Us">
        <h1>about us!</h1>
    </Layout>
  )
}

export const Head = () => <Seo title="About Us" />;