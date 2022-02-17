<script setup lang="ts">
import { ref, defineProps, defineEmits } from 'vue'

import type { AugmentProbability } from '#/data/set6/augmentProbabilities'

const props = defineProps<{
	probabilities: AugmentProbability[],
	depth: number
	selectedTiers: number[],
}>()

const emit = defineEmits(['select'])

function onPropagateSelect(tierIndex: number, depth: number) {
	emit('select', tierIndex, depth)
}

const largestProbability = 85
</script>

<template>
<div
	class="augment-chance"
	:style="{ transform: `translate(${(depth > 0 ? -100 / 3 : 0) + (depth < 3 && selectedTiers[depth] >= 0 ? -(selectedTiers[depth] - 1) * 100 / 6 : 0)}%)` }"
>
	<div
		v-for="([probability, children], tierIndex) in probabilities" :key="tierIndex"
	>
		<div v-if="probability > 0" class="bubble-container" :class="selectedTiers[depth] >= 0 && selectedTiers[depth] !== tierIndex ? 'opacity-25' : null">
			<button
				type="button"
				class="rounded-full min-w-12 min-h-12"
				:class="tierIndex === 0 ? 'bg-gray-300' : (tierIndex === 1 ? 'bg-yellow-200' : 'bg-purple-200')"
				:style="{ minWidth: '4vmin', minHeight: '4vmin', width: `${probability >= largestProbability ? 100 : 100 * probability / largestProbability}%`, height: `${probability >= largestProbability ? 100 : 100 * probability / largestProbability}%` }"
				@click="onPropagateSelect(tierIndex, depth)"
			>
				{{ probability }}
			</button>
		</div>
		<AugmentChances
			v-if="children && selectedTiers[depth] === tierIndex"
			:probabilities="children" :depth="depth + 1" :selectedTiers="selectedTiers"
			class="absolute"
			@select="onPropagateSelect"
		/>
	</div>
</div>
</template>

<style scoped lang="postcss">
.augment-chance {
	@apply flex justify-center items-center;
	transition: transform 0.4s;
}

.bubble-container {
	@apply flex items-center justify-center;
	width: 20vmin;
	height: 20vmin;
	transition: opacity 0.4s;
}

.bubble-container button {
	@apply font-semibold;
	font-size: 3.3vmin;
	line-height: 4vmin;
}
</style>
