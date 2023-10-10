import { defineConfig } from '@modern-js/builder-cli';

// https://modernjs.dev/builder/en/api/index.html
export default defineConfig<'rspack'>({
  html: {
    template: './public/index.html',
    disableHtmlFolder: true,
  },
  output: {
    distPath: {
      html: '',
    },
  },
});
