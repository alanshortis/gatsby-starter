import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Header from "./header";
import { siteMetadata } from "../../gatsby-config";
import favicon from "../favicon.ico";

const Layout = ({ children }) => (
  <>
    <Helmet
      title={siteMetadata.title}
      meta={[{ name: "description", content: siteMetadata.description }]}
      link={[{ rel: "shortcut icon", href: favicon }]}
    >
      <html lang="en" />
    </Helmet>
    <Header siteTitle={siteMetadata.title} />
    <div>{children}</div>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
