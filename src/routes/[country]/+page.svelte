<script lang="ts">
	import { goto } from '$app/navigation';
	import { formatNumber } from '$lib/utility/utility';
	import { Badge, Button } from 'flowbite-svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	let countryInfo = data.countryInfo;
	const { name, flagImgSrc, borderCountries } = countryInfo;

	const moreInfo = {
		'Native Name': countryInfo.nativeName,
		'Population': formatNumber(countryInfo.population),
		'Region': countryInfo.region,
		'Sub Region': countryInfo.subRegion,
		'Capital': countryInfo.capital
	};

	const moreInfo2 = {
		'Top Lavel Domain': countryInfo.domain,
		'Currencies': countryInfo.currencies.join(', '),
		'Languages': countryInfo.languages.join(', ')
	};
</script>

<svelte:head>
	<title>{name}</title>
</svelte:head>

<Button on:click={() => goto('/')} color="alternative">
	<svg
		class="w-5 mr-2 -ml-2"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
		/>
	</svg>
	Back
</Button>
<div class="flex flex-col gap-4 mt-4 sm:flex-row lg:gap-16">
    <img class="object-cover grow-[3]" src={flagImgSrc} alt="Flag of {name}">
    <div class="grid gap-y-4 items-center grow-[2] sm:grow-[1] lg:grow-[2] lg:gap-y-6 lg:pr-8">
        <h1 class="text-2xl font-semibold lg:self-end">{name}</h1>
        <div class="flex flex-col gap-4 lg:flex-row lg:justify-between">
            <ul class="grid gap-y-1 lg:gap-y-2">
                {#each Object.entries(moreInfo) as [key, value]}
                    <li><b class="font-semibold">{key}: </b>{value}</li>
                {/each}
            </ul>
            <ul class="flex flex-col gap-y-1 lg:gap-y-2">
                {#each Object.entries(moreInfo2) as [key, value]}
                    <li><b class="font-semibold">{key}: </b>{value}</li>
                {/each}
            </ul>
        </div>
        <div class="flex flex-col gap-2 lg:flex-row lg:self-start">
            <span class="font-semibold text-md">Border countries: </span>
            <ul class="flex flex-wrap gap-2">
               {#each borderCountries as country}
                    <li><Badge large>{country}</Badge></li>
               {/each} 
            </ul>
        </div>
    </div>
</div>
