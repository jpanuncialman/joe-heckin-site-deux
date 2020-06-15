import styled, { keyframes } from 'styled-components';
import { respondTo } from '../../templates/global/global';

export const StyledContainer = styled.div`
	width: 100vw;
	display: flex;
	align-items: flex-start;
	justify-content: center;
	padding: ${({ theme }) => theme.padding.standardAll};
	background-color: ${({ theme }) =>
		`rgba(${theme.colors.blueRgba},${theme.opacity})`};
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: ${({ theme }) => theme.zIndex.front};
	color: ${({ theme }) => theme.colors.white};
	font-size: ${({ theme }) => theme.fontSizes.h2};
	line-height: ${({ theme }) => theme.lineHeight};
	overflow: hidden;
	animation: ${({ theme }) => keyframes`${theme.animation.fadeIn}`}
		${({ theme }) => theme.transition.duration} normal;
`;

export const StyledInnerContainer = styled.ul`
	max-width: 650px;
	width: 100%;
	padding: ${({ theme }) => theme.padding.standardAll};
	position: relative;
	margin: 0;
	padding-top: 2em;
	overflow-y: auto;
`;

export const StyledX = styled.div`
	top: 0;
	left: 0;
	width: 35px;
	cursor: pointer;
	position: absolute;

	&::before,
	&:after {
		content: '';
		display: block;
		height: 5px;
		width: 100%;
		background-color: ${({ theme }) => theme.colors.white};
	}

	&::before {
		transform: translateY(12px) rotate(45deg);
	}

	&::after {
		transform: translateY(8px) rotate(-45deg);
	}
`;
