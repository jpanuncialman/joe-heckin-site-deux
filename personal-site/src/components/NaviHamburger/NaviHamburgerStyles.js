import styled from 'styled-components';

export const StyledHamburgerBlock = styled.div`
	position: relative;
	cursor: pointer;
	height: 35px;
	width: 50px;
	margin-top: 1em;
`;

export const StyledHamburgerBlockLink = styled.div`
	position: absolute;
	width: 100%;
	background-color: ${({ theme }) => theme.colors.standard};
	height: 5px;
	${({ position }) => {
		switch (position) {
			case 1:
				return `top: 50%;
					transform: translateY(-50%);
				`;
				break;
			case 2:
				return `bottom: 0;`;
				break;
			default:
				return `top: 0;`;
		}
	}};

	transition: ${({ theme }) =>
		`all ${theme.transition.duration} ${theme.transition.property}`};
	${({ showNavi }) => showNavi && `opacity: 0;`}
	transition-delay: ${({ showNavi, position }) => {
		// Hide Middle
		if (showNavi) {
			switch (position) {
				// Top Line
				case 1:
					return `0.2s`;
					break;
				// Bottom Line
				case 2:
					return `0.4s`;
					break;
				// Middle line
				default:
					return `0`;
			}
		}
	}};
`;
