<template>
	<div class="min-h-screen relative text-[#1D1D1F] flex flex-col">
		<Header class="sticky top-0 z-50" />
		<main
			class="h-full z-40 bg-gradient-to-r flex-1 from-blue-900 via-indigo-600 to-purple-500 text-white"
		>
			<NuxtPage class="py-4 md:py-10" />
		</main>
		<Footer class="bg-[#e0f2fe] bottom-0" />
	</div>
</template>
<script setup>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
</script>
<style></style>
