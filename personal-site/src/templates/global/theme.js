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
		mobilePlus: '501px',
		tablet: '768px',
		tabletPlus: '769px',
		desktop: '1000px',
		desktopPlus: '1001px',
	},
	colors: {
		standard: '#221f20',
		black: `#000`,
		blue: `#0303fc`,
		blueRgba: `3, 3, 252`,
		white: `#fff`,
	},
	fontSizes: {
		standard: '18px',
		standardSmol: '14px',
		h0: '72px',
		h1: '60px',
		h2: '40px',
		h3: '30px',
		h4: '25px',
		mobile: {
			h0: '48px',
			h1: '36px',
			h2: '28px',
			h3: '20px',
			h4: '16px',
		},
	},
	lineHeight: '1.25em',
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
