<script>
	import MMRStars from '$lib/MMRStars.svelte';
	import ArrowRightUp from 'remixicon/icons/System/arrow-right-up-line.svg';
	import ArrowRightDown from 'remixicon/icons/System/arrow-right-down-line.svg';

	let mmr = 2852;
	let change = 30;
</script>

<section class="grid justify-center gap-4">
	<h1 class="grid-value text-7xl font-bold justify-self-end">{mmr}</h1>
	<div class="grid-change align-baseline">
		{#if change >= 0}
			<span class="align-middle text-gold">+{change}</span><ArrowRightUp
				class="fill-current w-5 inline text-gold"
			/>
		{:else if change < 0}
			<span class="align-middle text-red">{change}</span><ArrowRightDown
				class="fill-current w-5 inline text-red"
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
