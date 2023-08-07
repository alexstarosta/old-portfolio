import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyDSALeNTi2y5k4WXlbAnUX_9u-C29YgMZU",
    authDomain: "portfoliowebsite-e909a.firebaseapp.com",
    projectId: "portfoliowebsite-e909a",
    storageBucket: "portfoliowebsite-e909a.appspot.com",
    messagingSenderId: "877551073370",
    appId: "1:877551073370:web:51133d40171f40567b8063",
    measurementId: "G-EMK5C71BL0"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);