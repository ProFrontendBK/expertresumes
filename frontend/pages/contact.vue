<template>
	<div class="grid mx-auto lg:w-[50%] gap-4">
		<div class="grid mx-auto text-lg font-semibold border-b-[1px]">Contact Us</div>
		<form class="grid gap-2">
			<div class="grid gap-[2px]">
				<label for="name">Name</label>
				<input type="text" id="name" name="name" class="px-4 py-2 rounded-sm focus:outline-none focus:ring-[2px] focus:ring-blue-100 border-[0.5px] border-gray-500" required />
			</div>
			<div class="grid gap-[2px]">
				<label for="email">Email</label>
				<input type="email" id="email" name="email" class="px-4 py-2 rounded-sm focus:outline-none focus:ring-[2px] focus:ring-blue-100 border-[0.5px] border-gray-500" required />
			</div>
			<div class="grid gap-[2px]">
				<label for="subject">Subject</label>
				<input type="text" id="subject" name="subject" class="px-4 py-2 rounded-sm focus:outline-none focus:ring-[2px] focus:ring-blue-100 border-[0.5px] border-gray-500" required />
			</div>
			<div class="grid gap-[2px]">
				<label for="message">Message</label>
				<textarea id="message" name="message" rows="6" class="px-4 py-2 rounded-sm focus:outline-none focus:ring-[2px] focus:ring-blue-100 border-[0.5px] border-gray-500" required></textarea>
			</div>
            <button type="submit" class="p-4 bg-blue-100 hover:bg-blue-200 rounded-sm">Send Message</button>
		</form>
	</div>
</template>

<script setup></script>

<style></style>
