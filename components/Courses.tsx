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
		<>
			<h1 className='text-3xl text-center font-bold'>Courses</h1>
			<div className='grid grid-cols-4 gap-7  px-4 mt-5 mb-10 '>
				{courses?.map((course) => {
					return (
						<div
							onClick={() => handleItemClick(course.id)}
							className=' cursor-pointer bg-[#F1F1F1] h-[320px] shadow-xl  rounded-[20px] overflow-hidden'>
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
						<div className='flex gap-5'>
							<img src={selectedItem.imgUrl} className='object-cover' />
							<div className='w-full'>
								<h2 className='text-xl font-semibold'>{selectedItem.name}</h2>
								<div className='flex text-[16px] justify-between mt-3'>
									<p className='flex gap-2 items-center'>
										<FaUsers />
										{selectedItem.enrollments}
									</p>
									<p className='flex gap-2 items-center'>
										<HiOutlineClock />
										{selectedItem.duration}
									</p>
								</div>
								<p className='mt-3'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
									saepe voluptatibus possimus facilis distinctio earum unde,
									corrupti optio praesentium magnam dolorum deleniti. Laudantium
									odit nihil accusamus aut eos, ea illo? Quos aspernatur
									tempore, similique ducimus eaque a, voluptatum repellat eius
									sunt esse cum. Tempore, officia labore quos ratione ullam
									quidem veniam fugiat ex, nam totam laboriosam velit nesciunt
									fugit consectetur! Praesentium, sunt voluptate cupiditate
									dignissimos excepturi harum reiciendis porro esse explicabo
									minima? Magnam dolores enim rerum quasi possimus eaque
									sapiente? Corrupti deleniti fugiat iure temporibus vero unde
									esse dolores aperiam. Quis, quas nulla beatae adipisci
									temporibus hic exercitationem repellendus blanditiis nihil
									amet placeat minus culpa distinctio eius iusto eveniet iste
									sit pariatur magnam rem ex, illum dolores! Perferendis, minima
									sint. Distinctio corporis sunt tempora, iure hic dolor sint
									eveniet magnam ipsa illo? Libero blanditiis cupiditate dolorum
									incidunt maiores impedit totam ipsum laudantium reiciendis
									obcaecati. Ab pariatur ipsum est adipisci molestias. Eius
									laborum, numquam maiores, id porro minus blanditiis dolore
									eaque consequatur officiis odio expedita reiciendis
									reprehenderit ea voluptatibus laudantium distinctio quidem
									libero consectetur nostrum incidunt sunt. Voluptates ullam quo
									eaque?
								</p>
							</div>
						</div>
					)}
				</Modal>
			</div>
		</>
	);
};

export default Courses;
