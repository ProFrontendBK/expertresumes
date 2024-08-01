<template>
	<div class="flex flex-col w-full h-full py-4 md:py-10 text-[#1D1D1F]">
		<h2 class="grid text-white text-[36px] mx-auto max-w-[800px]">Build Your Resume</h2>
		<form
			@submit.prevent="submitDetails"
			class="p-4 grid gap-4 mx-auto max-w-[800px] w-full"
		>
			<div
				class="bg-white p-5 border-[#D1D1D6] rounded-[12px] ring-1 ring-gray-900/5 grid gap-5"
			>
				<h5 class="text-xl font-semibold tracking-wider">BASIC DETAILS</h5>
				<div class="grid md:grid-cols-2 gap-4">
					<div class="flex flex-col">
						<label class="text-[13px]" for="name">Name</label>
						<input
							type="text"
							v-model="name"
							id="name"
							placeholder="John Doe"
							class="p-3 focus:outline-none focus:ring-[2px] focus:ring-blue-100 rounded-[12px] border-[0.5px] border-[#D1D1D6] placeholder:text-gray-500/30"
						/>
					</div>
					<div class="flex flex-col">
						<label class="text-[13px]" for="phone">Mobile Number</label>
						<input
							type="text"
							v-model="phone"
							id="phone"
							placeholder="+91 9876543210"
							class="p-3 focus:outline-none focus:ring-[2px] focus:ring-blue-100 rounded-[12px] border-[0.5px] border-[#D1D1D6] placeholder:text-gray-500/30"
						/>
					</div>
					<div class="flex flex-col">
						<label class="text-[13px]" for="linkedin">Linkedin</label>
						<input
							type="text"
							id="linkedin"
							placeholder="https://www.linkedin.com/in/"
							v-model="linkedin"
							class="p-3 focus:outline-none focus:ring-[2px] focus:ring-blue-100 rounded-[12px] border-[0.5px] border-[#D1D1D6] placeholder:text-gray-500/30"
						/>
					</div>
					<div class="flex flex-col">
						<label class="text-[13px]" for="email">Email</label>
						<input
							type="text"
							id="email"
							v-model="email"
							placeholder="placeholder@gmail.com"
							class="p-3 focus:outline-none focus:ring-[2px] focus:ring-blue-100 rounded-[12px] border-[0.5px] border-[#D1D1D6] placeholder:text-gray-500/30"
						/>
					</div>
					<div class="flex flex-col">
						<label class="text-[13px]" for="github">Github</label>
						<input
							type="text"
							v-model="github"
							id="github"
							placeholder="https://github.com/"
							class="p-3 focus:outline-none focus:ring-[2px] focus:ring-blue-100 rounded-[12px] border-[0.5px] border-[#D1D1D6] placeholder:text-gray-500/30"
						/>
					</div>
					<div class="flex flex-col">
						<label class="text-[13px]" for="portfolio">Portfolio</label>
						<input
							type="text"
							id="portfolio"
							v-model="portfolio"
							placeholder="www.placeholder.com"
							class="p-3 focus:outline-none focus:ring-[2px] focus:ring-blue-100 rounded-[12px] border-[0.5px] border-[#D1D1D6] placeholder:text-gray-500/30"
						/>
					</div>
				</div>
			</div>
			<div
				class="bg-white p-5 border-[#D1D1D6] rounded-[12px] ring-1 ring-gray-900/5 grid gap-5"
			>
				<h5 class="text-xl font-semibold">EDUCATION</h5>
				<ClientOnly>
					<Education
						v-for="(edu, index) in education"
						:key="edu.id"
						:index="index"
						:isLast="index === education.length - 1"
						:isFirst="index === 0"
						:section="edu"
						@addNewSection="addNewSection('education')"
						@update:eduDetails="updateEduDetails"
						@removeSection="removeEduSection"
					/>
				</ClientOnly>
			</div>
			<div
				class="bg-white p-5 border-[#D1D1D6] rounded-[12px] ring-1 ring-gray-900/5 grid gap-4"
			>
				<div class="grid grid-flow-col items-center">
					<h5 class="text-xl font-semibold">EXPERIENCE</h5>
					<button
						v-if="experience.length === 0"
						class="p-2 w-fit grid items-center justify-self-end border-yellow-500 text-center font-semibold transition duration-300 ease-in-out delay-100 transform hover:bg-yellow-500 hover:text-white"
						@click="addNewSection('experience')"
					>
						<ClientOnly>
							<font-awesome-icon
								icon="fa-solid fa-circle-plus"
								class="text-xl"
							/>
						</ClientOnly>
					</button>
				</div>
				<ClientOnly>
					<Experience
						@update:expDetails="updateExpDetails"
						@removeSection="removeExpSection"
						v-for="(exp, index) in experience"
						:section="exp"
						@addNewSection="addNewSection('experience')"
						:key="exp.id"
						:index="index"
						:isLast="index === experience.length - 1"
						:isFirst="index === 0"
					/>
				</ClientOnly>
			</div>
			<div
				class="bg-white p-5 border-[#D1D1D6] rounded-[12px] ring-1 ring-gray-900/5 grid gap-4"
			>
				<div class="grid grid-flow-col items-center">
					<h5 class="text-xl font-semibold">SKILLS</h5>
				</div>
				<div class="flex flex-col">
					<label class="text-[13px]" for="skills">Skills</label>
					<textarea
						type="text"
						id="skills"
						v-model="skills"
						placeholder="Enter skills (e.g., JavaScript, React, HTML)"
						class="p-3 focus:outline-none focus:ring-[2px] focus:ring-blue-100 rounded-[12px] border-[0.5px] border-[#D1D1D6] placeholder:text-gray-500/30"
					/>
				</div>
			</div>
			<div
				class="bg-white p-5 border-[#D1D1D6] rounded-[12px] ring-1 ring-gray-900/5 grid gap-4"
			>
				<div class="grid grid-flow-col items-center">
					<h5 class="text-xl font-semibold">PROJECTS</h5>
					<button
						v-if="project.length === 0"
						class="p-2 w-fit grid items-center justify-self-end border-yellow-500 text-center font-semibold transition duration-300 ease-in-out delay-100 transform hover:bg-yellow-500 hover:text-white"
						@click="addNewSection('project')"
					>
						<ClientOnly>
							<font-awesome-icon
								icon="fa-solid fa-circle-plus"
								class="text-xl"
							/>
						</ClientOnly>
					</button>
				</div>
				<ClientOnly>
					<Project
						@update:proDetails="updateProDetails"
						@removeSection="removeProSection"
						v-for="(pro, index) in project"
						:section="pro"
						@addNewSection="addNewSection('project')"
						:key="pro.id"
						:index="index"
						:isLast="index === project.length - 1"
						:isFirst="index === 0"
					/>
				</ClientOnly>
			</div>
			<div class="grid md:grid-flow-col gap-4 mt-4">
				<button
					type="submit"
					class="rounded-[12px] bg-blue-600/10 hover:bg-blue-600/30 border-blue-600 border-[1px] py-3 px-5 text-[13px] font-semibold text-gray-900 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
				>
					Generate Basic Resume
				</button>
				<button
					type="submit"
					class="rounded-[12px] bg-blue-800 hover:bg-blue-800/90 text-white py-3 px-5 text-[13px] font-semibold shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
				>
					Generate ATS Resume
				</button>
			</div>
		</form>
	</div>
