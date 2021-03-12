import React from 'react';
import BaseBlockContent from '@sanity/block-content-to-react';
import styled from 'styled-components';

const StyledNodeWrapper = styled.div`
	margin: ${({ m }) => (m ? `${m} 0` : `1em 0`)};
`;

const serializers = {
	types: {
		block(props) {
			switch (props.node.style) {
				case 'h1':
					return (
						<StyledNodeWrapper>
							<h1>{props.children}</h1>
						</StyledNodeWrapper>
					);
				case 'h2':
					return (
						<StyledNodeWrapper>
							<h2>{props.children}</h2>
						</StyledNodeWrapper>
					);
				case 'h3':
					return (
						<StyledNodeWrapper>
							<h3>{props.children}</h3>
						</StyledNodeWrapper>
					);
				case 'h4':
					return (
						<StyledNodeWrapper>
							<h4>{props.children}</h4>
						</StyledNodeWrapper>
					);
				case 'blockquote':
					return (
						<StyledNodeWrapper>
							<blockquote>{props.children}</blockquote>
						</StyledNodeWrapper>
					);
				default:
					return (
						<StyledNodeWrapper m={'2em'}>
							<p>{props.children}</p>
						</StyledNodeWrapper>
					);
			}
		},
	},
};

const BlockContent = ({ blocks }): JSX.Element => (
	<BaseBlockContent
		blocks={blocks}
		imageOptions={{ w: 320, h: 240, fit: 'max' }}
		projectId="gctzsyas"
		dataset="production"
		serializers={serializers}
	/>
);

export default BlockContent;
