import React, { useState } from 'react';

import NaviHamburger from '../NaviHamburger/NaviHamburger';
import Navi from '../Navi/Navi';

const Header = (): JSX.Element => {
	const [showNavi, setShowNavi] = useState(false);
	const handleShowNavi = show => {
		setShowNavi(show);
	};
	return (
		<div>
			<NaviHamburger showNavi={showNavi} handleShowNavi={handleShowNavi} />
			{showNavi && <Navi handleShowNavi={handleShowNavi} />}
		</div>
	);
};

export default Header;
