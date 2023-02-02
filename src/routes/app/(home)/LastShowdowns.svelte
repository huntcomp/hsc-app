<script lang="ts">
	import Container from '../Container.svelte';
	import Skull from 'remixicon/icons/User/skull-line.svg';
	import Focus from 'remixicon/icons/Design/focus-3-line.svg';
	import ArrowUpDown from 'remixicon/icons/System/arrow-up-down-line.svg';

	const showdowns = [
		{
			name: 'Rachta',
			match: {
				kills: 1,
				deaths: 1
			},
			total: {
				kills: 3,
				deaths: 6
			}
		},
		{
			name: '0x4731',
			match: {
				kills: 0,
				deaths: 2
			},
			total: {
				kills: 7,
				deaths: 3
			}
		},
		{
			name: 'Chlebek',
			match: {
				kills: 2,
				deaths: 0
			},
			total: {
				kills: 107,
				deaths: 200
			}
		}
	];
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
						>{#if showdown.match.kills > showdown.match.deaths}
							<Focus class="inline w-5 fill-gold" />
						{:else if showdown.match.kills < showdown.match.deaths}
							<Skull class="inline w-5 fill-red" />
						{:else}
							<ArrowUpDown class="inline w-5 fill-gray-500" />
						{/if}
						<span class="ml-1 align-middle">{showdown.name}</span></td
					><td
						><span
							class="align-middle"
							class:text-gold={showdown.match.kills > showdown.match.deaths}
							class:text-red={showdown.match.kills < showdown.match.deaths}
							>{showdown.match.kills} : {showdown.match.deaths}</span
						></td
					><td
						><span
						class="align-middle"
						class:text-gold={showdown.total.kills > showdown.total.deaths}
						class:text-red={showdown.total.kills < showdown.total.deaths}
						>{showdown.total.kills} : {showdown.total.deaths}</span
					></td
					></tr
				>
			{/each}
		</tbody>
	</table>
</Container>
