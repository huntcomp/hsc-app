<script lang="ts">
	import { page } from '$app/stores';
	import { clickOutside } from '$lib/clickOutside';
	import { supabase } from '$lib/supabaseClient';

	let dropdownVisible = false;

	const showDropdown = () => (dropdownVisible = true);
	const hideDropdown = () => (dropdownVisible = false);

	const logout = () => {
		supabase.auth.signOut();
	};

	const avatar = $page.data.session?.user?.user_metadata?.avatar_url;
</script>

<div class="relative">
	<img class="h-10 w-10 rounded-full" src={avatar} alt="Rounded avatar" on:click={showDropdown} />

  {#if dropdownVisible}
	<div
		class:hidden={!dropdownVisible}
		class="z-10 absolute right-0 top-12 bg-white divide-y divide-gray-100 rounded-md shadow w-36"
    use:clickOutside on:clickoutside={hideDropdown}
	>
		<ul class="py-2 text-sm text-gray-700">
			<li>
				<button on:click={logout} class="block w-full px-4 py-2 hover:bg-gray-100">Sign out</button>
			</li>
		</ul>
	</div>
  {/if}
</div>
