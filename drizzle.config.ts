import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
	dialect: 'sqlite',
	driver: 'd1-http',
	schema: './drizzle/schema.ts',
	out: './drizzle/migrations',
	verbose: true,
	strict: true,
	dbCredentials: {
		accountId: process.env.CLOUDFLARE_ACCOUNT_ID!,
		databaseId: process.env.CLOUDFALRE_D1_ID!,
		token: process.env.CLOUDFALRE_D1_TOKEN!,
	},
});
