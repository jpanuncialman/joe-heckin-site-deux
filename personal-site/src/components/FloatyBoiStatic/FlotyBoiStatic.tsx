import React from 'react';

import { FloatyBoiProps } from '~blocks/FloatyBoiContainer/FloatyBoiContainer';

import { StyledWrapper } from './FloatyBoiStaticStyles';

const FloatyBoiStatic = ({ title, linkUrl }: FloatyBoiProps): JSX.Element => {
	return (
		<StyledWrapper target="_blank" href={linkUrl}>
			{title}
		</StyledWrapper>
	);
};

export default FloatyBoiStatic;
