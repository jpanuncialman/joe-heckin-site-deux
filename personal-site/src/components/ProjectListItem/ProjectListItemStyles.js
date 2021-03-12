import styled, { css } from 'styled-components';
import { respondToMin } from '~utils/themeUtils';

export const StyledItem = styled.li`
	padding: 0;
	margin-bottom: 1em;
	position: relative;

	${respondToMin.tablet`
	${({ hoverImage }) =>
		hoverImage &&
		css`
		&::after {
			content: '';
			display: none;
			position: absolute;
			background-image: url('${hoverImage}');
			width: 275px;
			height: 200px;
			top: -200px;
		}

		&:hover {
			&::after {
				display: block;
			}
		}
		
	`}`}
`;

export const StyledItemHeaderLink = styled.a`
	font-size: ${({ theme }) => theme.fontSizes.h4};
	cursor: pointer;
	font-weight: 600;

	@in;
`;

export const StyledItemHeader = styled.h3`
	font-size: ${({ theme }) => theme.fontSizes.h3};
	font-family: 'DM Mono', sans-serif;
	font-weight: 600;
`;

export const StyledItemSubheader = styled.p`
	padding: 0;
	font-size: ${({ theme }) => theme.fontSizes.standard};
	line-height: ${({ theme }) => theme.lineHeight};
`;
