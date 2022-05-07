<script setup lang="ts">
import { computed, ref } from 'vue'

import { getIconURL, SetNumber } from '@tacticians-academy/academy-library'
import { itemFlashcards } from '@tacticians-academy/academy-library/dist/set6/flashcards/items'

const CURRENT_SET_NUMBER: SetNumber = 6.5

const showBack = ref(false)

const componentItems = itemFlashcards.filter(item => item.type === 'component')
const completedItems = itemFlashcards.filter(item => item.from.length)
const componentIDs = componentItems.map(item => item.id)
type ComponentCombination = [number, number]
const componentCombinations: ComponentCombination[] = []
for (let firstIndex = 0; firstIndex < componentIDs.length; firstIndex += 1) {
	const firstID = componentIDs[firstIndex]
	for (let secondIndex = firstIndex; secondIndex < componentIDs.length; secondIndex += 1) {
		const secondID = componentIDs[secondIndex]
		componentCombinations.push([firstID, secondID])
	}
}

function componentsKey([firstID, secondID]: ComponentCombination) {
	// if (secondID < firstID) {
	// 	const newSecondID = firstID
	// 	firstID = secondID
	// 	secondID = newSecondID
	// }
	return `${firstID}+${secondID}`
}
function componentIDsFrom(key: string) {
	return key.split('+').map(segment => parseInt(segment, 10)) as ComponentCombination
}

const nextCombinationIDs = ref(getNextFlashcard())
const nextComponents = computed(() => nextCombinationIDs.value.map(id => itemFlashcards.find(flashcard => flashcard.id === id)!))
const nextCompleted = computed(() => {
	return completedItems.find(item => {
		const remainingComponentIDs = [...nextCombinationIDs.value]
		item.from.forEach(id => {
			const index = remainingComponentIDs.indexOf(id)
			if (index !== -1) {
				remainingComponentIDs.splice(index, 1)
			}
		})
		return !remainingComponentIDs.length
	})
})

function getNextFlashcard() {
	return componentCombinations[Math.floor(Math.random() * componentCombinations.length)]
}

function onFlashcard() {
	showBack.value = !showBack.value
	if (!showBack.value) {
		nextCombinationIDs.value = getNextFlashcard()
	}
}
</script>

<template>
<button class="flashcard-content" @click="onFlashcard">
	<div class="card-container">
		<div class="icon-container" :class="showBack ? 'small' : 'large'">
			<img :id="nextComponents[0].name" :src="getIconURL(CURRENT_SET_NUMBER, nextComponents[0], false)" :alt="nextComponents[0].name">
			<div class="text-secondary font-thin">＋</div>
			<img :id="nextComponents[1].name" :src="getIconURL(CURRENT_SET_NUMBER, nextComponents[1], false)" :alt="nextComponents[1].name">
		</div>
		<div v-if="showBack" class="h-auto flex space-x-2">
			<img :src="getIconURL(CURRENT_SET_NUMBER, nextCompleted!, false)" :alt="nextCompleted!.name" class="w-32 h-32">
			<div class="max-w-[32rem] text-left">
				<div class="text-xl ">{{ nextCompleted!.name }}</div>
				<div class="">{{ nextCompleted!.description }}</div>
			</div>
		</div>
	</div>
</button>
</template>

<style scoped lang="postcss">
.flashcard-content {
	@apply w-full flex flex-col justify-center items-center text-left;
	min-height: 67vh;
}

.icon-container {
	@apply flex;
}
.icon-container.large {
	@apply font-thin;
	font-size: 96px;
	line-height: 125%;
}
.icon-container.large img {
	@apply w-32 h-32;
}
.icon-container.small {
	@apply mb-2;
	width: 64px;
	font-size: 32px;
}
.icon-container.small img {
	@apply rounded-full;
	width: 48px;
}
.icon-container.small div {
	@apply text-center;
	min-width: 32px;
}
img {
	@apply block rounded-xl aspect-square;
}
</style>
