<script lang="ts">
	import MMRStars from '$lib/MMRStars.svelte';
	import ArrowRightUp from 'remixicon/icons/System/arrow-right-up-line.svg';
	import ArrowRightDown from 'remixicon/icons/System/arrow-right-down-line.svg';
	import { supabase } from '$lib/supabaseClient';
	import { onMount } from 'svelte';

	let games: any[] = [];

	onMount(async () => {
		games = await supabase
			.from('games')
			.select(
				`
			mmr
		`
			)
			.order('created_at', { ascending: false })
			.limit(2)
			.then((a) => a.data ?? []);
	});

	$: mmr = games[0]?.mmr ?? 0;
	$: change = (games[0]?.mmr ?? 0) - (games[1]?.mmr ?? 0);
</script>

<section class="mb-8 grid justify-center gap-3 gap-y-1">
	<h1 class="grid-value justify-self-end text-7xl font-bold">{mmr}</h1>
	<div class="grid-change align-baseline">
		{#if change >= 0}
			<span class="align-middle text-gold">+{change}</span><ArrowRightUp
				class="inline w-4 fill-gold align-text-top"
			/>
		{:else if change < 0}
			<span class="align-middle text-red">{change}</span><ArrowRightDown
				class="inline w-4 fill-red align-text-top"
			/>
		{/if}
	</div>
	<header class="grid-title text-sm">Last MMR</header>
	<div class="grid-stars justify-self-end">
		<MMRStars value={mmr} />
	</div>
</section>

<style>
	.grid {
		grid-template-areas: 'value change' 'value title' 'stars .';
	}

	.grid-value {
		grid-area: value;
	}

	.grid-change {
		grid-area: change;
	}

	.grid-title {
		grid-area: title;
	}

	.grid-stars {
		grid-area: stars;
	}
</style>
