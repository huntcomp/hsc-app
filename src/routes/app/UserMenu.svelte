<script lang="ts">
	import { page } from '$app/stores';
	import { supabase } from '$lib/supabaseClient';

	const logout = () => {
		supabase.auth.signOut();
	};

	const avatar = $page.data.session?.user?.user_metadata?.avatar_url;
</script>

<img class="h-10 w-10 rounded-full" src={avatar} alt="Rounded avatar" on:click={logout} />
