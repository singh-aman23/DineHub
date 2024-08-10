import classes from '@/components/meals/meal-grid.module.css';
import MealItem from './meal-item';

export default function MealsGrid({meals}){
    return <ul className = {classes.meals}>
        {meals.map((meal) => {
            return <li key = {meal.id}>
                <MealItem {...meal}/>
            </li>
        })}
    </ul>

}