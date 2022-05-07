<script setup lang="ts">
import '#/assets/main.postcss'

import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
<header>
	<nav class="pl-3 py-2 bg-secondary">
		<ul class="flex items-center">
			<li><RouterLink to="/" class="font-medium">Tactician's Academy</RouterLink></li>
			<li><RouterLink :to="{ name: 'Flashcards' }" class="text-secondary">Flashcards</RouterLink></li>
			<li><RouterLink :to="{ name: 'AugmentTierCalculator' }" class="text-secondary">Augment Tier Calculator</RouterLink></li>
		</ul>
	</nav>
</header>
<div class="container">
	<RouterView />
</div>
<footer class="h-16 text-secondary">
	<nav>
		<ul class="flex justify-center items-center">
			<li><a href="https://simulator.tacticians.academy" target="_blank">Fight Simulator (WIP)</a></li>
			・
			<li><a href="https://github.com/tacticians-academy/tacticians-academy" target="_blank">GitHub</a></li>
			・
			<li>© 2022</li>
		</ul>
	</nav>
</footer>
</template>

<style scoped lang="postcss">
nav li {
	@apply h-8 px-2 flex items-center;
}

.container {
	@apply mb-16;
	min-height: 67vmin;
}
</style>
