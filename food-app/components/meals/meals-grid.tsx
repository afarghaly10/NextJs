import MealItem from './meal-item';
import classes from './meals-grid.module.css';

interface Meals {
	meals: string[] | number[] | any;
}

interface MealItems {
	id: string | number;
	title: string;
	slug: string;
	image: string;
	summary: string;
	creator: string;
}
const MealsGrid = ({ meals }: Meals) => {
	return (
		<ul className={classes.meals}>
			{meals.map((meal: MealItems) => (
				<li key={meal.id}>
					<MealItem {...meal} />
				</li>
			))}
		</ul>
	);
};

export default MealsGrid;
