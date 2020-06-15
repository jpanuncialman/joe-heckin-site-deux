export const theme = {
	animation: {
		fadeIn: `
			0% {
				opacity:0
			}
			100% {
				opacity:1;
			}
		`,
	},
	breakpoints: {
		mobile: '500px',
		tablet: '768px',
		desktop: '1000px',
	},
	colors: {
		standard: '#221f20',
		blue: `#0303fc`,
		blueRgba: `3, 3, 252`,
		white: `#fff`,
	},
	fontSizes: {
		standard: '20px',
		h1: '60px',
		h2: '40px',
		h3: '30px',
		h4: '25px',
	},
	lineHeight: '1.6em',
	maxWidth: '1200px',
	opacity: '0.7',
	padding: {
		standard: '0 20px',
		standardAll: '20px',
	},
	transition: {
		duration: '0.4s',
		property: 'ease-in-out',
	},
	zIndex: {
		front: '3',
		middle: '2',
		back: '1',
		superBack: '0',
	},
};
