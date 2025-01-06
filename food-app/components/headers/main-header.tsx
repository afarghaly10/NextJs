import logoImg from '@/assets/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import MainHeaderBg from './main-header-bg';
import classes from './main-header.module.css';
import NavLink from './nav-link';

const MainHeader = () => {
	return (
		<>
			<MainHeaderBg />
			<header className={classes.header}>
				<Link className={classes.logo} href="/">
					<Image src={logoImg} alt="Food Dish" priority />
					NextJs Food
				</Link>
				<nav className={classes.nav}>
					<ul>
						<li>
							<NavLink href="/meals">Browse Meals</NavLink>
						</li>
						<li>
							<NavLink href="/community">Community</NavLink>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
};

export default MainHeader;
