import React from 'react';

import { StyledListItem, StyledLink } from './NaviItemStyles';

export interface NaviItemProps {
	title: string;
	slug: StringConstructor;
}

const NaviItem = ({ title, slug }): JSX.Element => {
	return (
		<StyledListItem>
			<StyledLink href={slug}>{title}</StyledLink>
		</StyledListItem>
	);
};

export default NaviItem;
