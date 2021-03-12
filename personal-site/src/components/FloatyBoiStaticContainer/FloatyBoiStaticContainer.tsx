import React from 'react';

import FloatyBoi from '../../components/FloatyBoi/FloatyBoi';

// import { StyledWrapper } from './FloatyBoiStaticContainerStyles';

import { FloatyBoiContainerProps } from '~blocks/FloatyBoiContainer/FloatyBoiContainer';
import FloatyBoiStatic from '~components/FloatyBoiStatic/FlotyBoiStatic';
import { StyledWrapper } from './FloatyBoiStaticContainerStyles';

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
					<FloatyBoiStatic ind={ind} title={boi.title} linkUrl={boi.linkUrl} />
				))}
		</StyledWrapper>
	);
};

export default FloatyBoiContainer;
