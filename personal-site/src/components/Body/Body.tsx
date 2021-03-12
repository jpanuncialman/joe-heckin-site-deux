import React from 'react';
import BlockContent from '../BlockContent/BlockContent';
import styled from 'styled-components';
import { respondTo } from '~utils/themeUtils';

export interface BodyProps {
	title: string;
	bodyContent: Object[];
}

const StyledWrapper = styled.div`
	padding: 2em 0;
`;

const StyledH1 = styled.h1`
	margin-bottom: 1em;
	font-size: ${({ theme }) => theme.fontSizes.h1};

	${respondTo.tablet`
		font-size: 36px;
	`}
`;

const Body = (props: BodyProps): JSX.Element => {
	return (
		<StyledWrapper>
			<StyledH1>{props.title}</StyledH1>
			<BlockContent blocks={props.bodyContent} />
		</StyledWrapper>
	);
};

export default Body;
