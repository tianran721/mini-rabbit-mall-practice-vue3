import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import {resolve} from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),Components({ /* options */ }),],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  css:{
    preprocessorOptions:{
      less:{
        javascriptEnabled:true,
        modifyVars:{
          hack:`true;@import "${resolve('./src/styles/variables.less')}";
          @import "${resolve('./src/styles/mixins.less')}";
          `,
        }
      }
    }
  }
})
