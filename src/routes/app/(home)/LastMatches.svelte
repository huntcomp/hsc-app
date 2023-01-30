<script lang="ts">
	import Container from '../Container.svelte';
	import ArrowRightUp from 'remixicon/icons/System/arrow-right-up-line.svg';
	import ArrowRightDown from 'remixicon/icons/System/arrow-right-down-line.svg';
	import Trophy from 'remixicon/icons/Finance/trophy-line.svg';
	import Skull from 'remixicon/icons/User/skull-line.svg';
	import DoorOpen from 'remixicon/icons/Others/door-open-line.svg';
	import Focus from 'remixicon/icons/Design/focus-3-line.svg';
	import { formatDistanceToNow } from 'date-fns';

	const matches = [
		{
			date: '2023-01-30T21:19:00.000Z',
			result: 'bounty:1',
			kills: ['A', 'B', 'C'],
			deaths: ['D', 'E'],
			mmr: 2852
		},
		{
			date: '2023-01-30T20:58:00.000Z',
			result: 'exit',
			kills: ['A'],
			deaths: ['D'],
			mmr: 2832
		},
		{
			date: '2023-01-30T19:25:00.000Z',
			result: 'death',
			kills: ['C'],
			deaths: ['D', 'E'],
			mmr: 2842
		},
		{
			date: '2023-01-30T19:03:00.000Z',
			result: 'bounty:2',
			kills: ['C'],
			deaths: [],
			mmr: 2826
		}
	];

	$: max3Matches = matches.slice(0, 3);
</script>

<Container title="Last matches">
	<table>
		<thead>
			<tr class="text-xs text-gray-500">
				<th>Summary</th>
				<th
					><Focus class="w-3 inline fill-current" /><span class="align-middle mx-1">/</span><Skull
						class="w-3 inline fill-current"
					/></th
				>
				<th>MMR</th>
			</tr>
		</thead>
		<tbody>
			{#each max3Matches as match, i}
				<tr
					><td class="align-middle"
						>{#if match.result.startsWith('bounty')}
							<Trophy class="w-5 inline fill-gold" />
						{:else if match.result === 'exit'}
							<DoorOpen class="w-5 inline fill-gray-500" />
						{:else if match.result === 'death'}
							<Skull class="w-5 inline fill-red" />
						{/if}
						<span class="ml-1 align-middle"
							>{formatDistanceToNow(new Date(match.date), { addSuffix: true })}</span
						></td
					><td
						><span
							class="align-middle"
							class:text-gold={match.kills.length > match.deaths.length}
							class:text-red={match.deaths.length > match.kills.length}
							>{match.kills.length} : {match.deaths.length}</span
						></td
					><td
						>{#if matches[i + 1] != null && match.mmr - matches[i + 1].mmr !== 0}<span
								class="align-middle"
								class:text-gold={match.mmr - matches[i + 1].mmr > 0}
								class:text-red={match.mmr - matches[i + 1].mmr < 0}
								>{#if match.mmr - matches[i + 1].mmr > 0}+{/if}{match.mmr -
									matches[i + 1].mmr}</span
							>{#if match.mmr - matches[i + 1].mmr > 0}<ArrowRightUp
									class="w-4 inline align-text-top fill-gold"
								/>{/if}{#if match.mmr - matches[i + 1].mmr < 0}<ArrowRightDown
									class="w-4 inline align-text-top fill-red"
								/>{/if}{/if}<span class="align-middle">{match.mmr}</span></td
					></tr
				>
			{/each}
		</tbody>
	</table>
</Container>
