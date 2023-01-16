import * as db from "$lib/server/database";
import type { PageServerLoad } from "./$types";

export const load =  (({ params }) => {
    let allCountryInfo = db.getAllCountryInfo();

    return { allCountryInfo };
}) satisfies PageServerLoad;