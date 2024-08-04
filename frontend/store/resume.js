import { defineStore } from "pinia";

export const useResumeStore = defineStore("resume", {
	state: () => ({
		runtimeConfig: useRuntimeConfig(),
		count: 0,
		pdfID: "",
		pdf: "",
		showLoadingAnimation: false,
	}),
	getters: {
		doubleCount: (state) => state.count * 2,
		pdfDataUrl: (state) => {
			if (state.pdf && state.pdf.data) {
				return `data:application/pdf;base64,${state.pdf.data}`;
			}
			return "";
		},
	},
	actions: {
		increment() {
			this.count++;
		},
		loadPdfFromLocalStorage() {
			const pdfData = localStorage.getItem("pdfData");
			if (pdfData) {
				this.pdf = JSON.parse(pdfData);
			}
		},
		// ${this.runtimeConfig.public.apiBase}

		async sendDetails(payload) {
			try {
				const response = await fetch(
					`${this.runtimeConfig.public.apiBase}/api/resume`,
					{
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify(payload),
					}
				);
				const result = await response.json();
				
				this.pdfID = result._id;
				
			} catch (error) {
				console.error("Error:", error);
			}
		},
		async getResumeById() {
			if(this.pdfID === ""){
				console.error("PDF ID not available")
				return;
			}
			try {
				this.showLoadingAnimation = true
				const response = await fetch(
					`${this.runtimeConfig.public.apiBase}/api/resume/${this.pdfID}/pdf`,
					{
						method: "GET",
					}
				);
				const result = await response.json();
				this.pdf = {
					data: result.pdfBase64,
					fileName: result.fileName,
				};
			
				this.showLoadingAnimation = false;
				
				
			} catch (error) {
				console.error("Error fetching PDF:", error);
			}
		},
	},
});
