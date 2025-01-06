'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import burgerImg from '@/assets/burger.jpg';
import curryImg from '@/assets/curry.jpg';
import dumplingsImg from '@/assets/dumplings.jpg';
import macncheeseImg from '@/assets/macncheese.jpg';
import pizzaImg from '@/assets/pizza.jpg';
import schnitzelImg from '@/assets/schnitzel.jpg';
import tomatoSaladImg from '@/assets/tomato-salad.jpg';
import classes from './image-slideshow.module.css';

interface Images {
	image: string | any;
	alt: string;
}
const images: Images[] = [
	{ image: burgerImg, alt: 'Juicy Burger' },
	{ image: curryImg, alt: 'Spicy Curry' },
	{ image: dumplingsImg, alt: 'Steamed Dumplings' },
	{ image: macncheeseImg, alt: 'Mac n Cheese' },
	{ image: pizzaImg, alt: 'Just a Pizza' },
	{ image: schnitzelImg, alt: 'schnitzel' },
	{ image: tomatoSaladImg, alt: 'Salad' },
];

const ImageSlideshow = () => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImageIndex((prevIndex) =>
				prevIndex < images.length - 1 ? prevIndex + 1 : 0
			);
		}, 5000);

		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<div className={classes.slideshow}>
			{images.map((image, index) => (
				<Image
					key={index}
					src={image.image}
					className={index == currentImageIndex ? classes.active : ''}
					alt={image.alt}
				/>
			))}
		</div>
	);
};

export default ImageSlideshow;
