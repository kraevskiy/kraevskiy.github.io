import React, { useState, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';
import { random } from 'maath';

type PointsInstancesProps = JSX.IntrinsicElements['points'] & {
	range?: number;
	limit?: number;
};

const Stars: React.FC<PointsInstancesProps> = (props) => {
	const ref = useRef<{
		rotation: {
			x: number;
			y: number
		}
	} | null>(null);
	const [sphere] = useState(() => random.inSphere(new Float32Array(12000), {radius: 1.2}));

	useFrame((_, delta) => {
		if (ref.current) {
			ref.current.rotation.x -= delta / 10;
			ref.current.rotation.y -= delta / 15;
		}
	});

	return (
		<group rotation={[0, 0, Math.PI / 4]}>
			{/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
			{/* @ts-expect-error */}
			<Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
				<PointMaterial
					transparent
					color="#f272c8"
					size={0.002}
					sizeAttenuation={true}
					depthWrite={false}
				/>
			</Points>
		</group>
	);
};

const StarsCanvas = () => {
	return (
		<div className="w-full h-auto absolute inset-0 z-[-1]">
			<Canvas camera={{position: [0, 0, 1]}}>
				<Suspense fallback={null}>
					<Stars />
				</Suspense>

				<Preload all />
			</Canvas>
		</div>
	);
};

export default StarsCanvas;
