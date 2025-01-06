import sql from 'better-sqlite3';

const db = sql('meals.db');

export const getMeals = async () => {
	// throw new Error('failed meals fetching');

	return await db.prepare('SELECT * FROM meals').all();
};
