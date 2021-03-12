import styled from 'styled-components';

export const StyledWrapper = styled.ul`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	margin: 0.5em 0;
`;

export const StyledItem = styled.li`
	font-size: ${({ theme }) => theme.fontSizes.standardSmol};
	text-decoration: underline;
	margin-right: 1em;

	&:last-child {
		margin-right: 0;
	}
`;
