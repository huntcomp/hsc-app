<script lang="ts">
	import Summary from './Summary.svelte';
	import LastGames from './LastGames.svelte';
	import LastShowdowns from './LastShowdowns.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Summary games={data.games} />
<LastGames games={data.games} />
<LastShowdowns showdowns={data.showdowns} />
