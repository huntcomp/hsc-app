<script>
	import Logo from '$lib/logo.svg';
	import UserMenu from './UserMenu.svelte';
</script>

<header class="flex items-center justify-between gap-2 py-4 pb-8">
	<Logo class="w-10" />
	<span class="flex-1 font-serif text-sm">Happy hunting!</span>
	<UserMenu />
</header>

<main class="flex-1">
	<slot />
</main>

<footer>
	<nav>NAV</nav>
</footer>

<style lang="postcss">
	:global(body) {
		background: var(--color-bg) url('/bg.webp');
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		background-blend-mode: overlay;
	}

	:global(.app) {
		flex: 1;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		@apply px-4;
	}
</style>
