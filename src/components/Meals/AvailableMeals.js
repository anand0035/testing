import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Chicken Biriyani',
    description: 'Finest Hyderabadi Dum Biriyani',
    price: 300,
  },
  {
    id: 'm2',
    name: 'Kadai Paneer',
    description: 'Chef specialty!',
    price: 180,
  },
  {
    id: 'm3',
    name: 'Chicken Curry',
    description: 'Boneless Chicken curry with gravy.',
    price:170,
  },
  {
    id: 'm4',
    name: 'Green Salad',
    description: 'Healthy...and green...',
    price: 80,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;