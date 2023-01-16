<script lang="ts">
	import type { CountryInfo } from "$lib/server/type";
	import { formatNumber } from "$lib/utility/utility";

    export let countryInfo: CountryInfo;

    const {name, flagImgSrc} = countryInfo;
    const info = {
        'Population': formatNumber(countryInfo.population),
        'Region': countryInfo.region,
        'Capital': countryInfo.capital
    }
</script>

<a href="/{name}" class="max-w-[16rem] md:max-w-[13.8rem] shadow rounded overflow-hidden dark:bg-gray-800">
    <img class="w-full aspect-video object-cover" src={flagImgSrc} alt="flag of {name}"/>
    <div class="p-4 grid gap-y-2 bg-gray-50">
        <h3 class="text-xl font-semibold">{name}</h3>
        <ul class="">
            {#each Object.entries(info) as [key, value]}
                <li><b class="font-semibold">{key}: </b>{value}</li>
            {/each}
        </ul>
    </div>
</a>