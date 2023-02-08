import { getSupabase } from '@supabase/auth-helpers-sveltekit';
import { subHours } from 'date-fns';
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
		.limit(8)
		.then((_) => _.data ?? []);

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
		.limit(6)
		.then((_) =>
			(_.data ?? []).map((a) => Object.assign({ total_killed_by_me: 0, total_killed_me: 0 }, a))
		);

	if (showdowns.length > 0) {
		const totals = await supabaseClient
			.from('showdowns')
			.select('killed_by_me, killed_me, profileid')
			.filter('profileid', 'in', `(${showdowns.map((_) => `"${_.profileid}"`).join(',')})`)
			.then((_) => _.data);

		if (totals != null) {
			for (let s of showdowns) {
				const t = totals.filter((a) => a.profileid === s.profileid);
				for (let ti of t) {
					s.total_killed_by_me += ti.killed_by_me;
					s.total_killed_me += ti.killed_me;
				}
			}
		}
	}

	return { games, showdowns };
};
