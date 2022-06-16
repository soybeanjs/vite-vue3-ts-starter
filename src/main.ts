import { createApp } from 'vue';
import { setupAssets } from './plugins';
import { setupStore } from './stores';
import { setupRouter } from './router';
import App from './App.vue';

async function setupApp() {
  // import assets: js、css
  setupAssets();

  // create app instance
  const app = createApp(App);

  // install store plugin: pinia
  setupStore(app);

  // vue router
  await setupRouter(app);

  // mount app on the dom
  app.mount('#app');
}

setupApp();
