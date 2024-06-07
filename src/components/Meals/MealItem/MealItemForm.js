import React, { useRef, useState } from "react";
import styles from "./MealItemForm.module.scss";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  const amountInputRef = useRef();
  const [formValid, setFormValid] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setFormValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        label='Amount'
        ref={amountInputRef}
        input={{
          id: "amount" + props.id,
          type: "number",
          min: 1,
          max: 6,
          step: 1,
          defaultValue: 1,
        }}
      />
      <button>+ Add</button>
      {!formValid && <p>Please enter a valid amount</p>}
    </form>
  );
};

export default MealItemForm;
