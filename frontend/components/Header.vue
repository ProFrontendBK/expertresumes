<template>
	<header class="bg-[#f8fafc] shadow-xl border-b-2">
		<div class="text-xs bg-[#fde68a] px-4 font-semibold">
			Expert Resumes
		</div>
		<nav class="h-[64px] grid items-center">
			<ul class="grid grid-flow-col font-semibold w-[60%] mx-auto justify-items-center">
				<li>
					<NuxtLink to="/">
						Home
					</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/services">
						Services
					</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/contact">
						Contact
					</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/about">
						About
					</NuxtLink>
				</li>
			</ul>
		</nav>
	</header>
</template>
<script setup>
import { useResumeStore } from "@/store/resume.js";
const store = useResumeStore();
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
