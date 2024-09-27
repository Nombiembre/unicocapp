import { initializeApp } from "firebase/app";

export const firebaseConfig = {
  apiKey: "AIzaSyBY_cvUwP5tl0gSZWTIAY88z4JsHfWyHfQ",
  authDomain: "unicocapp.firebaseapp.com",
  projectId: "unicocapp",
  storageBucket: "unicocapp.appspot.com",
  messagingSenderId: "69557624286",
  appId: "1:69557624286:web:b6e7969f2f955c3b41514f",
};

const app = initializeApp(firebaseConfig);
export default app;
