import React from 'react';
import BaseBlockContent from '@sanity/block-content-to-react';

const BlockContent = ({ blocks }): JSX.Element => (
	<BaseBlockContent blocks={blocks} />
);

export default BlockContent;
