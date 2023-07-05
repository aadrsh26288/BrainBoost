import React from "react";
import concept from "../Images/image1.png";
import c2 from "../Images/image2.png";
import c3 from "../Images/image4.png";
import Image from "next/image";

const Features = () => {
	console.log("Features", concept);
	return (
		<div className=''>
			<h2 className='text-2xl text-center font-bold'>Features</h2>
			<div className='p-3 flex items-start gap-3 '>
				{" "}
				<div className=' bg-transparent py-12 px-[24px]'>
					<p className='font-semibold text-xl'>24/7 active live support</p>
					<p className='mt-3'>
						Pulvinar nisl ipsum morbi diam scelerisque lorem ipsum dolor sit
						amet, consectetur adipiscing elit. Pulvinar nisl ipsum morbi diam
						scelerisque pulvinar elementum, viverra.
					</p>
				</div>
				<Image alt='Image 1' height={400} width={400} src={concept} />{" "}
			</div>

			<div className='p-3 flex items-start gap-3 '>
				<Image alt='Image 1' height={370} width={370} src={c2} />{" "}
				<div className=' bg-transparent py-12 px-[24px]'>
					<p className='font-semibold text-xl'>Advance Tech</p>
					<p className='mt-3'>
						Pulvinar nisl ipsum morbi diam scelerisque lorem ipsum dolor sit
						amet, consectetur adipiscing elit. Pulvinar nisl ipsum morbi diam
						scelerisque pulvinar elementum, viverra.
					</p>
				</div>
			</div>

			<div className='p-3 flex items-start gap-3 '>
				<div className=' bg-transparent py-12 px-[24px]'>
					<p className='font-semibold text-xl'>Self learning support</p>
					<p className='mt-3'>
						Pulvinar nisl ipsum morbi diam scelerisque lorem ipsum dolor sit
						amet, consectetur adipiscing elit. Pulvinar nisl ipsum morbi diam
						scelerisque pulvinar elementum, viverra.
					</p>
				</div>
				<Image alt='Image 1' height={370} width={370} src={c3} />{" "}
			</div>
		</div>
	);
};

export default Features;
