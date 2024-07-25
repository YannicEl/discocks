export const load = async ({ locals: { db } }) => {
	const tables = await db.query.table.findMany();

	return {
		tables,
	};
};
