<template>
	<div>
		<div class="grid grid-cols-2 gap-4 border-t-[2px]">
			<div class="col-span-2 grid grid-cols-2">
				<div class="uppercase opacity-50">{{ section.id }}</div>
			<button
				v-if="!isFirst"
				class="p-2 w-fit grid items-center justify-self-end border-[0.5px] border-yellow-500 text-center font-semibold transition duration-300 ease-in-out delay-100 transform hover:bg-yellow-500 hover:text-white"
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
			<div class="flex flex-col">
				<label for="schoolName">College Name</label>
				<input
					type="text"
					v-model="section.schoolName"
					@input="emitEduDetails"
					id="schoolName"
					class="px-4 py-2 rounded-sm focus:outline-none focus:ring-[2px] focus:ring-blue-100 border-[0.5px] border-gray-500"
				/>
			</div>
			<div class="flex flex-col">
				<label for="schoolLocation">College Location</label>
				<input
					type="text"
					v-model="section.schoolLocation"
					@input="emitEduDetails"
					id="schoolLocation"
					class="px-4 py-2 rounded-sm focus:outline-none focus:ring-[2px] focus:ring-blue-100 border-[0.5px] border-gray-500"
				/>
			</div>
			<div class="flex flex-col">
				<label for="degree">Degree</label>
				<input
					type="text"
					v-model="section.degree"
					@input="emitEduDetails"
					id="degree"
					class="px-4 py-2 rounded-sm focus:outline-none focus:ring-[2px] focus:ring-blue-100 border-[0.5px] border-gray-500"
				/>
			</div>
			<div class="flex flex-col">
				<label for="fieldOfStudy">Field of Study</label>
				<input
					type="text"
					v-model="section.fieldOfStudy"
					@input="emitEduDetails"
					id="fieldOfStudy"
					class="px-4 py-2 rounded-sm focus:outline-none focus:ring-[2px] focus:ring-blue-100 border-[0.5px] border-gray-500"
				/>
			</div>
			<div class="flex flex-col">
				<label for="date">Date</label>
				<input
					type="text"
					v-model="section.date"
					@input="emitEduDetails"
					id="date"
					class="px-4 py-2 rounded-sm focus:outline-none focus:ring-[2px] focus:ring-blue-100 border-[0.5px] border-gray-500"
				/>
			</div>
		</div>

		<div class="grid grid-flow-col justify-between mt-4">
			<button
				v-if="isLast"
				class="p-2 border-[0.5px] border-yellow-500 text-center font-semibold transition duration-300 ease-in-out delay-100 transform hover:bg-yellow-500 hover:text-white"
				@click="$emit('addNewSection', 'education')"
			>
				Add New Education
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
	"update:eduDetails",
	"addNewSection",
	"removeSection",
]);

function emitEduDetails() {
	emit("update:eduDetails", section);
}
</script>

<style></style>
