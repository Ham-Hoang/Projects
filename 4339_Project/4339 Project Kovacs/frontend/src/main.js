// Code is referenced from Professor Lindner's Module 10 video on VueJS components
// Importing all necessary modules in order for front end to work and display content
//importing createapp from vuejs library
import { createApp } from 'vue'
// Importing root component from app.vue
import App from './App.vue'
// Importing router instructions
import router from './router'
//importing bootstrap library and css modules
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
//Creates the vue instance
const app = createApp(App)
// router middleware instance
app.use(router)
// mounting to index.html file to connect app with html
app.mount('#app')
