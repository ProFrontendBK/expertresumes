<template>
	<div class="grid ">
		<div class="text-[36px] tracking-normal font-medium mx-auto  p-4 text-center">Expert Resumes Services</div>
		<div class="flex flex-wrap justify-center gap-8 p-4">
			<ServicesCard v-for="service in services"
				:img="service.image"
				:title="service.title"
				:content="service.content"
			/>
			
		</div>
	</div>
</template>

<script setup>
const services = ref([
	{
        image: "/img/resume.svg",
        title: "Custom Resume Creation",
        content: "Tailored resumes that highlight your unique skills and experiences, designed to catch the attention of recruiters and employers."
      },
      {
        image: "/img/custom-resume.svg",
        title: "Cover Letter Writing",
        content: "Craft compelling cover letters that highlight your qualifications and enthusiasm. Our service ensures your cover letter makes a strong first impression."
      },
      {
        image: "/img/linkedin.svg",
        title: "LinkedIn Profile Optimization",
        content: "Enhance your LinkedIn profile to attract recruiters and employers. We optimize your profile to showcase your skills, experience, and professional brand."
      },
      {
        image: "/img/coaching.svg",
        title: "Career Coaching and Consultation",
        content: "Get personalized career advice and consultation from experienced coaches. We help you navigate your career path and achieve your professional goals."
      },
      {
        image: "/img/interview.svg",
        title: "Interview Preparation",
        content: "Ace your interviews with our comprehensive preparation services. We provide mock interviews, feedback, and strategies to help you succeed."
      },
      {
        image: "/img/portfolio-development.svg",
        title: "Portfolio Development",
        content: "Build a professional portfolio that showcases your work and skills. Our service helps you create an impressive portfolio to present to potential employers."
      },
      {
        image: "/img/job-app.svg",
        title: "Job Application Assistance",
        content: "Receive support in the job application process. We help you find suitable job opportunities and guide you through the application process."
      },
      {
        image: "/img/workshop.svg",
        title: "Workshops and Webinars",
        content: "Participate in our workshops and webinars to gain new skills and knowledge. Our sessions cover a wide range of topics relevant to your career."
      },
      {
        image: "/img/branding.svg",
        title: "Personal Branding Services",
        content: "Develop a strong personal brand that sets you apart in the job market. We help you create a consistent and professional brand across all platforms."
      },
      {
        image: "/img/document-review.svg",
        title: "Professional Document Review",
        content: "Get your professional documents reviewed by our experts. We ensure your resumes, cover letters, and portfolios are polished and ready to impress."
      }
])

</script>

<style>
.nav-item {
	@apply bg-[#f8fafc] p-4 hover:bg-[#fde68a] rounded;
}
</style>
