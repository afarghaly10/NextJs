'use client';

import Header from '@/components/header';
import Link from 'next/link';

const Home = () => {
	return (
		<main>
			<Header />
			<p>🔥 Let&apos;s get started! 🔥</p>
			<p>
				<Link href="/about">About Us</Link>
			</p>
		</main>
	);
};

export default Home;

// creating dynamic route
