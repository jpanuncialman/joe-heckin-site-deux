import React from 'react';

import {
	StyledItem,
	StyledItemHeaderLink,
	StyledItemHeader,
	StyledItemSubheader,
} from './ProjectListItemStyles';
import ProjectListItemTechnologies from '~components/ProjectListItemTechnologies/ProjectListItemTechnologies';
const ProjectListItem = ({ post }): JSX.Element => {
	const hoverImage = post.node.hoverImage && post.node.hoverImage.asset.url;
	return (
		<StyledItem hoverImage={hoverImage}>
			{post.node.extLink ? (
				<StyledItemHeaderLink target="_blank" href={post.node.extLink}>
					{post.node.title}
				</StyledItemHeaderLink>
			) : (
				<StyledItemHeader>{post.node.title}</StyledItemHeader>
			)}
			<ProjectListItemTechnologies technologies={post.node.technologies} />
			<StyledItemSubheader>{post.node.description}</StyledItemSubheader>
		</StyledItem>
	);
};

export default ProjectListItem;
