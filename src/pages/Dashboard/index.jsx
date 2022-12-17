// Module imports.
import React from "react";
import styled from 'styled-components';
import missions_hero from '../../images/missions_hero.jpg'
import logo from '../../images/logo.png'
/*import Footer from "../../../../rusty-web/src/component/Footer";*/

const Dashboard = () => {
	return (
		<DashboardContainer>
			<img src={logo} alt="R"/>
			<nav>
				<DiscordLink href="https://discord.gg/limitless" >DISCORD</DiscordLink>
				<SupportLink href="https://store.limitlessrust.com" >STORE</SupportLink>
			</nav>
			{/*<Footer />*/}
		</DashboardContainer>
	)
}

const DashboardContainer = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	height: 100%;
	background-image: url(${missions_hero});
	background-size: cover;
	background-position: center 20%;
	& > img {
		height: 34rem;
	}
	& > nav {
		display: flex;
		gap: 3rem;

		${props => props.theme.tablet} {
			flex-direction: column;
		}
	}
	user-select: none;
	position: relative;
	overflow: hidden;
	&:after, &:before {
		content: "";
		position: absolute;
		width: 75rem;
		height: 75rem;
		border-radius: 50%;
		opacity: .8;
		pointer-events: none
	}
	&:before {
		top: 0;
		left: 0;
		transform: translate(-50%, -50%);
		background: radial-gradient(circle, ${props => props.theme.colors.gradient} 20%, rgba(255, 255, 255, 0) 60%);
	}
	&:after {
		bottom: -75rem;
		right: 0;
		transform: translate(50%, -50%);
		background: radial-gradient(circle, ${props => props.theme.colors.altGradient} 20%, rgba(255, 255, 255, 0) 60%);
	}
`;

const DiscordLink = styled.a`
	background-color: ${props => props.theme.colors.accentDim};
	font-size: 4.5rem;
	font-weight: 800;
	padding: 0.75rem 1.75rem;
	cursor: pointer;
	&:hover {
		filter: brightness(1.2);
	}
	&:active {
		filter: brightness(1.4);
		transition: none;
	}
	transition: 0.1s linear all;
	text-align: center;
`

const SupportLink = styled(DiscordLink)` 
	background-color: ${props => props.theme.colors.altAccent};
`

export default Dashboard;
