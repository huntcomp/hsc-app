<script lang="ts">
	import MMR from './MMR.svelte';
	import LastGames from './LastGames.svelte';
	import LastShowdowns from './LastShowdowns.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<MMR games={data.games} />
<LastGames games={data.games} />
<LastShowdowns showdowns={data.showdowns} />
