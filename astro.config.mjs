// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
// 组织主页站 <org>.github.io,走根路径 /(不是项目页的 /repo/)
export default defineConfig({
  site: 'https://kite-hq.github.io',
  base: '/',
});
