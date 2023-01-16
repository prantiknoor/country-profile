import * as db from "$lib/server/database";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load = (({ params }) => {
    let countryInfo = db.searchCountry(params.country);

    if (!countryInfo) throw error(404, 'No country found');

    return { countryInfo };
}) satisfies PageServerLoad;