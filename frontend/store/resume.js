import { defineStore } from "pinia";

export const useResumeStore = defineStore("resume", {
	state: () => ({
		runtimeConfig: useRuntimeConfig(),
		count: 0,
	}),
	getters: {
		doubleCount: (state) => state.count * 2,
	},
	actions: {
		increment() {
			this.count++;
		},
		sendDetails(payload) {
			fetch(`${this.runtimeConfig.public.apiBase}/resume`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(payload),
			})
				.then((response) => response.json())
				.then((result) => {
					console.log("Success:", result);
				});
		},
		getResumeById(payload) {
			fetch("");
		},
	},
});
