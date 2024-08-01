<template>
	<div>
		<div class="grid grid-cols-2 gap-4 border-gray-900/5 border-t-[1px] pt-4">
			<div class="col-span-2 grid grid-cols-2">
				<div class="uppercase opacity-50">{{ section.projectTitle || 'Project Title' }}</div>

				<button
					class="w-fit grid items-center justify-self-end rounded-full border-gray-900 text-center font-semibold transition duration-300 ease-in-out delay-100  hover:bg-gray-900 hover:text-white"
					@click="$emit('removeSection', section.id)"
				>
					<ClientOnly>
						<font-awesome-icon
							icon="fa-regular fa-circle-xmark"
							class="text-xl"
						/>
					</ClientOnly>
				</button>
			</div>
			<div class="flex flex-col col-span-2 md:col-span-1">
				<label class="text-[13px]" for="projectTitle">Project Title</label>
				<input
					type="text"
					v-model="section.projectTitle"
					placeholder="Enter your project name"
					@input="emitProDetails"
					id="projectTitle"
					class="p-3 focus:outline-none focus:ring-[2px] focus:ring-blue-100 rounded-[12px] border-[0.5px] border-[#D1D1D6] placeholder:text-gray-500/30"
				/>
			</div>

			<div class="flex flex-col col-span-2 md:col-span-1">
				<label class="text-[13px]" for="projectLink">Project Link</label>
				<input
					type="text"
					v-model="section.projectLink"
					placeholder="Enter your project link"
					@input="emitProDetails"
					id="projectDescription"
					class="p-3 focus:outline-none focus:ring-[2px] focus:ring-blue-100 rounded-[12px] border-[0.5px] border-[#D1D1D6] placeholder:text-gray-500/30"
				/>
			</div>
			<div class="flex flex-col col-span-2">
				<label class="text-[13px]" for="projectDescription"
					>Project Description</label
				>
				<textarea
					type="text"
					v-model="section.projectDescription"
					placeholder="Enter your project description"
					@input="emitProDetails"
					id="projectDescription"
					class="p-3 focus:outline-none focus:ring-[2px] focus:ring-blue-100 rounded-[12px] border-[0.5px] border-[#D1D1D6] placeholder:text-gray-500/30 h-[100px]"
				/>
			</div>
		</div>
		<div class="grid grid-flow-col justify-between mt-4">
			<button
				v-if="isLast"
				class="py-3 px-5 text-[13px] border-[1px] rounded-[12px] text-center font-semibold transition duration-300 ease-in-out delay-100  hover:bg-gray-500/5"
				@click="$emit('addNewSection', 'project')"
			>
				<font-awesome-icon icon="fa-solid fa-plus" class="mr-2" /> Add New Project
			</button>
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
	section: {
		type: Object,
	},
	isLast: {
		type: Boolean,
	},
	isFirst: {
		type: Boolean,
	},
});
const section = props.section;

const emit = defineEmits([
	"update:proDetails",
	"addNewSection",
	"removeSection",
]);

function emitProDetails() {
	emit("update:proDetails", section);
}
</script>

<style></style>
