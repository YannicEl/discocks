import { sql } from 'drizzle-orm';
import { integer, sqliteTable } from 'drizzle-orm/sqlite-core';

const timestamps = {
	createdAt: integer('created_at', { mode: 'timestamp_ms' })
		.default(sql`CURRENT_TIMESTAMP`)
		.notNull(),
	updatedAt: integer('updated_at', { mode: 'timestamp_ms' })
		.default(sql`CURRENT_TIMESTAMP`)
		.$onUpdate(() => new Date())
		.notNull(),
};

export const table = sqliteTable('table', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	...timestamps,
});
