import MainHeader from '@/components/headers/main-header';
import './globals.css';

export const metadata = {
	title: 'NextJs Food',
	description: 'Practice Project; meals shared by a food-loving community',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang="en">
			<body>
				<MainHeader />
				{children}
			</body>
		</html>
	);
};
export default RootLayout;
