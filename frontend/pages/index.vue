<template>
	<div class="">
		<section
			class=""
		>
			<div class="grid justify-items-center mx-auto px-4 text-center gap-4 lg:gap-6">
				<h1 class="text-3xl md:text-5xl font-bold">Build Your Perfect Resume</h1>
				<p class="text-sm md:text-xl font-light w-[80%] lg:w-[60%]">
					Stand out from the crowd with professionally crafted resumes. Tailored
					to your needs, ready in minutes.
				</p>
				<NuxtLink
					to="/create-resume"
					class="bg-white block md:hidden text-blue-500 px-6 py-3 rounded-full font-semibold text-base hover:bg-gray-100 transition duration-300"
					>Create Resume</NuxtLink>
				<NuxtLink
					to="/create-resume"
					class="bg-white hidden md:block text-blue-500 px-6 py-3 rounded-full font-semibold text-base hover:bg-gray-100 transition duration-300"
					>Create Your Resume Now</NuxtLink>
				<img src="~/assets/images/ats.png" class="h-[400px] object-cover object-fit" />
			</div>
		</section>
	</div>
</template>

<script setup></script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
