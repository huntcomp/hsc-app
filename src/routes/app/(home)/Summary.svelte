<script lang="ts">
	import MMRStars from '$lib/MMRStars.svelte';
	import ArrowRightUp from 'remixicon/icons/System/arrow-right-up-line.svg';
	import ArrowRightDown from 'remixicon/icons/System/arrow-right-down-line.svg';
	import Container from '../Container.svelte';
	import Skull from 'remixicon/icons/User/skull-line.svg';
	import Focus from 'remixicon/icons/Design/focus-3-line.svg';
	import Divide from 'remixicon/icons/System/divide-line.svg';

	export let games: any[] = [];

	$: mmr = games?.[0]?.mmr ?? 0;
	$: change = games?.[0]?.mmr - games?.[games?.length - 1]?.mmr;
	$: [kills, deaths] = games?.reduce(
		([pk, pd], game) => {
			let pkr = pk;
			let pdr = pd;
			for (const s of game.showdowns) {
				pkr += s.killed_by_me;
				pdr += s.killed_me;
			}
			return [pkr, pdr];
		},
		[0, 0]
	);
</script>

<Container title="Summary">
	<section>
		<div class="mb-1">
			<span class="align-bottom font-serif text-6xl font-bold">{mmr}</span>
			<span class="align-bottom font-serif text-2xl">
				{#if change >= 0}
					<span class="align-middle text-gold font-bold">+{change}</span><ArrowRightUp
						class="inline w-5 fill-gold align-text-top"
					/>
				{:else if change < 0}
					<span class="align-middle text-red font-bold">{change}</span><ArrowRightDown
						class="inline w-5 fill-red align-text-top"
					/>
				{/if}
			</span>
		</div>
		<MMRStars value={mmr} />
	</section>
	<section
		class="bg-linear-dark absolute bottom-0 right-0 top-0 w-2/6 p-3 rounded-md flex flex-col justify-between"
	>
		<div class="flex items-center gap-2">
			<span class="bg-linear-gold rounded-full w-7 h-7 flex justify-center items-center"><Focus class="inline w-5 fill-dark" /></span><span
				class="font-serif text-2xl font-bold text-gold">{kills}</span
			>
		</div>
		<div class="flex items-center gap-2">
			<span class="bg-linear-red rounded-full w-7 h-7 flex justify-center items-center"><Skull class="inline w-5 fill-dark" /></span><span
				class="font-serif text-2xl font-bold text-red">{deaths}</span
			>
		</div>
		<div class="flex items-center gap-2">
			<span class="w-7 h-7 flex justify-center items-center"><Divide class="inline w-7 fill-white" /></span><span class="font-serif text-3xl font-bold text-white"
				>{deaths > 0 ? Math.round((kills / deaths) * 100) / 100 : '∞'}</span
			>
		</div>
	</section>
</Container>

<style>
	.bg-linear-dark {
		background: linear-gradient(
			233.85deg,
			rgba(25, 26, 32, 0.83) 29.88%,
			rgba(14, 15, 21, 0.51) 83.99%
		);
	}

	.bg-linear-gold {
		background: linear-gradient(316.12deg, #dfc789 21.85%, rgba(223, 199, 137, 0) 128.15%);
	}

	.bg-linear-red {
		background: linear-gradient(316.12deg, #a70019 21.85%, rgba(167, 0, 25, 0) 128.15%);
	}
</style>
