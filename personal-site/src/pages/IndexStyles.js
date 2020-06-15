import styled from 'styled-components';

export const StyledContainer = styled.div`
	padding-top: 2em;
	font-size: ${({ theme }) => theme.fontSizes.h2};
	line-height: ${({ theme }) => theme.lineHeight};
`;
