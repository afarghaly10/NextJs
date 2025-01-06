import sql from 'better-sqlite3';

const db = sql('meals.db');

export const getMeals = async () => {
	// throw new Error('failed meals fetching');

	return await db.prepare('SELECT * FROM meals').all();
};

export const getMeal = (slug: string) => {
	return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
};
