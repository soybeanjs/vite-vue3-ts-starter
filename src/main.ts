import { createApp } from 'vue';
import { setupRouter } from './router';
import { setupStore } from './stores';
import App from './App.vue';

async function setupApp() {
  // create app instance
  const app = createApp(App);

  // install store plugin: pinia
  setupStore(app);

  // install vue-router
  await setupRouter(app);

  // mount app on the dom
  app.mount('#app');
}

setupApp();
