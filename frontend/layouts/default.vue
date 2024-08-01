<template>
	<div class="min-h-screen relative text-[#1D1D1F] grid grid-rows-[auto_1fr_auto]">
		
				<Header class="sticky  top-0" />
				<main class="h-full bg-gradient-to-r from-blue-900 via-indigo-600 to-purple-500 text-white">
					<NuxtPage />
				</main>
			
				<Footer class="bg-[#e0f2fe]" />
			
	</div>
</template>
<script setup>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
</script>
<style></style>
