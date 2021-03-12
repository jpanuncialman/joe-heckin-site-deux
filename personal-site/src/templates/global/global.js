import styled, { css } from 'styled-components';
import { theme } from './theme';

/*** MEDIA QUERIES ***/
export const respondTo = Object.keys(theme.breakpoints).reduce(
	(accumulator, label) => {
		accumulator[label] = (...args) => css`
			@media screen and (max-width: ${theme.breakpoints[label]}) {
				${css(...args)};
			}
		`;
		return accumulator;
	},
	{}
);

/*** COMPONENTS ***/
