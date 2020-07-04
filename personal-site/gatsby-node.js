/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

async function createSitePages(graphql, actions, reporter) {
	const { createPage } = actions;
	const result = await graphql(`
		{
			allSanitySitePage {
				edges {
					node {
						id
						slug {
							current
						}
					}
				}
			}
		}
	`);

	if (result.errors) throw result.errors;

	const pageEdges = (result.data.allSanitySitePage || {}).edges || [];

	pageEdges.forEach(edge => {
		const id = edge.node.id;
		const slug = edge.node.slug.current;
		const path = `/${slug}/`;

		reporter.info(`Creating page: ${path}`);

		createPage({
			path,
			component: require.resolve(
				'./src/templates/StandardTemplate/StandardTemplate.tsx'
			),
			context: { id },
		});
	});
}

async function createProjectPages(graphql, actions, reporter) {
	const { createPage } = actions;
	const result = await graphql(`
		{
			allSanitySiteProject(filter: { slug: { current: { ne: null } } }) {
				edges {
					node {
						id
						slug {
							current
						}
					}
				}
			}
		}
	`);

	if (result.errors) throw result.errors;

	const projectEdges = (result.data.allSanitySiteProject || {}).edges || [];

	projectEdges.forEach(edge => {
		const id = edge.node.id;
		const slug = edge.node.slug.current;
		const path = `/project/${slug}/`;

		reporter.info(`Creating project page: ${path}`);

		createPage({
			path,
			component: require.resolve(
				'./src/templates/StandardTemplate/StandardTemplatePost.tsx'
			),
			context: { id, slug },
		});
	});
}

exports.createPages = async ({ graphql, actions, reporter }) => {
	await createSitePages(graphql, actions, reporter);
	await createProjectPages(graphql, actions, reporter);
};
