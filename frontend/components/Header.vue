<template>
	<header
		class=" fixed w-full bg-glass-white border border-glass-border backdrop-blur"
	>
		<nav class="px-[48px] py-[12px]  grid items-center max-w-[1152px] mx-auto">
			<ul
				class="flex flex-row justify-between items-center gap-6 tracking-wider font-semibold uppercase w-full mx-auto"
			>
				<li>
					<img src="" class="h-[48px] w-[100px] bg-blue-50" alt="">
				</li>
				<li>
					<ul class="flex flex-row gap-6">
						<li @click="activeMenu = 'home'" class="transition-all delay-200 ease-in-out"
							:class="[activeMenu === 'home' ? '' : 'text-gray-900/50 transition-all delay-200 ease-in-out']">
							<NuxtLink to="/">
								Home
							</NuxtLink>
						</li>
						<li @click="activeMenu = 'services'" class="transition-all delay-200 ease-in-out"
							:class="[activeMenu === 'services' ? '' : 'text-gray-900/50 transition-all delay-200 ease-in-out']">
							<NuxtLink to="/services">
								Services
							</NuxtLink>
						</li>
						<li @click="activeMenu = 'contact'" class="transition-all delay-200 ease-in-out"
							:class="[activeMenu === 'contact' ? '' : 'text-gray-900/50 transition-all delay-200 ease-in-out']">
							<NuxtLink to="/contact">
								Contact
							</NuxtLink>
						</li>
						<li
							@click="activeMenu = 'about'" class="transition-all delay-200 ease-in-out"
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
	</header>
</template>
<script setup>
import { useResumeStore } from "@/store/resume.js";
const store = useResumeStore();
const activeMenu = ref("");
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
