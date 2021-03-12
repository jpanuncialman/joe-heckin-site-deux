import styled from 'styled-components';
import Link from '~components/Link/index';

export const StyledListItem = styled.li`
	margin-bottom: 0;
`;

export const StyledLink = styled(Link)`
	color: ${({ theme }) => theme.colors.white};
	font-size: ${({ theme }) => theme.fontSizes.h1};
	text-transform: uppercase;
	line-height: ${({ theme }) => theme.lineHeight};
`;
