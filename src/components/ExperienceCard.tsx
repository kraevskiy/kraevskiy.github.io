import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';

// const tags = [
// 	{
// 		name: 'react',
// 		color: 'blue-text-gradient',
// 	},
// 	{
// 		name: 'mongodb',
// 		color: 'green-text-gradient',
// 	},
// 	{
// 		name: 'tailwind',
// 		color: 'pink-text-gradient',
// 	},
// ];

export const ExperienceCard: React.FC<{
	experience: {
		title: string;
		company_name: string;
		icon: string;
		iconBg: string;
		date: string;
		points: string[];
	}
}> = ({experience}) => {
	return (
		<VerticalTimelineElement
			contentStyle={{
				background: '#1d1836',
				color: '#fff',
			}}
			contentArrowStyle={{borderRight: '7px solid  #232631'}}
			date={experience.date}
			iconStyle={{background: experience.iconBg}}
			icon={
				<div className="flex justify-center items-center w-full h-full">
					<img
						src={experience.icon}
						alt={experience.company_name}
						className="w-[60%] h-[60%] object-contain"
					/>
				</div>
			}
		>
			<div>
				<h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
				<p
					className="text-secondary text-[16px] font-semibold"
					style={{margin: 0}}
				>
					{experience.company_name}
				</p>
			</div>

			<ul className="mt-5 list-disc ml-5 space-y-2">
				{experience.points.map((point, index) => (
					<li
						key={`experience-point-${index}`}
						className="text-white-100 text-[14px] pl-1 tracking-wider"
					>
						{point}
					</li>
				))}
			</ul>
			{/*<div className="mt-4 flex flex-wrap gap-2">*/}
			{/*	{tags.map((tag) => (*/}
			{/*		<span*/}
			{/*			key={`${Math.random()}-${tag.name}`}*/}
			{/*			className={`text-[12px] ${tag.color}`}*/}
			{/*		>*/}
			{/*			#{tag.name}*/}
			{/*		</span>*/}
			{/*	))}*/}
			{/*</div>*/}
		</VerticalTimelineElement>
	);
};
