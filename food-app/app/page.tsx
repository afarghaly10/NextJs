import ImageSlideshow from '@/components/images/image-slideShow';
import Link from 'next/link';
import classes from './page.module.css';
// import Slideshow

const Home = () => {
	return (
		<>
			<header className={classes.header}>
				<div className={classes.slideshow}>
					<ImageSlideshow />
				</div>
				<div>
					<div className={classes.hero}>
						<h1>NextJs Food for NextJs Devs</h1>
						<p>Taste & share food from all over the world</p>
					</div>
					<div className={classes.cta}>
						<Link href="/community">Join the Community</Link>
						<Link href="/meals">Explore Meals</Link>
					</div>
				</div>
			</header>
			<main>
				<section className={classes.section}>
					<h2>How it works</h2>
					<p>
						NextJs food is a platform for foodie devs to share their favorite
						recipes with the world. It&apos;s a place to discover new dishes,
						and to connect with other foodie devs.
					</p>
					<p>
						NextJs food is a places to discover new dishes, and to connect with
						other foodie devs.
					</p>
				</section>
				<section className={classes.section}>
					<h2>Why NextJs Food?</h2>
					<p>
						NextJs food is a platform for foodie devs to share their favorite
						recipes with the world. It&apos;s a place to discover new dishes,
						and to connect with other foodie devs.
					</p>
					<p>
						NextJs food is a places to discover new dishes, and to connect with
						other foodie devs.
					</p>
				</section>
			</main>
		</>
	);
};

export default Home;
