import React from "react";
import { courses } from "../data/CoursesData";
import { HiOutlineClock } from "react-icons/hi";
import { FaUsers } from "react-icons/fa";
import { ImageCard } from "./Profile";
const Courses = () => {
	// const [cousesData,setCoursesData]=useState(courses)
	return (
		<div className='grid grid-cols-4 gap-7  px-4 mt-5 mb-10 '>
			{courses?.map((course) => {
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
	);
};

export default Courses;
