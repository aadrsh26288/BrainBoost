import React, { useState } from "react";
import { Paper, Avatar } from "@mantine/core";
import { AiFillHome, AiFillSetting } from "react-icons/ai";
import { IoMdLogOut } from "react-icons/io";
import { ImBooks } from "react-icons/im";
import { FaUserCog } from "react-icons/fa";
import { MdFeaturedPlayList } from "react-icons/md";

import { auth } from "@/firebase/firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/router";
import Main from "./Main";
import Navbar from "./Navbar";

interface NavbarProps {
	open: boolean;
}
const Sidebar = () => {
	const router = useRouter();
	const [active, setActive] = useState("Home");
	const [open, setOpen] = useState(true);

	const handleOptionClick = (option: string) => {
		setActive(option);
	};

	const logout = (auth: any) => {
		signOut(auth);
		router.push("/register/login");
	};

	return (
		<>
			<div className='flex w-full h-full'>
				{open === true ? (
					<div className='bg-[#DDDDDD] border-2 w-[245px]  p-2 flex flex-col '>
						<div className='gap-3 flex items-center px-2 py-1 bg-[#407DD9]'>
							<img
								className='rounded-full w-[35px] h-[35px]'
								src={
									// "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
									auth.currentUser?.photoURL
								}
							/>
							<div>
								<p className='text-[16px] font-semibold  text-gray-100'>
									{auth.currentUser?.displayName}
								</p>
								<p className='text-[9px] -mt-1 text-gray-100 '>
									{auth.currentUser?.email}
								</p>
							</div>
						</div>
						<div className=' text-md mt-5 flex flex-col gap-2'>
							<div
								onClick={() => handleOptionClick("Home")}
								className={
									active === "Home"
										? `flex items-center p-2 rounded-lg gap-3 bg-[#407DD9] hover:text-white duration-300  text-white cursor-pointer`
										: `flex items-center p-2 rounded-lg gap-3 hover:bg-[#407DD9] hover:text-white duration-300 cursor-pointer`
								}>
								<AiFillHome className=' ' />
								<p className=' font-medium'>Home</p>
							</div>

							<div
								onClick={() => handleOptionClick("Courses")}
								className={
									active === "Courses"
										? `flex items-center p-2 rounded-lg gap-3 bg-[#407DD9] text-white hover:text-white duration-300 cursor-pointer`
										: `flex items-center p-2 rounded-lg gap-3 hover:bg-[#407DD9] hover:text-white duration-300 cursor-pointer`
								}>
								<ImBooks className=' ' />
								<p className='font-medium'>Course</p>
							</div>

							<div
								onClick={() => handleOptionClick("Features")}
								className={
									active === "Features"
										? `flex items-center p-2 rounded-lg gap-3 bg-[#407DD9] text-white hover:text-white duration-300 cursor-pointer`
										: `flex items-center p-2 rounded-lg gap-3 hover:bg-[#407DD9] hover:text-white duration-300 cursor-pointer`
								}>
								<MdFeaturedPlayList className=' ' />
								<p className=' font-medium'>Features</p>
							</div>

							<div className='flex items-center p-2 rounded-lg gap-3 hover:bg-[#407DD9] hover:text-white duration-300 cursor-pointer'>
								<AiFillSetting className=' ' />
								<p className=' font-medium'>Settings</p>
							</div>

							<div className='flex items-center p-2 rounded-lg gap-3 hover:bg-[#407DD9] hover:text-white duration-300 cursor-pointer'>
								<IoMdLogOut className=' ' />
								<p
									className='font-medium'
									onClick={() => {
										logout(auth);
									}}>
									Logout
								</p>
							</div>
						</div>
					</div>
				) : (
					""
				)}

				<div className='w-full'>
					<Navbar setOpen={setOpen} open={open} />
					<Main active={active} />
				</div>
			</div>
		</>
	);
};

export default Sidebar;
