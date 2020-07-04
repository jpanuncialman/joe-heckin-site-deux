import React from 'react';
// import { Link } from 'gatsby';

// import Layout from '../components/layout';
import StandardTemplate from '../templates/StandardTemplate/StandardTemplate';
// import Image from '../components/image';
// import SEO from '../components/seo';

import styled from 'styled-components';

// import { StyledContainer } from './IndexStyles';

import BlockContent from '../components/BlockContent/BlockContent';
import ProjectList from '../components/ProjectList/ProjectList';

const StyledContainer = styled.div`
	padding-top: 2em;
	font-size: ${({ theme }) => theme.fontSizes.h2};
	line-height: ${({ theme }) => theme.lineHeight};
`;

const IndexPage = (props): JSX.Element => {
	const { data } = props;
	const content = data && data.index._rawContent;
	const projects = data && data.projects.edges;
	return (
		<StandardTemplate>
			<StyledContainer>
				<BlockContent blocks={content} />
				<ProjectList posts={projects} />
			</StyledContainer>
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
				}
			}
		}
	}
`;

export default IndexPage;
