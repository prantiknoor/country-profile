<script lang="ts">
	import { Search, Select } from "flowbite-svelte";

    export let filter: string;
	export let searchQuery: string;

	let countries = [
		{ value: 'africa', name: 'Africa' },
		{ value: 'americas', name: 'Americas' },
		{ value: 'asia', name: 'Asia' },
		{ value: 'europe', name: 'Europe' },
		{ value: 'oceania', name: 'Oceania' },
		{ value: '', name: 'All Region' },
	];
</script>

<div class="flex gap-x-4 justify-between">
    <Search bind:value={searchQuery} class="max-w-sm" size="md" placeholder="Search country by name..."/>
    <Select class="max-w-[9rem]" bind:value={filter} items={countries} placeholder="Filter by region"/>
</div>