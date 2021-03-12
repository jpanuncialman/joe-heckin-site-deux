import React from 'react';

import ProjectListItem from '../ProjectListItem/ProjectListItem';

import { StyledList } from './ProjectListStyles';

const ProjectList = ({ posts }): JSX.Element => {
	// const postsFixed = posts.map(post => post.node);
	return (
		<StyledList>
			{posts &&
				posts.map(post => {
					return <ProjectListItem post={post} />;
				})}
		</StyledList>
	);
};

export default ProjectList;
