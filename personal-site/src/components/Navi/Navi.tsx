import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import NaviItem from '../NaviItem/NaviItem';

import { StyledContainer, StyledInnerContainer, StyledX } from './NaviStyles';

export interface NaviHamburger {
	handleShowNavi: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Navi = ({ handleShowNavi }): JSX.Element => {
	const data = useStaticQuery(graphql`
		query NaviQuery {
			allSanitySitePage: allSanitySitePage {
				edges {
					node {
						slug {
							current
						}
						title
					}
				}
			}
		}
	`);

	// Render Site Pages Array
	let sitePages = data
		? data.allSanitySitePage.edges.map(edge => {
				return { title: edge.node.title, slug: `/${edge.node.slug.current}` };
		  })
		: [];

	sitePages = [{ title: 'Home', slug: '/' }, ...sitePages];

	return (
		<StyledContainer>
			<StyledInnerContainer>
				<StyledX onClick={() => handleShowNavi(false)} />
				{sitePages &&
					sitePages.map(page => {
						return <NaviItem title={page.title} slug={page.slug} />;
					})}
			</StyledInnerContainer>
		</StyledContainer>
	);
};

export default Navi;
