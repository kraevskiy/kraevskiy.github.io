import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion.ts';

export const ServiceCard: React.FC<{
	index: number;
	title: string;
	icon: string;
}> = ({index, title, icon}) => (
	<Tilt className="xs:w-[250px] w-full transition-all">
		<motion.div
			variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
			className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
		>
			<div
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-expect-error
				options={{
					max: 45,
					scale: 1,
					speed: 450,
				}}
				className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
			>
				<img
					src={icon}
					alt="web-development"
					className="w-16 h-16 object-contain"
				/>

				<h3 className="text-white text-[20px] font-bold text-center">
					{title}
				</h3>
			</div>
		</motion.div>
	</Tilt>
);
