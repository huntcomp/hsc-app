<script lang="ts">
	export let title: string;
</script>

<section class="relative -ml-1 -mr-1 mb-5 rounded-md bg-red p-3">
	<header class="mb-3 font-serif font-bold uppercase tracking-wider">{title}</header>
	<slot />
</section>

<style lang="postcss">
	section {
		background: linear-gradient(350deg, rgba(238, 237, 237, 0.05) 0%, rgba(206, 152, 111, 0.2) 90%);
		position: relative;
		z-index: 0;
	}

	section:before {
		content: '';
		background: linear-gradient(230deg, rgba(25, 26, 32, 0.83) 18%, rgba(14, 15, 21, 0.51) 70%);
		position: absolute;
		top: 1px;
		left: 1px;
		right: 1px;
		bottom: 1px;
		z-index: -1;
		@apply rounded-md;
	}
</style>
