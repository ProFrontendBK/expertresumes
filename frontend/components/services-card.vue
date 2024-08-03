<template>
	<div
		class="grid md:grid-flow-col justify-items-center bg-white text-[#1D1D1F] border-[1px] shadow-xl max-w-[500px] rounded-[12px] gap-6 p-4 md:p-6"
	>
		<img :src="img" alt="" class="h-[150px] w-[150px]  object-fit" />
		<div class="flex flex-col">
			<div class="text-2xl font-bold tracking-tight">{{ title }}</div>
			<div class="font-light text-sm flex-1">
				{{ content }}
			</div>
			<NuxtLink class="border-[#1e3a8a] border-2 text-[#1e3a8a] font-semibold text-sm rounded-[12px] px-4 py-2 mt-[12px]" to="/contact">
				<div class="flex justify-between">
					<div>Book a Session </div>
					<div><font-awesome-icon icon="fa-solid fa-right-to-bracket" /></div>
				</div>
			</NuxtLink>
		</div>
	</div>
</template>

<script setup>
const router = useRouter()
const props = defineProps({
	img: String,
	title:String,
	content:String,
})
</script>

<style></style>
