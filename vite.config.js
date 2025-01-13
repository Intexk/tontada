import { sveltekit } from '@sveltejs/kit/vite';
import legacy from '@vitejs/plugin-legacy'
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit(),legacy({
		targets: ['defaults', 'ie >= 11', 'edge >= 0'],
		polyfills: true
	})]
});
