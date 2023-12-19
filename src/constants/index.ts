import {
	// mobile,
	backend,
	appwrite,
	web,
	javascript,
	typescript,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	labeltoplatform,
	unknown,
	lungor,
	jointoit,
	prflare,
	mygramm,
	mynetflix,
	nest,
	next,
	prisma,
	firebase,
	beetrootacademy
} from '../assets';

export const navLinks = [
	{
		id: 'about',
		title: 'About',
	},
	{
		id: 'work',
		title: 'Work',
	},
	{
		id: 'contact',
		title: 'Contact',
	},
];

const services = [
	{
		title: 'Web Developer',
		icon: web,
	},
	// {
	// 	title: 'React Native Developer',
	// 	icon: mobile,
	// },
	{
		title: 'Backend Developer',
		icon: backend,
	},
	// {
	// 	title: 'Content Creator',
	// 	icon: creator,
	// },
];

const technologies = [
	{
		name: 'JavaScript',
		icon: javascript,
	},
	{
		name: 'TypeScript',
		icon: typescript,
	},
	{
		name: 'React JS',
		icon: reactjs,
	},
	{
		name: 'Redux Toolkit',
		icon: redux,
	},
	{
		name: 'Tailwind CSS',
		icon: tailwind,
	},
	{
		name: 'Next JS',
		icon: next,
	},
	{
		name: 'Node JS',
		icon: nodejs,
	},
	{
		name: 'Nest JS',
		icon: nest,
	},
	{
		name: 'MongoDB',
		icon: mongodb,
	},
	{
		name: 'Prisma',
		icon: prisma,
	},
	{
		name: 'Firebase',
		icon: firebase,
	},
	{
		name: 'AppWrite',
		icon: appwrite,
	},
	{
		name: 'git',
		icon: git,
	}
];

const experiences = [
	{
		title: 'HTML5-developer',
		company_name: 'Pay Per Call',
		icon: unknown,
		iconBg: '#383E56',
		date: 'August 2017 - October 2017',
		points: [
			'Layout of websites.',
			'Layout of emails.',
		],
	},
	{
		title: 'Front-end Developer',
		company_name: 'Lungor DALungor',
		icon: lungor,
		iconBg: '#000000',
		date: 'October 2017 - May 2018',
		points: [
			'Website layout',
			'Website integration on CMS WordPress',
			'Write plugin for CMS WordPress',
		],
	},
	{
		title: 'Front-end Developer',
		company_name: 'Join.To.IT',
		icon: jointoit,
		iconBg: '#000000',
		date: 'April 2018 - August 2018',
		points: [
			'Developing web application (ReactJS, VueJS, PreactJS)',
			'Integration on Laravel, connection to third-party APIs',
		],
	},
	{
		title: 'Front-end Developer',
		company_name: 'Label to platform',
		icon: labeltoplatform,
		iconBg: '#ffffff',
		date: 'August 2018 - October 2020',
		points: [
			'Developing of web applications (ReactJS).',
		],
	},
	{
		title: 'Teacher Front-end Developer course',
		company_name: 'Beetroot Academy',
		icon: beetrootacademy,
		iconBg: '#ffffff',
		date: 'March 2023 - August 2023',
		points: [
			'Teacher at the course on Front-End development.',
		],
	},
	{
		title: 'Team Lead Front End',
		company_name: 'Hidden by NDA',
		icon: unknown,
		iconBg: '#ffffff',
		date: 'October 2020Z - Present',
		points: [
			'Developing of microfrontend architecture.',
			'Developing of new architectural features.',
			'Review code.',
			'API development.',
			'Team mentoring.',
			'Typification of the entire development environment.',
			'Writing documentation for working with front-end environments and writing contracts between services.',
		],
	},
];

const testimonials = [
	{
		testimonial:
			'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
		name: 'Sara Lee',
		designation: 'CFO',
		company: 'Acme Co',
		image: 'https://randomuser.me/api/portraits/women/4.jpg',
	},
	{
		testimonial:
			'I\'ve never met a web developer who truly cares about their clients\' success like Rick does.',
		name: 'Chris Brown',
		designation: 'COO',
		company: 'DEF Corp',
		image: 'https://randomuser.me/api/portraits/men/5.jpg',
	},
	{
		testimonial:
			'After Rick optimized our website, our traffic increased by 50%. We can\'t thank them enough!',
		name: 'Lisa Wang',
		designation: 'CTO',
		company: '456 Enterprises',
		image: 'https://randomuser.me/api/portraits/women/6.jpg',
	},
];

const tagsList = {
	react: {
		name: 'react',
		color: 'blue-text-gradient'
	},
	redux: {
		name: 'redux',
		color: 'purple-text-gradient'
	},
	tailwind: {
		name: 'tailwind',
		color: 'blue-text-gradient'
	},
	stripe: {
		name: 'strite',
		color: 'blue-text-gradient'
	},
	next: {
		name: 'nextJS',
		color: 'grey-text-gradient'
	},
	nest: {
		name: 'nestJS',
		color: 'red-text-gradient'
	},
	mongo: {
		name: 'mongo',
		color: 'green-text-gradient'
	},
	prisma: {
		name: 'prisma',
		color: 'grey-text-gradient'
	},
	appwrite: {
		name: 'appwrite',
		color: 'red-text-gradient'
	},
	firebase: {
		name: 'firebase',
		color: 'orange-text-gradient'
	},
	vercel: {
		name: 'vercel',
		color: 'grey-text-gradient'
	},
	scss: {
		name: 'scss',
		color: 'pink-text-gradient'
	}
}

const projects = [
	{
		name: 'PrFlare',
		description:
			'Web application for Sponsored articles with backlinks ⚡ Submit a publication with a guarantee via PrFlare - quick and easy!',
		tags: [
			tagsList.react,
			tagsList.redux,
			tagsList.tailwind,
			tagsList.next,
			tagsList.nest,
			tagsList.mongo,
			tagsList.scss,
		],
		image: prflare,
		// source_code_link: 'https://github.com/',
	},
	{
		name: 'MyGramm',
		description:
			'Test web application based on Instagram. Including photo feed, adding, deleting, etc. Open source for inspiration',
		tags: [
			tagsList.react,
			tagsList.tailwind,
			tagsList.appwrite,
			tagsList.vercel,
		],
		image: mygramm,
		source_code_link: 'https://github.com/kraevskiy/mygramm',
	},
	{
		name: 'MyNetflix',
		description:
			'Test web application based on Netflix. Including stripe subscription and firebase integration. Open source for inspiration',
		tags: [
			tagsList.react,
			tagsList.firebase,
			tagsList.stripe
		],
		image: mynetflix,
		source_code_link: 'https://github.com/kraevskiy/mynetflix',
	},
];

export { services, technologies, experiences, testimonials, projects };
