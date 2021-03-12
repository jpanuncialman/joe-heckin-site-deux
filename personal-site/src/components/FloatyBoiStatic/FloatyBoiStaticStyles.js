import styled from 'styled-components';

export const StyledWrapper = styled.a`
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	border: 3px solid ${({ theme }) => theme.colors.black};
	color: ${({ theme }) => theme.colors.black};
	width: 100%;
	padding: 2em;
	box-shadow: 7px 7px 13px -1px rgba(0, 0, 0, 0.75);
	background: ${({ theme }) => theme.colors.white};
	z-index: 5;
	pointer-events: initial;
	margin-bottom: 1em;

	 {
		/* Set initial position */
	}
	top: ${({ initX }) => initX}px;
	left: ${({ initY }) => initY}px;

	&:active,
	&:visited {
		color: ${({ theme }) => theme.colors.black};
		background: ${({ theme }) => theme.colors.white};
	}

	&:hover {
		color: ${({ theme }) => theme.colors.white};
		background: ${({ theme }) => theme.colors.black};
	}
`;
