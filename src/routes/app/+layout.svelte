<script lang="ts">
	import { page } from '$app/stores';
	import Logo from '$lib/logo.svg';
	import Auth from './Auth.svelte';
	import UserMenu from './UserMenu.svelte';
	import { supabase } from '$lib/supabaseClient';
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';
	import EditBox from 'remixicon/icons/Design/edit-box-line.svg';

	onMount(() => {
		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange(() => {
			invalidate('supabase:auth');
		});

		return () => {
			subscription.unsubscribe();
		};
	});
</script>

{#if !$page.data.session}
	<Auth />
{:else}
	<header class="flex items-center justify-between gap-2 py-4 pb-6">
		<Logo class="w-10" />
		<span class="flex-1 font-serif text-sm">Happy hunting!</span>
		<UserMenu />
	</header>

	<main class="flex-1">
		<slot />
	</main>

	<footer>
		<nav class="p-4 text-center">
			<EditBox class="mr-2 inline w-4 fill-current align-middle" /><span class="align-middle"
				>ALPHA PREVIEW</span
			>
		</nav>
	</footer>
{/if}

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
