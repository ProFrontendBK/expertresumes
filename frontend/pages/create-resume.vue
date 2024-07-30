<template>
	<div class="flex flex-row w-full h-full">
		<form
			@submit.prevent="submitDetails"
			class="p-4 grid gap-4 mx-auto w-[80%]"
		>
			<div class="border-2 border-yellow-400 p-4 grid gap-4">
				<h5 class="text-xl font-semibold col-span-2">Personal Details</h5>
				<div class="flex flex-col">
					<label for="name">Name</label>
					<input
						type="text"
						v-model="name"
						id="name"
						class="px-4 py-2 rounded-sm focus:outline-none focus:ring-[2px] focus:ring-blue-100 border-[0.5px] border-gray-500"
					/>
				</div>
				<div class="flex flex-col">
					<label for="phone">Mobile Number</label>
					<input
						type="text"
						v-model="phone"
						id="phone"
						class="px-4 py-2 rounded-sm focus:outline-none focus:ring-[2px] focus:ring-blue-100 border-[0.5px] border-gray-500"
					/>
				</div>
				<div class="flex flex-col">
					<label for="linkedin">Linkedin</label>
					<input
						type="text"
						id="linkedin"
						v-model="linkedin"
						class="px-4 py-2 rounded-sm focus:outline-none focus:ring-[2px] focus:ring-blue-100 border-[0.5px] border-gray-500"
					/>
				</div>
				<div class="flex flex-col">
					<label for="email">Gmail</label>
					<input
						type="text"
						id="email"
						v-model="email"
						class="px-4 py-2 rounded-sm focus:outline-none focus:ring-[2px] focus:ring-blue-100 border-[0.5px] border-gray-500"
					/>
				</div>
				<div class="flex flex-col">
					<label for="github">Github</label>
					<input
						type="text"
						v-model="github"
						id="github"
						class="px-4 py-2 rounded-sm focus:outline-none focus:ring-[2px] focus:ring-blue-100 border-[0.5px] border-gray-500"
					/>
				</div>
				<div class="flex flex-col">
					<label for="portfolio">Portfolio</label>
					<input
						type="text"
						id="portfolio"
						v-model="portfolio"
						class="px-4 py-2 rounded-sm focus:outline-none focus:ring-[2px] focus:ring-blue-100 border-[0.5px] border-gray-500"
					/>
				</div>
			</div>
			<div class="border-2 border-yellow-400 p-4 grid gap-4">
				<h5 class="text-xl font-semibold">Education</h5>
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
			<div class="border-2 border-yellow-400 p-4 grid gap-4">
				<div class="grid grid-flow-col items-center">
					<h5 class="text-xl font-semibold">Experience</h5>
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
			<div class="border-2 border-yellow-400 p-4 grid gap-4">
				<div class="grid grid-flow-col items-center">
					<h5 class="text-xl font-semibold">Skills</h5>
				</div>
				<div class="flex flex-col">
					<label for="skills">Skills</label>
					<textarea
						type="text"
						id="skills"
						v-model="skills"
						class="px-4 py-2 rounded-sm focus:outline-none focus:ring-[2px] focus:ring-blue-100 border-[0.5px] border-gray-500"
					/>
				</div>
			</div>
			<div class="border-2 border-yellow-400 p-4 grid gap-4">
				<div class="grid grid-flow-col items-center">
					<h5 class="text-xl font-semibold">Projects</h5>
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
			<button
				class="p-2 w-fit justify-self-end border-[0.5px] border-yellow-500 text-center font-semibold transition duration-300 ease-in-out delay-100 transform hover:bg-yellow-500 hover:text-white"
				type="submit"
			>
				Generate ATS Resume
			</button>
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
const skills = ref()
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
	console.log("Calling store component function");
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
