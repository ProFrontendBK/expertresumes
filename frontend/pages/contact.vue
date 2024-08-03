<template>
	<div class="grid grid-flow-col mx-auto max-w-[800px] gap-4">
		<div class="grid grid-flow-row gap-4 bg-white bg-opacity-15 backdrop-blur p-4 md:p-8 shadow-sm rounded-[12px]">
			<div class="text-2xl tracking-tight border-gray-200 font-medium border-b-[0.5px] "
				>
					Contact Us
				</div>
			<div class="grid md:grid-flow-col">
<div class="w-[250px] h-full justify-self-center grid items-center">
				<img class="object-fit py-6" src="/img/contact-us.svg" />
			</div>
				
			<form class="grid gap-3">
				<div class="grid gap-[2px]">
					<label for="name">Name</label>
					<input
						type="text"
						id="name"
						name="name"
						class="p-3 focus:outline-none focus:ring-[2px] text-black focus:ring-blue-100 rounded-[12px] border-[0.5px] border-[#D1D1D6] placeholder:text-gray-500/30"
						required
					/>
				</div>
				<div class="grid gap-[2px]">
					<label for="email">Email</label>
					<input
						type="email"
						id="email"
						name="email"
						class="p-3 focus:outline-none focus:ring-[2px] text-black focus:ring-blue-100 rounded-[12px] border-[0.5px] border-[#D1D1D6] placeholder:text-gray-500/30"
						required
					/>
				</div>
				<div class="grid gap-[2px]">
					<label for="subject">Subject</label>
					<input
						type="text"
						id="subject"
						name="subject"
						class="p-3 focus:outline-none focus:ring-[2px] text-black focus:ring-blue-100 rounded-[12px] border-[0.5px] border-[#D1D1D6] placeholder:text-gray-500/30"
						required
					/>
				</div>
				<div class="grid gap-[2px]">
					<label for="message">Message</label>
					<textarea
						id="message"
						name="message"
						rows="6"
						class="p-3 focus:outline-none focus:ring-[2px] text-black focus:ring-blue-100 rounded-[12px] border-[0.5px] border-[#D1D1D6] placeholder:text-gray-500/30"
						required
					></textarea>
				</div>
				<button
					type="submit"
					class="rounded-[12px] justify-self-end w-full md:w-[200px] mt-4 bg-white text-black bg-opacity-90 hover:bg-opacity-100 transition-color ease delay-100 py-3 px-5 text-[13px] font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
				>
					Get in Touch
				</button>
			</form>
			</div>
			
			
		</div>
	</div>
</template>

<script setup></script>

<style></style>
