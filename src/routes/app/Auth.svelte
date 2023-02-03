<script lang="ts">
	import { supabase } from '$lib/supabaseClient';
	import { redirect } from '@sveltejs/kit';
	import Discord from 'remixicon/icons/Logos/discord-fill.svg';
	import Logo from '$lib/logo.svg';

	let loading = false;

	const handleLogin = async () => {
		try {
			loading = true;
			const { data, error } = await supabase.auth.signInWithOAuth({
				provider: 'discord',
				options: { redirectTo: globalThis.location.toString() }
			});
			if (error) throw error;
			throw redirect(303, data.url);
		} catch (error) {
			if (error instanceof Error) {
				alert(error.message);
			}
		} finally {
			loading = false;
		}
	};
</script>

<main class="flex flex-grow flex-col items-center justify-center">
	<Logo class="mb-8 w-20" />
	<button
		on:click={handleLogin}
		class="flex justify-center rounded border-b-4 border-blue-700 bg-blue-500 py-2 px-4 font-bold text-white hover:border-blue-500 hover:bg-blue-400"
	>
		<Discord class="mr-2 w-6 fill-current align-middle" />
		<span class="align-middle">Login with Discord</span>
	</button>
</main>
