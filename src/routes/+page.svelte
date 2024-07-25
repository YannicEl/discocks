<script lang="ts">
	import type { PageData } from './$types';

	type Props = { data: PageData };
	let { data }: Props = $props();
</script>

<table>
	<thead>
		<tr>
			<th>Id</th>
			<th>CreatedAt</th>
			<th>UpdatedAt</th>
		</tr>
	</thead>

	<tbody>
		{#each data.tables as table}
			<tr>
				<td>{table.id}</td>
				<td>{table.createdAt}</td>
				<td>{table.updatedAt}</td>
			</tr>
		{/each}
	</tbody>
</table>
