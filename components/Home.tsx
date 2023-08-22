import React, { useState } from "react";
import { CiBookmark } from "react-icons/ci";
import { BiBookAlt } from "react-icons/bi";
import { courses } from "../data/CoursesData";
import { HiOutlineClock } from "react-icons/hi";
import { FaUsers } from "react-icons/fa";
import Courses from "./Courses";
const Home = () => {
	const [filteredCourse, setFilteredCourse] = useState(courses);
	const [active, setActive] = useState("");
	function courseFilter(course: string) {
		const f = courses.filter((c) => {
			return c.category === course;
		});
		setFilteredCourse(f);

		// 		if(course==='New'){
		// setActive(true);
		// 		}if
		setActive(course);
	}
	return (
		<div className='px-5 py-2'>
			<p className='flex gap-1 items-center'>
				<CiBookmark />
				Courses
			</p>
			<div className='grid grid-cols-5 gap-4 py-3 '>
				<div
					onClick={() => {
						courseFilter("New");
					}}
					className={
						active === "New"
							? "flex items-center gap-3 border-2 bg-[#F6C648] p-1 rounded-xl cursor-pointer"
							: "flex items-center gap-3 border-2 border-[#F6C648] p-1 rounded-xl cursor-pointer "
					}>
					<div className='p-3 rounded-full bg-[#F6C648] '>
						<BiBookAlt className='text-white text-lg  ' />
					</div>
					<p className='text-[14px] hidden sm:inline'>New</p>
				</div>

				<div
					onClick={() => {
						courseFilter("Free");
					}}
					className={
						active === "Free"
							? "flex items-center gap-3 text-white bg-[#15BE4F] p-1 rounded-xl cursor-pointer"
							: "flex items-center gap-3 border-2 border-[#15BE4F] p-1 rounded-xl cursor-pointer"
					}>
					<div className='p-3 rounded-full bg-[#15BE4F] '>
						<BiBookAlt className='text-white text-lg  ' />
					</div>
					<p className='text-[14px] hidden sm:inline'>Free</p>
				</div>

				<div
					onClick={() => {
						courseFilter("Popular");
					}}
					className={
						active === "Popular"
							? "flex items-center gap-3 border-2 bg-[#007DD8] p-1 rounded-xl cursor-pointer"
							: "flex items-center gap-3 border-2 border-[#007DD8] p-1 rounded-xl cursor-pointer"
					}>
					<div className='p-3 rounded-full bg-[#007DD8] cursor-pointer '>
						<BiBookAlt className='text-white text-lg cursor-pointer ' />
					</div>
					<p className='text-[14px] hidden sm:inline'>Popular</p>
				</div>

				<div
					onClick={() => {
						courseFilter("Paid");
					}}
					className={
						active === "Paid"
							? "flex items-center gap-3 border-2 bg-[#C565C7] p-1 rounded-xl cursor-pointer"
							: "flex items-center gap-3 border-2 border-[#C565C7] p-1 rounded-xl cursor-pointer"
					}>
					<div className='p-3 rounded-full bg-[#C565C7] '>
						<BiBookAlt className='text-white text-lg  ' />
					</div>
					<p className='text-[14px] hidden sm:inline'>Paid</p>
				</div>

				<div
					onClick={() => {
						courseFilter("Upcoming");
					}}
					className={
						active === "Upcoming"
							? "flex items-center gap-3 border-2 bg-[#EC7D2D] p-1 rounded-xl cursor-pointer"
							: "flex items-center gap-3 border-2 border-[#EC7D2D] p-1 rounded-xl cursor-pointer"
					}>
					<div className='p-3 rounded-full bg-[#EC7D2D]  '>
						<BiBookAlt className='text-white text-lg  ' />
					</div>
					<p className='text-[14px] hidden sm:inline'>Upcoming</p>
				</div>
			</div>

			{/* coures */}
			<div className='grid md:grid-cols-4 gap-7 mt-5 mb-10 '>
				{filteredCourse?.map((course) => {
					return (
						<div className='bg-[#F1F1F1] h-[320px] shadow-xl  rounded-[20px] overflow-hidden'>
							<div>
								<img
									className='h-[146px] object-cover w-full'
									src={course.imgUrl}
								/>
							</div>
							<div className='p-2'>
								<div className='flex text-[12px] justify-between'>
									<p className='flex gap-2 items-center'>
										<FaUsers />
										{course.enrollments}
									</p>
									<p className='flex gap-2 items-center'>
										<HiOutlineClock />
										{course.duration}
									</p>
								</div>
								<p className='text-md py-2 text-[#515151] font-semibold'>
									{course.name}
								</p>
								<div className='flex gap-1 mt-4 items-center'>
									<div>
										<img
											className='rounded-full w-[25px] h-[25px]'
											src={
												"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
											}
										/>
									</div>
									<div>
										<p className='text-[10px]'>{course.creatorName}</p>
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Home;
