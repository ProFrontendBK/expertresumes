<template>
	<div class="grid gap-4 mx-auto justify-items-center">
		<div v-if="!store.pdf?.fileName" class="w-fit text-xl tracking-wide">
			Resume Preview {{ store.showLoadingAnimation }}
		</div>
		<div class="grid justify-items-center" v-else>
			<img src="/img/blast-animation.gif" alt="" />

			<div class="text-center p-4 text-xl line-clamp-2">
				Congratulations! Your Resume Has Been Successfully Generated.
			</div>
		</div>

		<div v-if="store.pdf?.fileName">{{ store.pdf.fileName }}</div>
		<div
			class="bg-white mb-4 bg-glass-blur bg-white/5 border-[2px] rounded-[12px] grid justify-items-center"
		>
			<div
				v-if="store.showLoadingAnimation"
				class="grid grid-flow-row gap-4 items-center text-center uppercase p-4"
			>
				<div class="flex flex-row items-center justify-center">
					<div
						class="text-white capitalize text-sm transition-all delay-300 ease-in-out"
					>
						{{ currentMessage }}
					</div>
				</div>
				<img src="/img/page-loading.gif" class="rounded-[8px]" alt="" />
			</div>
			<iframe v-else :src="pdfUrl" class="h-[350px] w-fit p-4"></iframe>
		</div>
		<div v-if="store.pdf?.fileName" class="grid grid-flow-row md:grid-flow-col gap-4">
			<NuxtLink
				to="/"
				class="rounded-[12px] w-[200px] text-center text-white border-white border-2 bg-opacity-90 hover:bg-opacity-100 transition-color ease delay-100 py-3 px-5 text-[13px] font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
			>
				Home
			</NuxtLink>
			<button
				@click="downloadFile"
				class="rounded-[12px] bg-white w-[200px] text-center text-black bg-opacity-90 hover:bg-opacity-100 transition-color ease delay-100 py-3 px-5 text-[13px] font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
			>
				Download Resume
			</button>
		</div>
	</div>
</template>

<script setup>
import { useResumeStore } from "@/store/resume.js";
const store = useResumeStore();

const pdfUrl = computed(() => store.pdfDataUrl);
const resumeGenerationMessages = [
	"Preparing your resume...",
	"Fetching your details...",
	"Formatting your experience...",
	"Highlighting your skills...",
	"Optimizing layout...",
	"Adding personal information...",
	"Customizing design...",
	"Reviewing content...",
	"Finalizing sections...",
	"Almost done...",
];

const currentMessage = ref(resumeGenerationMessages[0]);
let messageIndex = 0;
let intervalId = null;

const showNextMessage = () => {
	messageIndex++;
	if (messageIndex >= resumeGenerationMessages.length - 1) {
		clearInterval(intervalId);
		messageIndex = resumeGenerationMessages.length - 1;
	}
	currentMessage.value = resumeGenerationMessages[messageIndex];
};

function downloadFile() {
	if (store.pdf !== "") {
		const link = document.createElement("a");
		link.href = `data:application/pdf;base64,${store.pdf.data}`;
		link.download = store.pdf.fileName;
		link.click();
	} else {
		console.error("No PDF data available for download.");
	}
}

onMounted(() => {
	intervalId = setInterval(showNextMessage, 2000);
	store.getResumeById()
	store.loadPdfFromLocalStorage();
	pdfUrl.value = store.pdfDataUrl;
});

onBeforeUnmount(() => {
	clearInterval(intervalId);
});
</script>

<style></style>
