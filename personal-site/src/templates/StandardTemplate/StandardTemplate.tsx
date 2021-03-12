import React from 'react';
import { PageProps, graphql } from 'gatsby';

import Header from '~components/Header/Header';

import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { theme } from '../global/theme';
import { Container } from './StandardTemplateStyles';

import '@fontsource/karla';
import '@fontsource/dm-mono';

const StandardTemplate = (props: PageProps): JSX.Element => {
	const { data, children } = props;
	console.log(data);

	const GlobalStyle = createGlobalStyle`
	/* http://meyerweb.com/eric/tools/css/reset/ 
		v2.0 | 20110126
		License: none (public domain)
	*/
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}
	
	html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed, 
	figure, figcaption, footer, header, hgroup, 
	menu, nav, output, ruby, section, summary,
	time, mark, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
		line-height: 1.21em;
		letter-spacing: 0px;
	}
	/* HTML5 display-role reset for older browsers */
	article, aside, details, figcaption, figure, 
	footer, header, hgroup, menu, nav, section {
		display: block;
	}
	body {
		font-family: "DM Mono", sans-serif;
	}

	h1, h2, h3, h4, h5, h6 {
		font-family: "Karla", sans-serif;
		font-weight: 600;
	}

	ol, ul {
		list-style: none;
		margin: 0;
		padding; 0;
	}

	blockquote, q {
		quotes: none;
	}
	blockquote:before, blockquote:after,
	q:before, q:after {
		content: '';
		content: none;
	}
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}

	a {
		color: #0303fc;
	}

	`;

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Container>
				<Header />
				{children}
			</Container>
		</ThemeProvider>
	);
};

export default StandardTemplate;
