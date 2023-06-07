import React from "react";
import { Link } from "gatsby";

interface ILayoutProp {
  children: any;
  title: string;
}

export default function Layout({ children, title }: ILayoutProp) {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
      <h1>{title}</h1>
      <main>{children}</main>
    </div>
  );
}
