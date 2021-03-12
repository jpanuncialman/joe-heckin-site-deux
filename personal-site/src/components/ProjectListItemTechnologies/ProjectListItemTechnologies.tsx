import React from 'react';

import { StyledWrapper, StyledItem } from './ProjectListItemTechnologiesStyles';

const ProjectListItemTechnologies = ({ technologies }): JSX.Element => {
	return (
		<StyledWrapper>
			{technologies.map(t => (
				<StyledItem key={t}>{t}</StyledItem>
			))}
		</StyledWrapper>
	);
};

export default ProjectListItemTechnologies;
