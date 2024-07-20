<template>
	<div class="flex flex-row w-full bg-green-300 h-full">
		<form class="w-[60%] p-4 flex flex-col gap-4 ">
			<div class="flex flex-col">
				<label for="name">Name</label>
				<input
					type="text"
					id="name"
					name="name"
					class="px-4 py-2 rounded-sm focus:outline-none focus:ring-[2px] focus:ring-blue-100 border-[0.5px] border-gray-500"
					required
				/>
			</div>
            <div class="flex flex-col">
				<label for="mobile">Mobile Number</label>
				<input
					type="text"
					id="mobile"
					class="px-4 py-2 rounded-sm focus:outline-none focus:ring-[2px] focus:ring-blue-100 border-[0.5px] border-gray-500"
					required
				/>
			</div>
            <div class="flex flex-col">
				<label for="linkedin">Linkedin</label>
				<input
					type="text"
					id="linkedin"
					class="px-4 py-2 rounded-sm focus:outline-none focus:ring-[2px] focus:ring-blue-100 border-[0.5px] border-gray-500"
					required
				/>
			</div>
            <div class="flex flex-col">
				<label for="gmail">Gmail</label>
				<input
					type="text"
					id="gmail"
					class="px-4 py-2 rounded-sm focus:outline-none focus:ring-[2px] focus:ring-blue-100 border-[0.5px] border-gray-500"
					required
				/>
			</div>
            <div class="flex flex-col">
				<label for="github">Github</label>
				<input
					type="text"
					id="github"
					class="px-4 py-2 rounded-sm focus:outline-none focus:ring-[2px] focus:ring-blue-100 border-[0.5px] border-gray-500"
					required
				/>
			</div>
            <div class="flex flex-col">
				<label for="portfolio">Portfolio</label>
				<input
					type="text"
					id="portfolio"
					class="px-4 py-2 rounded-sm focus:outline-none focus:ring-[2px] focus:ring-blue-100 border-[0.5px] border-gray-500"
					required
				/>
			</div>
            

		</form>
		<div class="bg-red-300 h-full w-[40%]">
			<!-- <iframe src="" frameborder="0"></iframe> -->
			PDFs
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style></style>
