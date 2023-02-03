import type { PageServerLoad } from './$types';
import { getServerSession } from '@supabase/auth-helpers-sveltekit';
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async (event) => {
	const session = await getServerSession(event);
	if (session != null) {
		throw redirect(302, '/app');
	}
};
