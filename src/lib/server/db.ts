import type { DrizzleD1Database } from 'drizzle-orm/d1';
import { drizzle } from 'drizzle-orm/d1';
import * as schema from '../../../drizzle/schema';

export type DB = DrizzleD1Database<typeof schema>;
export function getDb(D1: D1Database): DB {
	const db = drizzle(D1, { schema });
	return db;
}
