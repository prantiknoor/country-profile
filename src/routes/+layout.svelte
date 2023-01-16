<script>
	import '../app.postcss';
	import { DarkMode, Navbar } from "flowbite-svelte";
</script>

<Navbar class="shadow dark:bg-gray-800 px-0 sm:px-0" navDivClass="flex justify-between items-center max-w-screen-xl mx-auto px-6">
	<span class="text-xl font-semibold">Where in the world?</span>
	<div class="flex items-center">
		<DarkMode />
		<span class="hidden dark:inline">Light mode</span>
		<span class="dark:hidden">Dark mode</span>
	</div>
</Navbar>

<main class="p-6 max-w-screen-xl mx-auto">
	<slot />
</main>