</template>
<script setup>
import { useResumeStore } from "@/store/resume.js";
const store = useResumeStore();
const name = ref("");
const phone = ref("");
const linkedin = ref("");
const email = ref("");
const github = ref("");
const portfolio = ref("");
const education = ref([]);
const experience = ref([]);
const skills = ref("");
const project = ref([]);
function updateEduDetails(section) {
	const index = education.value.findIndex((item) => item.id === section.id);
	if (index !== -1) {
		education[index] = { ...education[index], ...section };
	} else {
		console.log(`Object with id ${section.id} not found.`);
	}
}
function updateExpDetails(section) {
	const index = experience.value.findIndex((item) => item.id === section.id);
	if (index !== -1) {
		experience[index] = { ...experience[index], ...section };
	} else {
		console.log(`Object with id ${section.id} not found.`);
	}
}
function updateProDetails(section) {
	const index = project.value.findIndex((item) => item.id === section.id);
	if (index !== -1) {
		project[index] = { ...project[index], ...section };
	} else {
		console.log(`Object with id ${section.id} not found.`);
	}
}
function generateDynamicId(prefix = "id") {
	return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
}
function addNewSection(category) {
	let dynamicId = generateDynamicId();
	if (category === "education") {
		education.value.push({
			id: dynamicId,
			schoolName: "",
			schoolLocation: "",
			degree: "",
			fieldOfStudy: "",
			startDate: "",
			endDate: "",
		});
	} else if (category === "experience") {
		experience.value.push({
			id: dynamicId,
			jobTitle: "",
			jobDescription: "",
			employer: "",
			city: "",
			country: "",
			startDate: "",
			endDate: "",
		});
	} else if (category === "project") {
		project.value.push({
			id: dynamicId,
			projectTitle: "",
			projectDescription: "",
			projectLink: "",
		});
	}
}
addNewSection("education");
addNewSection("experience");
addNewSection("project");
function removeEduSection(id) {
	education.value = education.value.filter((edu) => edu.id !== id);
}
function removeExpSection(id) {
	experience.value = experience.value.filter((exp) => exp.id !== id);
}
function removeProSection(id) {
	project.value = project.value.filter((pro) => pro.id !== id);
}
function submitDetails() {
	store.sendDetails({
		name: name.value,
		email: email.value,
		phone: phone.value,
		github: github.value,
		linkedin: linkedin.value,
		education: education.value,
		experience: experience.value,
		skills: skills.value,
		project: project.value,
	});
}
</script>
<style></style>
