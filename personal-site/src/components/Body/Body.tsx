import React from 'react'
import BlockContent from '../BlockContent/BlockContent'

export interface BodyProps {
	title: string
	bodyContent: Object[]
}

const Body = (props: BodyProps): JSX.Element => {
	return (
		<div>
			<BlockContent blocks={props.bodyContent} />
		</div>
	)
}

export default Body
