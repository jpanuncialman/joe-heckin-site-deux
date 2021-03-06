const myCustomQueries = {
	mobile: '(max-width: 500px)',
	mobilePlus: '(min-width: 501px)',
	tablet: '(max-width: 768px)',
	tabletPlus: '(min-width: 769px)',
	desktop: '(max-width: 1000px)',
	desktopPlus: '(min-width: 1001px)',
};

module.exports = {
	siteMetadata: {
		title: `Gatsby Default Starter`,
		description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
		author: `@gatsbyjs`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
			},
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
		{
			resolve: 'gatsby-source-sanity',
			options: {
				projectId: 'gctzsyas',
				dataset: 'production',
			},
		},
		`gatsby-plugin-styled-components`,
		{
			resolve: `gatsby-plugin-alias-imports`,
			options: {
				alias: {
					'~blocks': 'src/blocks',
					'~components': 'src/components',
					'~pages': 'src/pages',
					'~templates': 'src/templates',
					'~utils': 'src/utils',
				},
			},
		},
		{
			resolve: 'gatsby-plugin-breakpoints',
			options: {
				queries: myCustomQueries,
			},
		},
	],
};
