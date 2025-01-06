import MealsGrid from '@/components/meals/meals-grid';
import { getMeals } from '@/lib/meals';
import Link from 'next/link';
import { Suspense } from 'react';
import classes from './page.module.css';

interface dbMeals {
	id: number;
	title: string;
	slug: string;
	image: string;
	summary: string;
	instructions: string;
	creator: string;
	creator_email: string;
}

const Meals = async () => {
	const meals: dbMeals[] = await getMeals();
	return <MealsGrid meals={meals} />;
};

const MealsPage = async () => {
	return (
		<>
			<header className={classes.header}>
				<h1>
					Meals created{' '}
					<span className={classes.highlight}>By Devs who cook</span>
				</h1>
				<p>Taste our Devs' recipes and cook it yourself. They are easy</p>
				<p className={classes.cta}>
					<Link href="/meals/share">Share your recipe</Link>
				</p>
			</header>
			<main className={classes.main}>
				<Suspense
					fallback={<p className={classes.loading}>Loading Meals...</p>}
				>
					<Meals />
				</Suspense>
			</main>
		</>
	);
};

export default MealsPage;
