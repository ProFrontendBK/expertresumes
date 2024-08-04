import { defineStore } from "pinia";

export const useResumeStore = defineStore("resume", {
	state: () => ({
		runtimeConfig: useRuntimeConfig(),
		count: 0,
		pdfID: "",
		pdf: '',
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
				const response = await fetch(`${this.runtimeConfig.public.apiBase}/api/resume`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(payload),
				});
				const result = await response.json();
				console.log("Success:", result);
				this.pdfID = result._id;
				console.log("PDF ID: ", this.pdfID);
			} catch (error) {
				console.error("Error:", error);
			}
		},
		async getResumeById() {
			if (!this.pdfID) {
				console.error("pdfId is undefined");
				return;
			}
			try {
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
				console.log("PDF Data: ", this.pdf);
			} catch (error) {
				console.error("Error fetching PDF:", error);
			}
		},
	},
});
