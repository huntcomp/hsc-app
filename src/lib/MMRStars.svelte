<script lang="ts">
	import Star from 'remixicon/icons/System/star-fill.svg';

	export let value: number;

	$: bracket = 6 - [5000, 3000, 2750, 2600, 2300, 2000].findIndex((a) => value >= a);
</script>

<div class="flex gap-2">
	{#each Array(6) as _, index (index)}
		{#if index <= bracket}
			<Star class="w-6 fill-white" />
		{:else}
			<Star class="w-6 fill-white opacity-10" />
		{/if}
	{/each}
</div>
