import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import styles from "./Header.module.css";
import { IHeaderProps } from "./types";

const Header = (props: IHeaderProps) => {
  return (
    <header className={`${styles.mainHeader} ${props.cssClass}`}>
      <Link to="/">
        <HomeIcon /> Home
      </Link>
      <div>{props.title}</div>
    </header>
  );
};

export default Header;
