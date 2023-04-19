import React from "react";
import { AiOutlineCloseCircle, AiOutlineBell } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiSettings } from "react-icons/fi";
interface NavbarProps {
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
	open: boolean;
}
const Navbar = ({ setOpen, open }: NavbarProps) => {
	return (
		<div className='text-gray-500 flex justify-between text-xl p-4 w-full'>
			{open === true ? (
				<AiOutlineCloseCircle
					className='cursor-pointer'
					onClick={() => {
						setOpen(false);
					}}
				/>
			) : (
				<GiHamburgerMenu
					className='cursor-pointer'
					onClick={() => {
						setOpen(true);
					}}
				/>
			)}

			<div className='flex gap-5'>
				<FiSettings />
				<AiOutlineBell />
			</div>
		</div>
	);
};

export default Navbar;
