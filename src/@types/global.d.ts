import Vue from 'vue';

declare global {
	const Vue: typeof Vue;
	interface Window {
		__WB_MANIFEST: string[]
	}
}
