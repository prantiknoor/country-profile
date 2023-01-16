<script lang="ts">
	import CountryInfoCard from '$lib/components/CountryInfoCard.svelte';
	import SearchFilterBar from '$lib/components/SearchFilterBar.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	let outputAllCountryInfo = data.allCountryInfo;
	let searchQuery: string;
	let filter: string;

	$: {
		if (searchQuery) {
			outputAllCountryInfo = data.allCountryInfo.filter((countryInfo) => {
				return countryInfo.name.toLowerCase().includes(searchQuery.toLowerCase());
			});
		} else {
			outputAllCountryInfo = data.allCountryInfo;
		}

		if(filter) {
			outputAllCountryInfo = outputAllCountryInfo.filter(countryInfo => {
				return countryInfo.region.toLowerCase().includes(filter.toLowerCase());
			});
		}
	}
</script>

<SearchFilterBar bind:searchQuery bind:filter />
<div class="flex flex-wrap gap-8 justify-center mt-6">
	{#each outputAllCountryInfo as countryInfo (countryInfo.name)}
		<CountryInfoCard {countryInfo} />
	{/each}
</div>
