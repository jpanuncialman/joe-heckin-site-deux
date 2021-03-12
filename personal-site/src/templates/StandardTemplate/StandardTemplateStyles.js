// import React from 'react'
import styled from 'styled-components';

export const Container = styled.div`
	color: ${({ theme }) => theme.colors.standard};
	font-size: ${({ theme }) => theme.fontSizes.standard};
	line-height: ${({ theme }) => theme.lineHeight};
	max-width: ${({ theme }) => theme.maxWidth};
	width: 100%;
	margin: 0 auto;
	padding: ${({ theme }) => theme.padding.standardAll};

	a {
		text-decoration: none;
	}
	ul {
		list-style-type: none;
	}
`;

export const FlexBox = styled.div`
	display: flex;
	align-items: ${props => (props.alignItems ? props.alignItems : 'center')};
	justify-content: ${props =>
		props.justifyContent ? props.justifyContent : 'center'};
	flex-direction: ${props =>
		props.flexDirection ? props.flexDirection : 'row'};
`;
