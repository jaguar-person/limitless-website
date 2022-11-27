// Import modules
import { keyframes } from 'styled-components';

// Animations
const fadeIn = keyframes`
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
`

const fadePushIn = keyframes`
	from {
		transform: scale(0.8);
		opacity: 0;
	}
	to {
		transform: scale(1);
		opacity: 1;
	}
`

const fadeDownIn = keyframes`
	from {
		transform: translateY(-50px);
		opacity: 0;
	}
	to {
		transform: translateY(0);
		opacity: 1;
	}
`

const fadeUpIn = keyframes`
	from {
		transform: translateY(50px);
		opacity: 0;
	}
	to {
		transform: translateY(0);
		opacity: 1;
	}
`

const offsetFadeIn = keyframes`
	0% {
		opacity: 0;
	}
	50% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
`

const breathing = keyframes`
	0% {
		filter: brightness(1);
	}
	50% {
		filter: brightness(0.8);
	}
	100% {
		filter: brightness(1);
	}
`

const orbit = keyframes` 
	0% {
		background-position:0% 50%
	}
    50% {
		background-position:100% 50%
	}
    100% {
		background-position:0% 50%
	}
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const rotateReverse = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
`;

// Theme
const theme = {
	radius: '0.35rem',
	scrollbar: `scrollbar-color: #26c397 transparent;
				scrollbar-width: thin;
				::-webkit-scrollbar {
					width: .5rem;
					height: .5rem;
				}
				::-webkit-scrollbar-track {
					background: transparent;
				}
				::-webkit-scrollbar-thumb {
					background: #26c397;
				}`,
	animations: {
		fadeIn,
		offsetFadeIn,
		breathing,
		orbit,
		rotate,
		rotateReverse,
		fadePushIn,
		fadeUpIn,
		fadeDownIn,
		durations: {
			short: "100ms",
			medium: "250ms",
			long: "500ms",
			longer: "1s"
		},
	},
	scales: {
		small: 1.10,
		medium: 1.25,
		large: 1.5
	},
	mobile: '@media only screen and (max-width: 640px)',
	tablet: '@media only screen and (max-width: 1007px)',
	colors: {
		text: '#ffffff',
		subtext: '#918f94',
		topbar: '#291824',
		link: '#32212f',
		accent: '#1BF1E7',
		accentDim: '#1BF1E7',
		altAccent: '#F11B25',
		altAccentDim: '#F11B25',
		footer: '#151d24a4',
		background: '#1a1a26',
		backgroundDim: '#13131d',
		backgroundLight: '#242431',
		backgroundDark: '#0a0a0f',
		gradient: '#F11B25',
		altGradient: '#1BF1E7',
		negative: '#591818',
		backgrounds: {
			1: '#1a1a26',
			2: '#13131d',
			3: '#1a1a26',
			4: '#1a1a26',
			5: '#242431',
		},
		brands: {
			steam: '#2e445d',
			discord: '#586aea',
			twitter: '#1DA1F3',
			twitch: '#6441A4',
			youtube: '#B71D1C',
			reddit: '#ff581a',
			nitro: '#ff73fa',
			tradeurl: '#1f5f83'
		}
	}
}

export default theme;
