import styled from 'styled-components';
import { respondTo } from '~utils/themeUtils';

export const StyledList = styled.ul`
	margin: 0;
	padding: 0;
	font-size: ${({ theme }) => theme.fontSizes.h3};

	${respondTo.tablet`
		font-size: ${({ theme }) => theme.fontSizes.mobile.h3};
		margin: 1em 0;
	`}
`;
