import React, { useEffect, useState } from "react";
import Sidebar from "@/components/Sidebar";
import { useRouter } from "next/router";
import { auth } from "@/firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

const Index = () => {
	const router = useRouter();
	const [isLoggedIn, setIsLoggedIn] = useState(false); // Local state to track login status

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				setIsLoggedIn(true);
			} else {
				// No user is signed in
				setIsLoggedIn(false); // Update the login status
				router.push("/register/login");
			}
		});

		return () => {
			unsubscribe();
		};
	}, []);

	return (
		<div>
			{isLoggedIn && <Sidebar />}{" "}
			{/* Render the Sidebar component only if isLoggedIn is true */}
		</div>
	);
};

export default Index;
