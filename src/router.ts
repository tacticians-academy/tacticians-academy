import { createRouter, createWebHistory } from 'vue-router'

import AugmentTierCalculator from '#/components/AugmentTierCalculator.vue'

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
	],
})
