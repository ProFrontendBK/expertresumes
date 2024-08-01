<template>
	<div>
		<div class="grid grid-cols-2 gap-4 border-gray-900/5 border-t-[1px] pt-4">
			<div class="col-span-2 grid grid-cols-2">
				<div class="uppercase opacity-50">{{ section.jobTitle || 'job Title' }}</div>

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
				<label class="text-[13px]" for="title">Job Title</label>
				<input
					type="text"
					v-model="section.jobTitle"
					@input="emitExpDetails"
					placeholder="Software Developer"
					id="title"
					class="p-3 focus:outline-none focus:ring-[2px] focus:ring-blue-100 rounded-[12px] border-[0.5px] border-[#D1D1D6] placeholder:text-gray-500/30"
				/>
			</div>
			<div class="flex flex-col col-span-2 md:col-span-1">
				<label class="text-[13px]" for="employer">Employer</label>
				<input
					type="text"
					v-model="section.employer"
					@input="emitExpDetails"
					placeholder="Example Pvt Ltd"
					id="employer"
					class="p-3 focus:outline-none focus:ring-[2px] focus:ring-blue-100 rounded-[12px] border-[0.5px] border-[#D1D1D6] placeholder:text-gray-500/30"
				/>
			</div>
			<div class="flex flex-col col-span-2 md:col-span-1">
				<label class="text-[13px]" for="city">City</label>
				<input
					type="text"
					v-model="section.city"
					@input="emitExpDetails"
					placeholder="Enter your City"
					id="city"
					class="p-3 focus:outline-none focus:ring-[2px] focus:ring-blue-100 rounded-[12px] border-[0.5px] border-[#D1D1D6] placeholder:text-gray-500/30"
				/>
			</div>
			<div class="flex flex-col col-span-2 md:col-span-1">
				<label class="text-[13px]" for="country">Country</label>
				<input
					type="text"
					v-model="section.country"
					@input="emitExpDetails"
					placeholder="Enter your country name"
					id="country"
					class="p-3 focus:outline-none focus:ring-[2px] focus:ring-blue-100 rounded-[12px] border-[0.5px] border-[#D1D1D6] placeholder:text-gray-500/30"
				/>
			</div>
			<div class="flex flex-col">
				<label class="text-[13px]" for="startDate">Start Date</label>
				<input
					type="text"
					v-model="section.startDate"
					placeholder="01/01/1999"
					@input="emitExpDetails"
					id="startDate"
					class="p-3 focus:outline-none focus:ring-[2px] focus:ring-blue-100 rounded-[12px] border-[0.5px] border-[#D1D1D6] placeholder:text-gray-500/30"
				/>
			</div>
			<div class="flex flex-col">
				<label class="text-[13px]" for="endDate">End Date</label>
				<input
					type="text"
					v-model="section.endDate"
					placeholder="01/01/1999"
					@input="emitExpDetails"
					id="endDate"
					class="p-3 focus:outline-none focus:ring-[2px] focus:ring-blue-100 rounded-[12px] border-[0.5px] border-[#D1D1D6] placeholder:text-gray-500/30"
				/>
			</div>
			<div class="flex flex-col col-span-2">
				<label class="text-[13px]" for="jobDescription">Job Description</label>
				<textarea
					type="text"
					v-model="section.jobDescription"
					placeholder="Enter your Job Responsibilities"
					@input="emitExpDetails"
					id="jobDescription"
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
				<font-awesome-icon icon="fa-solid fa-plus" class="mr-2" /> Add New Experience
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
	"update:expDetails",
	"addNewSection",
	"removeSection",
]);

function emitExpDetails() {
	emit("update:expDetails", section);
}
</script>

<style></style>
