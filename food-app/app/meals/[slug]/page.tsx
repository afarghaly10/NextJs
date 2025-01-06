import { getMeal } from '@/lib/meals';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import classes from './page.module.css';

const MealRecipe = ({ params }) => {
	const meal = getMeal(params.slug);

	meal.instructions = meal.instructions.replace(/\n/g, '<br />');

	if (!meal) notFound();

	return (
		<>
			<head className={classes.header}>
				<div className={classes.image}>
					<Image src={meal.image} alt={meal.title} fill />
				</div>
				<div className={classes.headerText}>
					<h1>{meal.title}</h1>
					<p className={classes.creator}>
						by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
					</p>
					<p className={classes.summary}>{meal.summary}</p>
				</div>
			</head>
			<main>
				<p
					className={classes.instructions}
					dangerouslySetInnerHTML={{
						__html: meal.instructions,
					}}
				></p>
			</main>
		</>
	);
};
export default MealRecipe;
