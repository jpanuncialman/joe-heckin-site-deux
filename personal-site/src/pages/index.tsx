import React from 'react';
// import { Link } from 'gatsby';

// import Layout from '../components/layout';
import StandardTemplate from '../templates/StandardTemplate/StandardTemplate';
// import Image from '../components/image';
// import SEO from '../components/seo';

import { StyledContainer } from './IndexStyles';

import BlockContent from '../components/BlockContent/BlockContent';

const IndexPage = (props): JSX.Element => {
	const { data } = props;
	const content = data && data.index._rawContent;
	return (
		<StandardTemplate>
			<StyledContainer>
				<BlockContent blocks={content} />
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
	}
`;

export default IndexPage;
