// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyCZloAWi6LVRdYmWpZIJgEx_TSlJTCrisE",
	authDomain: "brainboost-2144a.firebaseapp.com",
	projectId: "brainboost-2144a",
	storageBucket: "brainboost-2144a.appspot.com",
	messagingSenderId: "29901116224",
	appId: "1:29901116224:web:9301c79f77177fc61260a5",
	measurementId: "G-QGERVRQV2E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
