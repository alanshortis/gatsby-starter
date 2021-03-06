import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

const Header = ({ siteTitle }) => (
  <h1>
    <Link to="/">{siteTitle}</Link>
  </h1>
);

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
};

export default Header;
