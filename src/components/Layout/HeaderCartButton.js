import { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import styles from "./HeaderCartButton.module.scss";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const items = cartCtx.items;
  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const [btnIsHighLighted, setBtnIsHighLighted] = useState(false);

  useEffect(() => {
    if (items.length === 0) return;
    setBtnIsHighLighted(true);
    const timerId = setTimeout(() => {
      setBtnIsHighLighted(false);
    }, 300);

    return () => {
      clearTimeout(timerId);
    };
  }, [items]);

  const btnClasses = `${styles.button} ${btnIsHighLighted ? styles.bump : ""}`;
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
