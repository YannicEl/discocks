import { config } from 'dotenv';
import { defineConfig } from 'drizzle-kit';

let stage: 'local' | 'dev' | 'prod' = 'local';
if (process.argv.includes('--prod')) {
	stage = 'prod';
} else if (process.argv.includes('--dev')) {
	stage = 'dev';
}

const { parsed } = config({
	path: ['.env', `.env.${stage}`],
});

export default defineConfig({
	dialect: 'sqlite',
	driver: stage === 'local' ? undefined : 'd1-http',
	schema: './drizzle/schema.ts',
	out: './drizzle/migrations',
	verbose: true,
	strict: true,
	dbCredentials:
		stage === 'local'
			? {
					url: './.wrangler/state/v3/d1/miniflare-D1DatabaseObject/b492588df3ab7d44c9dac0c8dc2b01728a20df0a92da495c643b5c8f942df22c.sqlite',
				}
			: {
					accountId: parsed?.CLOUDFLARE_ACCOUNT_ID!,
					databaseId: parsed?.CLOUDFLARE_D1_ID!,
					token: parsed?.CLOUDFLARE_D1_TOKEN!,
				},
});
