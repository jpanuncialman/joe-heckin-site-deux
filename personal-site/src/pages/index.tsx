import React from 'react';
// import { Link } from 'gatsby';

// import Layout from '../components/layout';
import StandardTemplate from '~templates/StandardTemplate/StandardTemplate';
// import Image from '../components/image';
// import SEO from '../components/seo';

import styled from 'styled-components';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';

import BlockContent from '../components/BlockContent/BlockContent';
import ProjectList from '../components/ProjectList/ProjectList';
import FloatyBoiContainer from '../blocks/FloatyBoiContainer/FloatyBoiContainer';
import FloatyBoiStaticContainer from '~components/FloatyBoiStaticContainer/FloatyBoiStaticContainer';
import { respondTo } from '~utils/themeUtils';

const StyledContainer = styled.div`
	padding-top: 2em;
	font-size: ${({ theme }) => theme.fontSizes.h2};
	line-height: ${({ theme }) => theme.lineHeight};
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-column-gap: 5%;

	${respondTo.tablet`
	grid-template-columns: 1fr;
	`}

	h1 {
		font-size: ${({ theme }) => theme.fontSizes.h0};

		${respondTo.tablet`
		font-size: 36px;
		
	`}
	}
`;

const StyledHeadingContainer = styled.div``;

const StyledHeader = styled.h1`
	font-size: ${({ theme }) => theme.fontSizes.h0};
`;

const IndexPage = (props): JSX.Element => {
	const { data } = props;
	const content = data && data.index._rawContent;
	const title = data && data.index.title;
	const projects = data && data.projects.edges;
	const floatyBois = data && data.floatyBois.edges;

	const breakpoints = useBreakpoint();
	return (
		<StandardTemplate>
			<StyledContainer>
				<StyledHeadingContainer>
					{content ? (
						<BlockContent blocks={content} />
					) : (
						<StyledHeader>{title}</StyledHeader>
					)}
				</StyledHeadingContainer>
				<ProjectList posts={projects} />
			</StyledContainer>
			{!breakpoints.tablet ? (
				<FloatyBoiContainer floatyBois={floatyBois} />
			) : (
				<FloatyBoiStaticContainer floatyBois={floatyBois} />
			)}
		</StandardTemplate>
	);
};

export const query = graphql`
	query IndexPageQuery {
		index: sanitySiteHome(id: { eq: "3d501599-0ad2-553c-8c57-c72ce9eb7269" }) {
			title
			_rawContent
		}
		projects: allSanitySiteProject {
			edges {
				node {
					title
					description
					slug {
						current
					}
					extLink
					hoverImage {
						asset {
							id
							url
						}
					}
					technologies
				}
			}
		}
		floatyBois: allSanityFloatyBoi {
			edges {
				node {
					title
					linkUrl
				}
			}
		}
	}
`;

export default IndexPage;
