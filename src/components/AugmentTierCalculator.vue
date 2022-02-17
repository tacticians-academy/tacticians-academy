<script setup lang="ts">
import AugmentChances from '#/components/AugmentChances.vue'

import { computed, ref } from 'vue'

import { probabilityTree } from '#/data/set6/augmentProbabilities'

const selectedTiers = ref([-1, -1, -1, -1])

function onSelectTierAtDepth(tierIndex: number, depth: number) {
	selectedTiers.value[depth] = tierIndex
	for (let futureDepth = depth + 1; futureDepth < selectedTiers.value.length; futureDepth += 1) {
		selectedTiers.value[futureDepth] = -1
	}
}

const totalProbability = computed(() => {
	let accumulator = 1
	let current = probabilityTree
	for (const tier of selectedTiers.value) {
		accumulator *= current[0] / 100
		if (tier === -1) {
			break
		}
		current = current[1]![tier]
	}
	return accumulator
})
</script>

<template>
<div class="p-2">Percent of total games with these augment tiers: <b v-if="totalProbability < 1">{{ Math.round(totalProbability * 100) }} %</b></div>
<AugmentChances
	v-if="probabilityTree[1]"
	:probabilities="probabilityTree[1]" :depth="0" :selectedTiers="selectedTiers"
	class="text-bg"
	@select="onSelectTierAtDepth"
/>
</template>
