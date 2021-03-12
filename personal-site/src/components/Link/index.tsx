import styled, { css } from 'styled-components';
import { respondTo } from '~utils/themeUtils';

const Link = styled.a`
	text-decoration: none;
	color: ${({ color, theme }) => (color ? color : theme.colors.standard)};
	display: inline-block;

	&::after {
		content: '';
		display: block;
		transition: ${({ theme }) =>
			`all ${theme.transition.duration} ${theme.transition.property}`};
		width: 0;
		height: 5px;
		background-color: ${({ theme }) => theme.colors.white};
	}

	&:hover::after {
		width: 100%;

		${respondTo.tablet`
			width: 0;
		`}
	}

	&:active::after {
		${respondTo.tablet`
			width: 100%;
		`}
	}
`;

export default Link;
