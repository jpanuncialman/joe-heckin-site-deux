import { theme } from '~templates/global/theme';
import { css } from 'styled-components';

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

export const respondToMin = Object.keys(theme.breakpoints).reduce(
	(accumulator, label) => {
		accumulator[label] = (...args) => css`
			@media screen and (min-width: ${theme.breakpoints[label]}) {
				${css(...args)};
			}
		`;
		return accumulator;
	},
	{}
);
