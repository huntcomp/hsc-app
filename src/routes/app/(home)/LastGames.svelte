<script lang="ts">
	import Container from '../Container.svelte';
	import ArrowRightUp from 'remixicon/icons/System/arrow-right-up-line.svg';
	import ArrowRightDown from 'remixicon/icons/System/arrow-right-down-line.svg';
	import Trophy from 'remixicon/icons/Finance/trophy-line.svg';
	import Skull from 'remixicon/icons/User/skull-line.svg';
	import ArrowUpDown from 'remixicon/icons/System/arrow-up-down-line.svg';
	import Focus from 'remixicon/icons/Design/focus-3-line.svg';
	import { formatDistanceToNow } from 'date-fns';
	import { supabase } from '$lib/supabaseClient';
	import { onMount } from 'svelte';

	let games: any[] = [];

	onMount(async () => {
		games = await supabase
			.from('games')
			.select(
				`
			created_at,
			bounty_picked_up,
			bounty_extracted,
			mmr,
			team_extraction,
			showdowns (
				profileid,
				name,
				mmr,
				killed_by_me,
				killed_me,
				had_bounty
			)
		`
			)
			.order('created_at', { ascending: false })
			.limit(4)
			.then((a) => a.data ?? []);
	});

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
						>{#if games[i + 1] != null && game.mmr - games[i + 1].mmr !== 0}<span
								class="align-middle"
								class:text-gold={game.mmr - games[i + 1].mmr > 0}
								class:text-red={game.mmr - games[i + 1].mmr < 0}
								>{#if game.mmr - games[i + 1].mmr > 0}+{/if}{game.mmr - games[i + 1].mmr}</span
							>{#if game.mmr - games[i + 1].mmr > 0}<ArrowRightUp
									class="inline w-4 fill-gold align-text-top"
								/>{/if}{#if game.mmr - games[i + 1].mmr < 0}<ArrowRightDown
									class="inline w-4 fill-red align-text-top"
								/>{/if}{/if}<span class="align-middle">{game.mmr}</span></td
					></tr
				>
			{/each}
		</tbody>
	</table>
</Container>
