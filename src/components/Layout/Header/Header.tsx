import React from "react";
import styles from "./Header.module.css";
import { IHeaderProps } from "./types";

const Header = (props: IHeaderProps) => {
  return (
    <header className={`${styles.mainHeader} ${props.cssClass}`}>
      {props.title}
    </header>
  );
};

export default Header;
