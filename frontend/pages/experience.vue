<template>
	<div>
		<div class="grid grid-cols-2 gap-4 border-t-[2px]">
			<div class="col-span-2 grid grid-cols-2">
				<div class="uppercase opacity-50">{{ section.id }}</div>
               
				<button
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
				<label for="title">Job Title</label>
				<input
					type="text"
					v-model="section.jobTitle"
					@input="emitExpDetails"
					id="title"
					class="px-4 py-2 rounded-sm focus:outline-none focus:ring-[2px] focus:ring-blue-100 border-[0.5px] border-gray-500"
				/>
			</div>
            <div class="flex flex-col">
				<label for="employer">Employer</label>
				<input
					type="text"
					v-model="section.employer"
					@input="emitExpDetails"
					id="employer"
					class="px-4 py-2 rounded-sm focus:outline-none focus:ring-[2px] focus:ring-blue-100 border-[0.5px] border-gray-500"
				/>
			</div>
            <div class="flex flex-col">
				<label for="city">City</label>
				<input
					type="text"
					v-model="section.city"
					@input="emitExpDetails"
					id="city"
					class="px-4 py-2 rounded-sm focus:outline-none focus:ring-[2px] focus:ring-blue-100 border-[0.5px] border-gray-500"
				/>
			</div>
            <div class="flex flex-col">
				<label for="country">Country</label>
				<input
					type="text"
					v-model="section.country"
					@input="emitExpDetails"
					id="country"
					class="px-4 py-2 rounded-sm focus:outline-none focus:ring-[2px] focus:ring-blue-100 border-[0.5px] border-gray-500"
				/>
			</div>
            <div class="flex flex-col">
				<label for="startDate">Start Date</label>
				<input
					type="text"
					v-model="section.startDate"
					@input="emitExpDetails"
					id="startDate"
					class="px-4 py-2 rounded-sm focus:outline-none focus:ring-[2px] focus:ring-blue-100 border-[0.5px] border-gray-500"
				/>
			</div>
             <div class="flex flex-col">
				<label for="endDate">End Date</label>
				<input
					type="text"
					v-model="section.endDate"
					@input="emitExpDetails"
					id="endDate"
					class="px-4 py-2 rounded-sm focus:outline-none focus:ring-[2px] focus:ring-blue-100 border-[0.5px] border-gray-500"
				/>
			</div>
			<div class="flex flex-col col-span-2">
				<label for="jobDescription">Job Description</label>
				<textarea
					type="text"
					v-model="section.jobDescription"
					@input="emitExpDetails"
					id="jobDescription"
					class="px-4 py-2 rounded-sm focus:outline-none focus:ring-[2px] focus:ring-blue-100 border-[0.5px] border-gray-500 h-[150px]"
				/>
			</div>

            
			
		</div>

        <div class="grid grid-flow-col justify-between mt-4">
			<button
				v-if="isLast"
				class="p-2 border-[0.5px] border-yellow-500 text-center font-semibold transition duration-300 ease-in-out delay-100 transform hover:bg-yellow-500 hover:text-white"
				@click="$emit('addNewSection', 'education')"
			>
				Add New Experience
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
