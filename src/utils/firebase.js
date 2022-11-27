import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBxAI9UxNDzV3ZAGxJx8V2Utvk-Wcz6HXk",
  authDomain: "restaurantes-6a038.firebaseapp.com",
  projectId: "restaurantes-6a038",
  storageBucket: "restaurantes-6a038.appspot.com",
  messagingSenderId: "19627006414",
  appId: "1:19627006414:web:48c31d3a1a5f73b6fe339f"
};

export const initFirebase = initializeApp(firebaseConfig);