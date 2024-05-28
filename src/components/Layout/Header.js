import React from "react";
import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../../assets/meals.jpg";
import styles from "./Header.module.scss";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>Healthy Food Ordering</h1>
        <HeaderCartButton />
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImage} alt='Healthy food' />
      </div>
    </React.Fragment>
  );
};

export default Header;
