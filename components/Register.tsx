import React, { useState } from "react";
import loginBg from "../Images/login.png";
import { TextInput, Text, Button, Paper, FileInput } from "@mantine/core";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import { useRouter } from "next/router";
import { auth, storage } from "../firebase/firebase";

import {
	createUserWithEmailAndPassword,
	updateProfile,
	onAuthStateChanged,
} from "firebase/auth";
import Image from "next/image";

const Register = () => {
	const router = useRouter();
	const [name, setName] = useState("");
	const [mobile, setMobile] = useState("");
	const [image, setImage] = useState(null);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	console.log("auth", auth.currentUser);

	const handleImageChange = (e) => {
		if (e.target && e.target.files) {
			setImage(e.target.files[0]);
		}
	};

	const register = async () => {
		try {
			if (!image) {
				throw new Error("Please select an image");
			}

			// const storageRef = ref(storage, `images/${Date.now()}`);
			const storageRef = ref(storage, `images/${Date.now()}${image.name}`);

			const uploadTask = uploadBytesResumable(storageRef, image);

			const snapshot = await uploadTask;
			const downloadURL = await getDownloadURL(snapshot.ref);

			const currentUser = await createUserWithEmailAndPassword(
				auth,
				email,
				password,
			);
			await updateProfile(currentUser.user, {
				displayName: name,
				photoURL: downloadURL,
			});
			alert("Success");
		} catch (err) {
			console.log(err);
		}
	};

	const goToLoginPage = () => {
		router.push("/register/login");
	};

	console.log("img", image);

	return (
		<div className='grid md:grid-cols-2 max-w-[90%] mx-auto items-center'>
			<Image src={loginBg} alt='login' />
			<div className='px-8'>
				<div className='pb-4'>
					<Text className='text-[30px] font-semibold'>Sign up</Text>
					<Text>please enter your details</Text>
				</div>
				<div className='flex flex-col gap-4'>
					<TextInput
						value={name}
						onChange={(e) => setName(e.target.value)}
						type='text'
						placeholder='Name'
					/>
					<TextInput
						type='number'
						placeholder='Mobile'
						value={mobile}
						onChange={(e) => setMobile(e.target.value)}
					/>
					<input
						type='file'
						placeholder='Upload profile photo'
						name='image'
						accept='image/*'
						id='file_input'
						onChange={(e) => {
							handleImageChange(e);
						}}
					/>
					<TextInput
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						type='email'
						placeholder='Email'
					/>
					<TextInput
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						type='password'
						placeholder='Password'
					/>
					<Button
						className='bg-blue-800 mt-2'
						onClick={register}
						disabled={!name || !email || !password}>
						Register
					</Button>
					<Text>
						Already have an account?{" "}
						<b className='cursor-pointer' onClick={goToLoginPage}>
							Sign in
						</b>
					</Text>
				</div>
			</div>
		</div>
	);
};

export default Register;
