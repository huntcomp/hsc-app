<script lang="ts">
	import Container from '../Container.svelte';
	import Skull from 'remixicon/icons/User/skull-line.svg';
	import Focus from 'remixicon/icons/Design/focus-3-line.svg';
	import ArrowUpDown from 'remixicon/icons/System/arrow-up-down-line.svg';
	import { onMount } from 'svelte';
	import { supabase } from '$lib/supabaseClient';

	let showdowns: any[] = [];

	onMount(async () => {
		showdowns = await supabase
			.from('showdowns')
			.select(
				`
			profileid,
			name,
			mmr,
			killed_by_me,
			killed_me,
			had_bounty
		`
			)
			.order('created_at', { ascending: false })
			.limit(3)
			.then((a) => a.data ?? []);
	});
</script>

<Container title="Last Showdowns">
	<table>
		<thead>
			<tr class="text-xs text-gray-500">
				<th>Summary</th>
				<th
					><span class="mr-1 align-middle">Match</span><Focus
						class="inline w-3 fill-current"
					/><span class="mx-1 align-middle">/</span><Skull class="inline w-3 fill-current" /></th
				>
				<th
					><span class="mr-1 align-middle">Total</span><Focus
						class="inline w-3 fill-current"
					/><span class="mx-1 align-middle">/</span><Skull class="inline w-3 fill-current" /></th
				>
			</tr>
		</thead>
		<tbody>
			{#each showdowns as showdown, i}
				<tr
					><td class="align-middle"
						>{#if showdown.killed_by_me > showdown.killed_me}
							<Focus class="inline w-5 fill-gold" />
						{:else if showdown.killed_by_me < showdown.killed_me}
							<Skull class="inline w-5 fill-red" />
						{:else}
							<ArrowUpDown class="inline w-5 fill-gray-500" />
						{/if}
						<span class="ml-1 align-middle">{showdown.name} ({showdown.mmr})</span></td
					>
					<td
						><span
							class="align-middle"
							class:text-gold={showdown.killed_by_me > showdown.killed_me}
							class:text-red={showdown.killed_by_me < showdown.killed_me}
							>{showdown.killed_by_me} : {showdown.killed_me}</span
						></td
					><td>N/A</td></tr
				>
			{/each}
		</tbody>
	</table>
</Container>

<!-- 
	<span
							class="align-middle"
							class:text-gold={showdown.total.killed_by_me > showdown.total.killed_me}
							class:text-red={showdown.total.killed_by_me < showdown.total.killed_me}
							>{showdown.total.killed_by_me} : {showdown.total.killed_me}</span
						>
 -->
