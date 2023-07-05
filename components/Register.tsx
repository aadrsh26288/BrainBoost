import React, { useState } from "react";
import loginBg from "../Images/login.png";
import { TextInput, Text, Button, Paper } from "@mantine/core";
import { useRouter } from "next/router";
import { auth } from "../firebase/firebase";
import {
	createUserWithEmailAndPassword,
	updateProfile,
	onAuthStateChanged,
} from "firebase/auth";
import Image from "next/image";

const Register = () => {
	const router = useRouter();
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [Password, setPassword] = useState("");
	// console.log(name, email, Password);
	console.log(auth.currentUser);

	const register = async () => {
		try {
			const currentUser = await createUserWithEmailAndPassword(
				auth,
				email,
				Password,
			);
			updateProfile(currentUser.user, { displayName: name });
			alert("Success");
		} catch (err) {
			console.log(err);
		}
	};
	const Loginpage = async () => {
		router.push("/register/login");
	};

	return (
		<div className=' grid md:grid-cols-2 max-w-[90%] mx-auto items-center'>
			<Image src={loginBg} alt='login' />
			<div className='px-8'>
				<div className='pb-4'>
					<Text className='text-[30px] font-semibold'>Sign up</Text>
					<Text>please enter your details</Text>
				</div>
				<div className='flex flex-col gap-4 '>
					<TextInput
						value={name}
						onChange={(e) => setName(e.target.value)}
						type='text'
						placeholder='Name'
					/>
					<TextInput
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						type='email'
						placeholder='Email'
					/>
					<TextInput
						value={Password}
						onChange={(e) => setPassword(e.target.value)}
						type='password'
						placeholder='Password'
					/>
					<Button
						className='bg-blue-800 mt-2'
						onClick={() => {
							register();
						}}>
						Login
					</Button>
					<Text>
						Already have an account?{" "}
						<b
							className=' cursor-pointer'
							onClick={() => {
								Loginpage();
							}}>
							sign in
						</b>
					</Text>
				</div>
			</div>
		</div>
	);
};

export default Register;
