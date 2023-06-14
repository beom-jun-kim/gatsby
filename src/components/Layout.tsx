import React from "react";

interface ILayoutProp {
  children: any;
  title: string;
}

// children : 하위 컴포넌트로 전달
export default function Layout({ children, title }: ILayoutProp) {
  return (
    <div className="container">
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about-us">About Us</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
        </ul>
      </nav>
      <h1>{title}</h1>
      <main>{children}</main>
    </div>
  );
}
