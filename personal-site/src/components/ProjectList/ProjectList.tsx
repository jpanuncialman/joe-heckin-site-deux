import React from 'react';

const ProjectList = ({ posts }): JSX.Element => {
	// const postsFixed = posts.map(post => post.node);
	return (
		<ul>
			{posts &&
				posts.map(post => {
					return (
						<li>
							<div>{post.node.title}</div>
							<div>{post.node.description}</div>
						</li>
					);
				})}
		</ul>
	);
};

export default ProjectList;
