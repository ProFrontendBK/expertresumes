<template>
	<div
		class="grid grid-flow-col bg-white border-[1px] shadow-xl max-w-[500px] rounded-[12px] gap-4 p-6"
	>
		<img :src="img" alt="" class="h-[150px] bg-blue-50 w-[150px] object-cover" />
		<div class="grid grid-flow-row">
			<div class="font-semibold text-lg">{{ title }}</div>
			<div class="font-light text-base">
				{{ content }}
			</div>
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
	img: String,
	title:String,
	content:String,
})
</script>

<style></style>
