<template>
	<div class="flex flex-col min-h-full h-[100vh] justify-between">
		<Header />
		<main class="p-4 h-full bg-[#fafafa]">
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
