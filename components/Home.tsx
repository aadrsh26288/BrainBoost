import React from "react";
import { CiBookmark } from "react-icons/ci";
import { BiBookAlt } from "react-icons/bi";

const Home = () => {
	return (
		<div className='px-5 py-2'>
			<p className='flex gap-1 items-center'>
				<CiBookmark />
				Courses
			</p>
			<div className='grid grid-cols-5 gap-4 py-3 '>
				<div className='flex items-center gap-3 border-2 border-[#F6C648] p-1 rounded-xl'>
					<div className='p-3 rounded-full bg-yellow-500 '>
						<BiBookAlt className='text-white text-lg  ' />
					</div>
					<p className='text-[14px]'>New</p>
				</div>

				<div className='flex items-center gap-3 border-2 border-[#15BE4F] p-1 rounded-xl'>
					<div className='p-3 rounded-full bg-[#15BE4F] '>
						<BiBookAlt className='text-white text-lg  ' />
					</div>
					<p className='text-[14px]'>Free</p>
				</div>

				<div className='flex items-center gap-3 border-2 border-[#007DD8] p-1 rounded-xl'>
					<div className='p-3 rounded-full bg-[#007DD8] '>
						<BiBookAlt className='text-white text-lg  ' />
					</div>
					<p className='text-[14px]'>Popular</p>
				</div>

				<div className='flex items-center gap-3 border-2 border-[#C565C7] p-1 rounded-xl'>
					<div className='p-3 rounded-full bg-[#C565C7] '>
						<BiBookAlt className='text-white text-lg  ' />
					</div>
					<p className='text-[14px]'>Paid</p>
				</div>

				<div className='flex items-center gap-3 border-2 border-[#EC7D2D] p-1 rounded-xl'>
					<div className='p-3 rounded-full bg-[#EC7D2D] '>
						<BiBookAlt className='text-white text-lg  ' />
					</div>
					<p className='text-[14px]'>Upcoming</p>
				</div>
			</div>
		</div>
	);
};

export default Home;
