<script setup lang="ts">
import '#/assets/main.postcss'

import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
<header>
	<nav class="pl-3 py-2 bg-gray-200 dark:bg-gray-900  flex items-center">
		<RouterLink to="/" class="font-medium">Tactician's Academy</RouterLink>
		<RouterLink :to="{ name: 'AugmentTierCalculator' }" class="sub-page">Augment Tier Calculator</RouterLink>
	</nav>
</header>
<div class="augment-container">
	<RouterView />
</div>
<footer class="h-16 text-secondary">
	<nav class="flex justify-center items-center">
		<a href="https://tftsim.netlify.app" target="_blank">Fight Simulator (WIP) ⍈</a>
		・
		<a>© 2022</a>
	</nav>
</footer>
</template>

<style scoped lang="postcss">
nav a {
	@apply h-8 px-3 flex items-center;
}

.sub-page {
	@apply text-gray-400;
}

.augment-container {
	@apply mb-16;
	min-height: 67vmin;
}
</style>
