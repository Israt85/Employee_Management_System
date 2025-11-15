import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyACPKXXv6LIoQTYgLFvSamw7pir6tL9Kss",
  authDomain: "employee-management-proj-19ed8.firebaseapp.com",
  projectId: "employee-management-proj-19ed8",
  storageBucket: "employee-management-proj-19ed8.firebasestorage.app",
  messagingSenderId: "365264170874",
  appId: "1:365264170874:web:ff7eeaeb6ae22f189d30c3",
  measurementId: "G-09XT5GT8N7"
};


 const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
export default app;