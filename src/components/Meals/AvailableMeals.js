import React from "react";
import DUMMY_MEALS from "../../data/dummy-meals";
import styles from "./AvailableMeals.module.scss";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

function AvailableMeals() {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem meal={meal} key={meal.id}></MealItem>
  ));
  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
}

export default AvailableMeals;
