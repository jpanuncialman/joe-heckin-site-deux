import React from 'react';

import FloatyBoi from '../../components/FloatyBoi/FloatyBoi';

import { StyledWrapper } from './FloatyBoiContainerStyles';

export interface FloatyBoiProps {
	title: string;
	linkUrl: string;
	ind: number;
}

export interface FloatyBoiContainerProps {
	floatyBois: FloatyBoiProps[];
}

const FloatyBoiContainer = ({
	floatyBois,
}: FloatyBoiContainerProps): JSX.Element => {
	let x = 50;
	const y = 50;

	const floatyBoisRender = floatyBois.map(boi => boi.node);
	return (
		<StyledWrapper>
			{floatyBois &&
				floatyBoisRender.map((boi, ind) => (
					<FloatyBoi ind={ind} title={boi.title} linkUrl={boi.linkUrl} />
				))}
		</StyledWrapper>
	);
};

export default FloatyBoiContainer;
