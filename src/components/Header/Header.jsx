import React from "react";
import styles from "./Header.module.scss";
import { ReactComponent as LogoPromo } from "../../assets/logoPromo.svg";

const Header = () => {
  return (
    <div className={styles.root}>
      <LogoPromo className={styles.logo} />
      <h1> Todo List</h1>
    </div>
  );
};

export default Header;
