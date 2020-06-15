import React from 'react'
import { PageProps, graphql } from 'gatsby'

import Header from '../../components/Header/Header'
import Body from '../../components/Body/Body'

import { ThemeProvider } from 'styled-components'
import { theme } from '../global/theme'
import { Container } from './StandardTemplateStyles'

const StandardTemplate = (props: PageProps): JSX.Element => {
	const { data, children } = props
	const page = data && data.sanitySitePage

	return (
		<ThemeProvider theme={theme}>
			<Container>
				<Header />
				{
					children && children
					// Home Page
				}
				{
					page && <Body title={page.title} bodyContent={page._rawContent} />
					//Other Pages
				}
			</Container>
		</ThemeProvider>
	)
}

export const query = graphql`
	query SitePageTemplateQuery($id: String!) {
		sanitySitePage: sanitySitePage(id: { eq: $id }) {
			title
			_rawContent
		}
	}
`

export default StandardTemplate
