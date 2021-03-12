import React, { useState, useRef, useEffect, useCallback } from 'react';

import { FloatyBoiProps } from '~blocks/FloatyBoiContainer/FloatyBoiContainer';
import { getRandomNumber } from '~utils/componentUtils';

import { StyledWrapper } from './FloatyBoiStyles';

const FloatyBoi = ({ title, linkUrl }: FloatyBoiProps): JSX.Element => {
	const requestRef = useRef(); // Use this for keeping track of animation frame
	const elRef = useRef();
	const numReq = useRef(0);
	const dirRefX = useRef(1); // Use for tracking X direction
	const dirRefY = useRef(1); // Use for tracking Y direction
	const speed = 0.5;
	let [initX, setInitX] = useState(0);
	let [initY, setInitY] = useState(0);

	// Set Initial Position
	useEffect(() => {
		if (elRef != null) {
			const maxX =
				document.documentElement.clientWidth - elRef.current.clientWidth;
			const maxY =
				document.documentElement.clientHeight - elRef.current.clientHeight;

			setInitX(getRandomNumber(maxX));
			setInitY(getRandomNumber(maxY));
		}
	}, []);

	// Run Animation
	useEffect(() => {
		if (elRef != null) requestRef.current = requestAnimationFrame(animate);
	});

	// Cleanup animation
	useEffect(() => {
		// if (elRef != null) requestRef.current = requestAnimationFrame(animate);
		return () => cancelAnimationFrame(requestRef.current);
	}, []);

	const animate = () => {
		if (!elRef.current) return;
		let position = elRef?.current.getBoundingClientRect();
		let posX = position.x;
		let posY = position.y;

		// Set X Direction
		if (
			posX >=
			document.documentElement.clientWidth - elRef.current.clientWidth
		) {
			dirRefX.current = -1;
		} else if (posX <= 0) {
			dirRefX.current = 1;
		}

		// Set Y Direction
		if (
			posY >=
			document.documentElement.clientHeight - elRef.current.clientHeight
		) {
			dirRefY.current = -1;
		} else if (posY <= 0) {
			dirRefY.current = 1;
		}

		posX += dirRefX.current * speed;
		posY += dirRefY.current * speed;
		elRef.current.style.left = `${posX}px`;
		elRef.current.style.top = `${posY}px`;
		requestRef.current = requestAnimationFrame(animate);
	};

	return (
		<StyledWrapper
			target="_blank"
			href={linkUrl}
			ref={elRef}
			initX={initX}
			initY={initY}
		>
			{title}
		</StyledWrapper>
	);
};

export default FloatyBoi;
