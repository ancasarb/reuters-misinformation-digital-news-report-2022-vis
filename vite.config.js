import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	 ssr: {
	 	external: ['lodash']
	 }
};

export default config;
