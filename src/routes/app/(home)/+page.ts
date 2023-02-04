import { getSupabase } from '@supabase/auth-helpers-sveltekit';
import type { PageLoad } from './$types';

export const load: PageLoad = async (event) => {
	const { supabaseClient } = await getSupabase(event);

	const games = await supabaseClient
		.from('games')
		.select(
			`
  created_at,
  bounty_picked_up,
  bounty_extracted,
  mmr,
  team_extraction,
  showdowns (
    profileid,
    name,
    mmr,
    killed_by_me,
    killed_me,
    had_bounty
  )
`
		)
		.order('created_at', { ascending: false })
		.limit(4)
		.then((a) => a.data ?? []);

	const showdowns = await supabaseClient
		.from('showdowns')
		.select(
			`
    profileid,
    name,
    mmr,
    killed_by_me,
    killed_me,
    had_bounty
  `
		)
		.order('created_at', { ascending: false })
		.limit(3)
		.then((a) => a.data ?? []);

	return { games, showdowns };
};
