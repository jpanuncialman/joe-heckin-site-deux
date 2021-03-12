import React from 'react';
import { PageProps, graphql } from 'gatsby';

import Header from '../../components/Header/Header';
import Body from '../../components/Body/Body';

import { ThemeProvider } from 'styled-components';
import { theme } from '../global/theme';
import { Container } from './StandardTemplateStyles';

const StandardTemplatePost = (props: PageProps): JSX.Element => {
	const { data, children } = props;
	const page = data && data.sanitySiteProject;

	return (
		<ThemeProvider theme={theme}>
			<Container>
				<Header />
				{
					page && <Body title={page.title} bodyContent={page._rawContent} />
					//Other Pages
				}
			</Container>
		</ThemeProvider>
	);
};

export const query = graphql`
	query SitePostTemplate($id: String!) {
		sanitySiteProject: sanitySiteProject(id: { eq: $id }) {
			title
			_rawContent
		}
	}
`;

export default StandardTemplatePost;
