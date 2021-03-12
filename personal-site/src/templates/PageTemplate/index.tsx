import React from 'react';
import { graphql } from 'gatsby';
import Body from '~components/Body/Body';

import StandardTemplate from '~templates/StandardTemplate/StandardTemplate';

const PageTemplate = ({ data }): JSX.Element => {
	const page = data && data.sanitySitePage;

	return (
		<StandardTemplate>
			{page && <Body title={page.title} bodyContent={page._rawContent} />}
		</StandardTemplate>
	);
};

export const query = graphql`
	query PageTemplateQuery($id: String!) {
		sanitySitePage: sanitySitePage(id: { eq: $id }) {
			title
			_rawContent
		}
	}
`;

export default PageTemplate;
