<template>
	<header
		class="fixed w-full bg-glass-white border-b-[0.5px] border-glass-border backdrop-blur"
	>
		<!-- Desktop Menu -->
		<nav
			class="hidden md:grid px-[48px] py-[12px] items-center max-w-[1152px] mx-auto"
		>
			<ul
				class="flex flex-row justify-between items-center gap-6 tracking-wider font-semibold uppercase w-full mx-auto"
			>
				<li class="bg-gradient-to-r from-blue-900 via-indigo-600 to-purple-500 text-white rounded-full">
					<!-- <img src="" class="h-[48px] w-[100px] bg-blue-50" alt="" /> -->
					 <p class="text-4xl tracking-tighter subpixel-antialiased p-2">ER</p>
				</li>
				<li>
					<ul class="flex flex-row gap-6">
						<li
							@click="activeMenu = 'home'"
							class="transition-all delay-200 ease-in-out"
							:class="[
								activeMenu === 'home'
									? ''
									: 'text-gray-900/50 transition-all delay-200 ease-in-out',
							]"
						>
							<NuxtLink to="/">
								Home
							</NuxtLink>
						</li>
						<li
							@click="activeMenu = 'services'"
							class="transition-all delay-200 ease-in-out"
							:class="[
								activeMenu === 'services'
									? ''
									: 'text-gray-900/50 transition-all delay-200 ease-in-out',
							]"
						>
							<NuxtLink to="/services">
								Services
							</NuxtLink>
						</li>
						<li
							@click="activeMenu = 'contact'"
							class="transition-all delay-200 ease-in-out"
							:class="[
								activeMenu === 'contact'
									? ''
									: 'text-gray-900/50 transition-all delay-200 ease-in-out',
							]"
						>
							<NuxtLink to="/contact">
								Contact
							</NuxtLink>
						</li>
						<li
							@click="activeMenu = 'about'"
							class="transition-all delay-200 ease-in-out"
							:class="[activeMenu === 'about' ? '' : 'text-gray-900/50']"
						>
							<NuxtLink to="/about">
								About
							</NuxtLink>
						</li>
					</ul>
				</li>
			</ul>
		</nav>
		<!-- Mobile Menu -->
		<nav class="md:hidden items-center max-w-[1152px] mx-auto">
			<ul
				class="flex flex-col justify-between items-center tracking-wider font-semibold uppercase w-full mx-auto"
			>
				<li class="grid px-4 grid-flow-col w-full justify-between items-center shadow-sm">
					<img src="" class="h-[48px] w-[100px] bg-blue-50" alt="" />
					<div class="p-4 transition-all delay-200 ease-in-out">
						<ClientOnly>
						<font-awesome-icon
							v-if="!isMobileMenuOpen"
							@click="isMobileMenuOpen = true"
							icon="fa-solid fa-bars"
							class="text-4xl"
						/>
						<font-awesome-icon
							v-else
							@click="isMobileMenuOpen = false"
							icon="fa-solid fa-xmark"
							class="text-4xl"
						/>
						</ClientOnly>
					</div>
				</li>
				<li class="bg-white w-full p-4 translate transition-all ease-in-out delay-300" v-if="isMobileMenuOpen">
					<ul class="flex flex-col gap-6 text-2xl text-center" @click.stop="isMobileMenuOpen=false">
						<li
							@click="activeMenu = 'home'"
							class="transition-all delay-200 ease-in-out border-b-[0.5px]"
							:class="[
								activeMenu === 'home'
									? ''
									: 'text-gray-900/50 transition-all delay-200 ease-in-out',
							]"
						>
							<NuxtLink to="/">
								Home
							</NuxtLink>
						</li>
						<li
							@click="activeMenu = 'services'"
							class="transition-all delay-200 ease-in-out border-b-[0.5px]"
							:class="[
								activeMenu === 'services'
									? ''
									: 'text-gray-900/50 transition-all delay-200 ease-in-out',
							]"
						>
							<NuxtLink to="/services">
								Services
							</NuxtLink>
						</li>
						<li
							@click="activeMenu = 'contact'"
							class="transition-all delay-200 ease-in-out border-b-[0.5px]"
							:class="[
								activeMenu === 'contact'
									? ''
									: 'text-gray-900/50 transition-all delay-200 ease-in-out',
							]"
						>
							<NuxtLink to="/contact">
								Contact
							</NuxtLink>
						</li>
						<li
							@click="activeMenu = 'about'"
							class="transition-all delay-200 ease-in-out border-b-[0.5px]"
							:class="[activeMenu === 'about' ? '' : 'text-gray-900/50']"
						>
							<NuxtLink to="/about">
								About Us
							</NuxtLink>
						</li>
					</ul>
				</li>
			</ul>
		</nav>
	</header>
</template>
<script setup>
import { useResumeStore } from "@/store/resume.js";
const store = useResumeStore();
const activeMenu = ref("");
const isMobileMenuOpen = ref(false);
const isHeaderNestedMenuOpen = useState("isHeaderNestedMenuOpen", () =>
	ref(false)
);
const handleClickOutside = (event) => {
	isHeaderNestedMenuOpen.value = false;
};

onMounted(() => {
	window.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
	window.removeEventListener("click", handleClickOutside);
});
</script>
<style scoped>
.glassmorphic-header {
	backdrop-filter: blur(10px);
	background-color: rgba(255, 255, 255, 0.2); /* White with opacity */
	border: 1px solid rgba(255, 255, 255, 0.3); /* Border with reduced opacity */
}
</style>
