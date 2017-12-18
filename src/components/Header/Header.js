import React from "react";
import "./Header.css";

const Header = props => <h1 className="center-align hoverable">{props.children}</h1>;

export default Header;