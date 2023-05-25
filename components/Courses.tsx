import React from "react";
import { courses } from "../data/CoursesData";
import { HiOutlineClock } from "react-icons/hi";
import { FaUsers } from "react-icons/fa";
import { ImageCard } from "./Profile";
import Modalshow from "./Modal";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Group, Button } from "@mantine/core";

const Courses = () => {
	const [opened, { open, close }] = useDisclosure(false);
	const [selectedItemId, setSelectedItemId] = React.useState(null);

	const handleItemClick = (itemId) => {
		setSelectedItemId(itemId);
		open();
	};

	const selectedItem = courses.find((course) => course.id === selectedItemId);

	return (
		<div className='grid grid-cols-4 gap-7  px-4 mt-5 mb-10 '>
			{/* <Modalshow /> */}

			{courses?.map((course) => {
				return (
					<div
						onClick={() => handleItemClick(course.id)}
						className='bg-[#F1F1F1] h-[320px] shadow-xl  rounded-[20px] overflow-hidden'>
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

			<Modal
				className='bg-gray-500'
				opened={opened}
				onClose={close}
				size={"100%"}
				withCloseButton={false}>
				{selectedItem && (
					<div>
						<h2>{selectedItem.name}</h2>
						{/* Render other details of the selected item */}
						<img src={selectedItem.imgUrl} />
					</div>
				)}
			</Modal>
		</div>
	);
};

export default Courses;
