import React from 'react';

import {
	StyledHamburgerBlock,
	StyledHamburgerBlockLink,
} from './NaviHamburgerStyles';

export interface NaviHamburger {
	showNavi: boolean;
	handleShowNavi: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const NaviHamburger = ({ showNavi, handleShowNavi }): JSX.Element => {
	const renderHamburgerBlockLinks = () => {
		let renderArr = [];
		for (let i = 0; i <= 3; i++) {
			renderArr.push(
				<StyledHamburgerBlockLink
					key={`hamburger-line-${i}`}
					position={i}
					showNavi={showNavi}
				/>
			);
		}
		return renderArr;
	};

	return (
		<StyledHamburgerBlock onClick={() => handleShowNavi(!showNavi)}>
			{renderHamburgerBlockLinks()}
		</StyledHamburgerBlock>
	);
};

export default NaviHamburger;
