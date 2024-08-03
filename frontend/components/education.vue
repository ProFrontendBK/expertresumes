<template>
	<div>
		<div class="grid grid-cols-2 gap-4">
			<div class="col-span-2 grid grid-cols-2 border-gray-900/5 border-t-[1px] pt-4">
				<span class="uppercase tracking-wider">{{ section.schoolName || 'College Name' }}</span>
				<button
					v-if="!isFirst"
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
				<label class="text-[13px]" for="schoolName">College Name</label>
				<input
					type="text"
					v-model="section.schoolName"
					@input="emitEduDetails"
					id="schoolName"
					placeholder="Enter your college name"
					class="p-3 focus:outline-none focus:ring-[2px] focus:ring-blue-100 rounded-[12px] border-[0.5px] border-[#D1D1D6] placeholder:text-gray-500/30"
				/>
			</div>
			<div class="flex flex-col col-span-2 md:col-span-1">
				<label class="text-[13px]" for="schoolLocation">College Location</label>
				<input
					type="text"
					v-model="section.schoolLocation"
					@input="emitEduDetails"
					placeholder="Enter your College Location"
					id="schoolLocation"
					class="p-3 focus:outline-none focus:ring-[2px] focus:ring-blue-100 rounded-[12px] border-[0.5px] border-[#D1D1D6] placeholder:text-gray-500/30"
				/>
			</div>
			<div class="flex flex-col col-span-2 md:col-span-1">
				<label class="text-[13px]" for="degree">Degree</label>
				<input
					type="text"
					v-model="section.degree"
					@input="emitEduDetails"
					placeholder="Enter your Degree"
					id="degree"
					class="p-3 focus:outline-none focus:ring-[2px] focus:ring-blue-100 rounded-[12px] border-[0.5px] border-[#D1D1D6] placeholder:text-gray-500/30"
				/>
			</div>
			<div class="flex flex-col col-span-2 md:col-span-1">
				<label class="text-[13px]" for="fieldOfStudy">Field of Study</label>
				<input
					type="text"
					v-model="section.fieldOfStudy"
					@input="emitEduDetails"
					placeholder="Enter your course of study"
					id="fieldOfStudy"
					class="p-3 focus:outline-none focus:ring-[2px] focus:ring-blue-100 rounded-[12px] border-[0.5px] border-[#D1D1D6] placeholder:text-gray-500/30"
				/>
			</div>
			<div class="flex flex-col">
				<label class="text-[13px]" for="startDate">Start Date</label>
				<input
					type="text"
					v-model="section.startDate"
					@input="emitEduDetails"
					placeholder="01/01/1999"
					id="startDate"
					class="p-3 focus:outline-none focus:ring-[2px] focus:ring-blue-100 rounded-[12px] border-[0.5px] border-[#D1D1D6] placeholder:text-gray-500/30"
				/>
			</div>
			<div class="flex flex-col">
				<label class="text-[13px]" for="endDate">End Date</label>
				<input
					type="text"
					v-model="section.endDate"
					@input="emitEduDetails"
					placeholder="01/01/1999"
					id="endDate"
					class="p-3 focus:outline-none focus:ring-[2px] focus:ring-blue-100 rounded-[12px] border-[0.5px] border-[#D1D1D6] placeholder:text-gray-500/30"
				/>
			</div>
			<div class="flex flex-col col-span-2">
				<label class="text-[13px]" for="date">Course Work</label>
				<textarea
					type="text"
					v-model="section.courseWork"
					@input="emitEduDetails"
					placeholder="Summarize the courses you've studied"
					id="date"
					class="p-3 focus:outline-none focus:ring-[2px] focus:ring-blue-100 rounded-[12px] border-[0.5px] border-[#D1D1D6] placeholder:text-gray-500/30 h-[100px]"
				/>
			</div>
		</div>

		<div class="grid grid-flow-col justify-between mt-4">
			<button
				v-if="isLast"
				class="py-3 px-5 text-[13px] border-[1px] rounded-[12px] text-center font-semibold transition duration-300 ease-in-out delay-100  hover:bg-gray-500/5"
				@click="$emit('addNewSection', 'education')"
			>
				<font-awesome-icon icon="fa-solid fa-plus" class="mr-2" /> Add New Degree
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
