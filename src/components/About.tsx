import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { ServiceCard } from './ServiceCard';

const About = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>Introduction</p>
				<h2 className={styles.sectionHeadText}>Overview.</h2>
			</motion.div>

			<motion.p
				variants={fadeIn('', '', 0.1, 1)}
				className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
			>
				I'm a Front-End developer. I have over 6 years of experience in the development of web sites and web
				applications of varying complexity. I am very familiar with React and have been working very closely with it
				lately. I do not stand still and study new technologies all the time. Besides web development, I also have
				experience in image editing and graphic design. I take my work with great responsibility, regardless of the
				scale of the task. People and clients can vouch for my professionalism and experience.
			</motion.p>

			<div className="mt-20 flex flex-wrap gap-10 place-content-center">
				{services.map((service, index) => (
					<ServiceCard key={service.title} index={index} {...service} />
				))}
			</div>
		</>
	);
};

export default SectionWrapper(About, 'about');
