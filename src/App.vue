<script setup lang="ts">
import '#/assets/main.postcss'

import AugmentTierCalculator from '#/components/AugmentTierCalculator.vue'
</script>

<template>
<header>
	<nav class="pl-3 py-2 bg-gray-200 dark:bg-gray-900  flex items-center">
		<a href="/" class="font-medium">Tactician's Academy</a>
		<!-- <a href="/flashcards" class="sub-page">Flashcards</a> -->
		<!-- <a href="/augment-calculator" class="sub-page">Augment Tier Calculator</a> -->
	</nav>
</header>
<div class="augment-container">
	<AugmentTierCalculator />
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
