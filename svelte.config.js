import adapter from '@sveltejs/adapter-auto';
import { sveltePreprocess } from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [sveltePreprocess({scss: true})],
	kit: {
		adapter: adapter(),

		alias: {
			$lib: "src/lib",
			$style: "src/lib/sass"
		},
	}
};

export default config;
