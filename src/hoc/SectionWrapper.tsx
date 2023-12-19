import React from 'react';
import { motion } from 'framer-motion';
import cn from 'classnames';

import { styles } from '../styles';
import { staggerContainer } from '../utils/motion';

const StarWrapper = (Component: React.FC, idName?: string) =>
	function HOC() {
		return (
			<motion.section
				variants={staggerContainer()}
				initial="hidden"
				whileInView="show"
				viewport={{once: true, amount: 0.25}}
				className={cn('max-w-7xl mx-auto relative z-0', styles.padding)}
			>
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>

				<Component />
			</motion.section>
		);
	};

export default StarWrapper;
