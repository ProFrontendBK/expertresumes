<template>
	<div class="min-h-screen grid grid-rows-[auto_1fr_auto]">
		
				<Header />
				<main class="h-full bg-[#fafafa]">
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
