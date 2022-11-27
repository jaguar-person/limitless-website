import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useStoreService } from 'rusty-web/src/store/index.jsx';
import { Avatar, Hamburger } from 'rusty-web/src/component/Common.jsx';
import { loginLogout } from 'rusty-web/src/util/tools';

const Topbar = () =>  {
	const { state: { me, orgId }, clearAuthorization } = useStoreService();
	const [showNav, setShowNav] = React.useState(false);

	useEffect(() => {
		const hideNav = () => setShowNav(false);
		if (showNav) {
			document.addEventListener('click', hideNav)
		} else {
			document.removeEventListener('click', hideNav)
		}
		return(() => document.removeEventListener('click', hideNav))
	}, [showNav])

	return (
		<TopbarContainer showNav={showNav}>
			<Link to=""><span>Limitless</span></Link>
			<nav>
				<TopbarLink to="leaderboards">Leaderboards</TopbarLink>
				<TopbarLink as='a' href="https://store.limitlessrust.com" >Store</TopbarLink>
				<TopbarLink to="support" >Support</TopbarLink>
				{ me?.linkedAccounts && <TopbarLink to="account/tickets" >My Tickets</TopbarLink> }
				<ProfileLink me={me} orgId={orgId} logout={clearAuthorization} />
			</nav>
			<Hamburger onClick={(e) => {e.stopPropagation(); setShowNav(bool => !bool)}} />
		</TopbarContainer>
	);
}

const ProfileLink = ({ me, orgId, logout }) => {
	if (me?.linkedAccounts) {
		return (
			<>
				{ me.permissions?.includes('UI_SHOW_ADMIN_STUFF') &&
					<TopbarLink as='a' href={`${window.location.origin.replace('limitlessrust', 'rusticated')}/gaffer`} rel="noreferrer noopener" title="Staff">
						Staff
					</TopbarLink>
				}
				<TopbarLink to="/account" title="View your account" >
					Account
					<Avatar color={me.roleColor} src={me.linkedAccounts.STEAM.avatar} />
				</TopbarLink>
			</>
		)
	}

	return (
		<TopbarLink as='div' title="Sign in through steam" onClick={() => loginLogout(orgId, false, logout, null)}>
			Sign In
		</TopbarLink>
	)
}

const TopbarContainer = styled.section`
	background-color: ${props => props.theme.colors.topbar};
	height: 7.6rem;
	display: flex;
	flex-shrink: 0;
	align-items: center;
	padding: 0 2rem;
	& > a > img {
		height: 3.75rem;
	}
	& > nav {
		margin-left: auto;
		display: flex;
		gap: 1rem;
		${props => props.theme.mobile} {
			display: ${props => props.showNav ? 'flex' : 'none' };
			position: absolute;
			top: 7.6rem;
			left: 0;
			right: 0;
			padding: 2rem;
			flex-direction: column;
			background-color: ${props => props.theme.colors.topbar};
			box-shadow: 0 0.5rem 1rem 0.125rem #151d24;
		}
	}
	span {
		font-size: 5rem;
		text-transform: uppercase;
		font-weight: 900;
	}
	box-shadow: 0 0 1.5rem 0.25rem #151d24;
	z-index: 10;
	user-select: none;
`

const TopbarLink = styled(Link)`
	display: flex;
	align-items: center;
	gap: 2rem;
	background-color: ${props => props.theme.colors.link};
	padding: 0.5rem 2rem;
	font-size: 3rem;
	font-style: italic;
	font-weight: 700;
	cursor: pointer;
	&:hover {
		filter: brightness(1.2);
	}
	&:active {
		filter: brightness(1.4);
		transition: none;
	}
	transition: 0.1s linear all;
`

export default Topbar
