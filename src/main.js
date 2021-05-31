import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyDckiW13m3hW6mr8LC76OBUGGFqncxw9wM",
    authDomain: "final-project-8f83a.firebaseapp.com",
    projectId: "final-project-8f83a",
    storageBucket: "final-project-8f83a.appspot.com",
    messagingSenderId: "1039249218818",
    appId: "1:1039249218818:web:227bb6a169ec8615f4361b",
    measurementId: "G-KWG0VCF5JM",
};
firebase.initializeApp(firebaseConfig);
createApp(App).use(store).use(router).mount("#app");