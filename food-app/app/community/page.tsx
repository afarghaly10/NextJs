'use client';

import Image from 'next/image';

import communityIcon from '@/assets/icons/community.png';
import eventsIcon from '@/assets/icons/events.png';
import mealIcon from '@/assets/icons/meal.png';
import classes from './page.module.css';

const Community = () => {
	return (
		<>
			<header className={classes.header}>
				<h1>
					One Shared Passion: <span className={classes.highlight}>Food</span>
				</h1>
				<p>Join Our community today and share your favorite recipes!</p>
			</header>
			<main className={classes.main}>
				<h2>Community Perks</h2>
				<ul className={classes.perks}>
					<li>
						<Image src={mealIcon} alt="meal" />
						<p>Share & discover recipes</p>
					</li>
					<li>
						<Image src={communityIcon} alt="people cooking" />
						<p>Find new friends & like-minded people</p>
					</li>
					<li>
						<Image src={eventsIcon} alt="cooking event" />
						<p>Share & discover recipes</p>
					</li>
				</ul>
			</main>
		</>
	);
};
export default Community;
