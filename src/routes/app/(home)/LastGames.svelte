<script lang="ts">
	import Container from '../Container.svelte';
	import ArrowRightUp from 'remixicon/icons/System/arrow-right-up-line.svg';
	import ArrowRightDown from 'remixicon/icons/System/arrow-right-down-line.svg';
	import Trophy from 'remixicon/icons/Finance/trophy-line.svg';
	import Skull from 'remixicon/icons/User/skull-line.svg';
	import ArrowUpDown from 'remixicon/icons/System/arrow-up-down-line.svg';
	import Focus from 'remixicon/icons/Design/focus-3-line.svg';
	import Subtract from 'remixicon/icons/System/subtract-line.svg';
	import { formatDistanceToNow } from 'date-fns';

	export let games: any[] = [];

	const getKilledByMe = (match: any) =>
		match.showdowns.reduce((p: number, n: any) => p + n.killed_by_me, 0);
	const getKilledMe = (match: any) =>
		match.showdowns.reduce((p: number, n: any) => p + n.killed_me, 0);

	$: max3Games = games.slice(0, 3);
</script>

<Container title="Last games">
	<table>
		<thead>
			<tr class="text-xs text-gray-500">
				<th>Summary</th>
				<th
					><Focus class="inline w-3 fill-current" /><span class="mx-1 align-middle">/</span><Skull
						class="inline w-3 fill-current"
					/></th
				>
				<th>MMR</th>
			</tr>
		</thead>
		<tbody>
			{#if max3Games.length === 0}
				<tr>
					<td>No games yet</td>
					<td />
					<td />
				</tr>
			{/if}
			{#each max3Games as game, i}
				<tr
					><td class="align-middle"
						>{#if game.bounty_extracted > 0}
							<Trophy class="inline w-5 fill-gold" />
						{:else if game.bounty_extracted === 0 && game.team_extraction}
							<ArrowUpDown class="inline w-5 fill-gray-500" />
						{:else if !game.team_extraction}
							<Skull class="inline w-5 fill-red" />
						{/if}
						<span class="ml-1 align-middle"
							>{formatDistanceToNow(new Date(game.created_at), { addSuffix: true })}</span
						></td
					><td
						><span
							class="align-middle"
							class:text-gold={getKilledByMe(game) > getKilledMe(game)}
							class:text-red={getKilledByMe(game) < getKilledMe(game)}
							>{getKilledByMe(game)} : {getKilledMe(game)}</span
						></td
					><td
						>{#if i === 0}<Subtract
								class="inline w-5 fill-gray-500"
							/>{:else}{#if games[i - 1] != null && games[i] != null && games[i - 1].mmr - games[i].mmr !== 0}<span
									class="align-middle"
									class:text-gold={games[i - 1].mmr - games[i].mmr > 0}
									class:text-red={games[i - 1].mmr - games[i].mmr < 0}
									>{#if games[i - 1].mmr - games[i].mmr > 0}+{/if}{games[i - 1].mmr -
										games[i].mmr}</span
								>{#if games[i - 1].mmr - games[i].mmr > 0}<ArrowRightUp
										class="inline w-4 fill-gold align-text-top"
									/>{/if}{#if games[i - 1].mmr - games[i].mmr < 0}<ArrowRightDown
										class="inline w-4 fill-red align-text-top"
									/>{/if}{/if}<span class="align-middle">{games[i - 1].mmr}</span>{/if}</td
					></tr
				>
			{/each}
		</tbody>
	</table>
</Container>
