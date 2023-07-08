import React, { useState } from "react";
import loginBg from "../../Images/login.png";
import { TextInput, Text, Button, Paper } from "@mantine/core";
import { auth } from "@/firebase/firebase";
import Image from "next/image";
import { useRouter } from "next/router";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
	onAuthStateChanged,
} from "firebase/auth";
const Login = () => {
	const router = useRouter();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const RegisterPage = () => {
		router.push("/register");
	};

	const login = async () => {
		try {
			await signInWithEmailAndPassword(auth, email, password);
			// alert("login sucessfull");
			router.push("/");
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className='grid md:grid-cols-2 max-w-[90%] mx-auto items-center'>
			<Image src={loginBg} alt='login' />
			<div className='px-8'>
				<div className='pb-4'>
					<Text className='text-[30px] font-semibold'>Sign in</Text>
					<Text>Welcome back! Please enter your details</Text>
				</div>
				<div className='flex flex-col gap-4 '>
					<TextInput
						type='email'
						placeholder='Email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<TextInput
						type='password'
						placeholder='Password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<Button className='bg-blue-800 mt-2' onClick={login}>
						Login
					</Button>
					<Text>
						Need an account?{" "}
						<b
							className='cursor-pointer'
							onClick={() => {
								RegisterPage();
							}}>
							Create an account
						</b>
					</Text>
					{/* <Text>Name:{auth.currentUser?.displayName}</Text> */}
				</div>
			</div>
		</div>
	);
};

export default Login;
