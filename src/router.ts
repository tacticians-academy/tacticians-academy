import { createRouter, createWebHistory } from 'vue-router'

import AugmentTierCalculator from '#/components/AugmentTierCalculator.vue'
import Flashcards from '#/components/Flashcards.vue'

export const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			name: 'Home',
			path: '/',
			component: AugmentTierCalculator,
		},
		{
			name: 'AugmentTierCalculator',
			path: '/augment-calculator',
			component: AugmentTierCalculator,
		},
		{
			name: 'Flashcards',
			path: '/flashcards',
			component: Flashcards,
		},
	],
})
