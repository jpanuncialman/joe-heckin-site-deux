import React from 'react';
import { PageProps, graphql } from 'gatsby';

import Body from '~components/Body/Body';

const BodyBlock = ({ data }: PageProps): JSX.Element => {
	const page = data && data.sanitySitePage;

	return (
		<>{page && <Body title={page.title} bodyContent={page._rawContent} />}</>
	);
};

export const query = graphql`
	query BodyBlockQuery($id: String!) {
		sanitySitePage: sanitySitePage(id: { eq: $id }) {
			title
			_rawContent
		}
	}
`;

export default BodyBlock;
