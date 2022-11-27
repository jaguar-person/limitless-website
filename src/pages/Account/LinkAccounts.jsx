// Module imports.
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faCheck, faTimes, faSync, faExternalLinkAlt, faPencilAlt, faPlus } from '@fortawesome/free-solid-svg-icons';
import { faDiscord, faSteam } from '@fortawesome/free-brands-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';

import { useStoreService } from 'rusty-web/src/store';
import { Capitalize, linkAccount } from 'rusty-web/src/util/tools';
import RustyAlert from 'rusty-web/src/component/RustyAlert';
import { RustyHeader, RustyRow, RustyScroll, RustyAction } from 'rusty-web/src/component/RustyStyles';
import useScroll from 'rusty-web/src/hooks/useScroll';
import useApi from 'rusty-web/src/hooks/useApi';
import { useSocketSubscription, useSocketData } from 'rusty-web/src/hooks/socket';
import api from "rusty-web/src/util/api";

const serviceRenderHelpers = {
    STEAM: {
        icon: faSteam,
        link: account => `https://steamcommunity.com/profiles/${account.id}`,
        avatar: account => account.avatar
    },
    DISCORD: {
        icon: faDiscord,
        link: account => `https://discordapp.com/users/${account.id}`,
        avatar: ({ id, avatar: hash }) => `https://cdn.discordapp.com/avatars/${id}/${hash}.png`
    },
}


const rewards = {
    steam: [
        ['1x Steam Kit', 'https://cdn.rusticated.com/rewards/KitSteamTwo.png']
    ],
    discord: [
        ['1x Discord Kit', 'https://cdn.rusticated.com/rewards/KitDiscordTwo.png']
    ],
    nitro: [
        ['1x Supply Drop', 'https://cdn.rusticated.com/rewards/SupplyDrop.png']
    ],
}

const LinkAccounts = () => {
    const { state: { me: user }, setPopup } = useStoreService();
    const { scroll, scrollRef } = useScroll({});
    const [ dynamicService, setDynamicService] = useState(rewards[0]);
    let { data: unlinkStatuses, callApi: refreshUnlinkStatuses } = useApi({ url: 'unlink-requests/statuses' });
    unlinkStatuses = unlinkStatuses || {};

    useSocketSubscription('unlinkRequests:userId');
    useSocketData('refreshUnlinkRequestStatuses', () => {
        refreshUnlinkStatuses();
    }, [refreshUnlinkStatuses]);

    useEffect(() => {
        const interval = setInterval(() => setDynamicService(service => Object.keys(rewards)[Object.keys(rewards).indexOf(service) + 1]), 1500);
        return () => clearInterval(interval);
    }, []);

    const submitUnlink = async (service) => {
        service = service.toUpperCase();
        setPopup({
            message: 'Unlinks are subject to admin approval to prevent spam and abuse.\nAre you sure you want to submit an unlink request for this account?',
            confirmText: `Unlink ${Capitalize(service.toLowerCase())}`,
            confirm: async () => {
                await api.post('/unlink-requests', { service });
                await refreshUnlinkStatuses();
            },
            confirmParams: []
        })
    }

    const cancelUnlink = async (service) => {
        service = service.toUpperCase();
        setPopup({
            message: 'Are you sure you want to cancel this unlink request? You will have to wait 15 minutes to submit another.',
            confirmText: `Cancel ${Capitalize(service.toLowerCase())} unlink request`,
            confirm: async () => {
                await api.post('/unlink-requests/cancel', { service });
                await refreshUnlinkStatuses();
            },
            confirmParams: []
        })
    }

    const resendRewards = async () => {
        setPopup({
            message: 'Are you sure you want to resend your linking awards? You should use this if any of your rewards are missing. You can only request this every 5 minutes.',
            confirmText: 'Resend rewards',
            confirm: async () => {
                await api.post('/users/me/resend-rewards');
            },
            confirmParams: []
        })
    }


    return (
        <>
            <RustyHeader>
                Linked Accounts
                <RustyAction $gapleft title="Fix any missing linking rewards by resending them to the server" onClick={resendRewards}>
                    Resend Rewards
                    <FontAwesomeIcon icon={faSync} />
                </RustyAction>
            </RustyHeader>
            <RustyScroll scroll={scroll} ref={scrollRef} >
                <Service service="steam" account={user?.linkedAccounts["STEAM"]} unlinkStatus={unlinkStatuses["STEAM"]} submitUnlink={submitUnlink} cancelUnlink={cancelUnlink}/>
                <Service service="discord" account={user?.linkedAccounts["DISCORD"]} unlinkStatus={unlinkStatuses["DISCORD"]} submitUnlink={submitUnlink} cancelUnlink={cancelUnlink}/>
               {/* <NitroService account={user.linkedAccounts["DISCORD"]} />*/}
            </RustyScroll>
        </>
    )
}

const linkStatusIcons = {
    'Cancel': faTimes,
    'Unlink': faTimes,
    'Link': faLink,
    'Linked': faCheck,
    'Edit': faPencilAlt,
    'Add': faPlus,
    'Added': faCheck,
    'PENDING': faClock,
    'DENIED': faTimes,
    'CANCELLED': faTimes
};

const Service = ({ service, account, unlinkStatus = '', submitUnlink, cancelUnlink }) => {
    const [unlinkHovered, setUnlinkHovered] = React.useState(false);
    const linked = Boolean(account);
    account = account || {};

    const follower = account.followedOrgs && account.followedOrgs['3'];

    let linkStatus = linked ? (unlinkHovered ? 'Unlink' : 'Linked') : 'Link'
    if (unlinkStatus && unlinkStatus !== 'APPROVED') {
        linkStatus = unlinkStatus;

        if (linkStatus === 'PENDING' && unlinkHovered) {
            linkStatus = 'Cancel'
        }
    }

    function onButtonClick() {
        if (linkStatus === 'Link') {
            if (service === 'twitch') {
                window.open('/twitch', '_blank');
            }
            linkAccount(service)
        } else if (linkStatus === 'Unlink') {
            submitUnlink(service);
        } else if (linkStatus === 'Cancel') {
            cancelUnlink(service);
        }
    }

    return (
        <RustyRow>
            <ServiceHeader>
                <ServiceIcon service={service} icon={serviceRenderHelpers[service.toUpperCase()].icon} />
                <div>
                    {service === 'steam' ? 'Steam Group' : service}
                    <ServiceUserInfo>
                        <ServiceUsername title="Click to copy">{account.name && <div onClick={() => navigator.clipboard.writeText(account.name)}/>}{account.name}</ServiceUsername>
                        {follower && <ServiceFollowerStatus>follower</ServiceFollowerStatus>}
                    </ServiceUserInfo>
                </div>
                <LinkButtonSideInfo>
                    {!linked && unlinkStatus === 'APPROVED' && 'Unlink request approved'}
                    {unlinkStatus === 'DENIED' && 'Unlink request denied by admin. You may resubmit your request in 3 days'}
                    {unlinkStatus === 'PENDING' && 'Unlink request pending admin approval'}
                    {unlinkStatus === 'CANCELLED' && 'You have cancelled this unlink request. Please wait 15 mintues to request again'}
                </LinkButtonSideInfo>
                { service === 'steam' ?
                    <ServiceActionLink linkStatus={follower ? 'Boosting' : 'Boost'} href="/steam" target="_blank" rel="noreferrer noopener">
                        { follower ? 'Joined' : 'Join' }
                        <FontAwesomeIcon icon={follower ? faCheck : faExternalLinkAlt} />
                    </ServiceActionLink> :
                    <ServiceAction linked={linked} linkStatus={linkStatus} onClick={onButtonClick} onMouseEnter={() => setUnlinkHovered(true)} onMouseLeave={() => setUnlinkHovered(false)}>
                        {linkStatus.toLowerCase()}
                        <FontAwesomeIcon icon={linkStatusIcons[linkStatus]} />
                    </ServiceAction>
                }
            </ServiceHeader>
            <ServiceContent>
                Rewards: { rewards[service].length > 0 && rewards[service].map(reward =>
                <Reward key={reward[0]} src={reward[1]} alt={reward[0]} title={reward[0]}/>
            )}
            </ServiceContent>
        </RustyRow>
    );
}

const NitroService = ({ account }) => {
    account = account || {};
    const supporter = Boolean(account.supportedOrgs && account.supportedOrgs['3']);
    const supporterStatus = supporter ? 'Boosting' : 'Boost';

    return (
        <RustyRow>
            <ServiceHeader>
                <ServiceIcon service="nitro" icon={serviceRenderHelpers.DISCORD.icon} />
                <div>
                    {'Nitro'}
                    <ServiceUserInfo>
                        <ServiceUsername title="Click to copy">{account.name && <div onClick={() => navigator.clipboard.writeText(account.name)}/>}{account.name}</ServiceUsername>
                        {supporter && <ServiceFollowerStatus>booster</ServiceFollowerStatus>}
                    </ServiceUserInfo>
                </div>
                <LinkButtonSideInfo>
                    {!supporter && 'Become a Nitro booster in the main Rusticated guild to unlock'}
                </LinkButtonSideInfo>
                <ServiceActionLink linked={supporter} linkStatus={supporterStatus} href="/discord" target="_blank" rel="noreferrer noopener">
                    {supporterStatus}
                    <FontAwesomeIcon icon={supporter ? faCheck : faExternalLinkAlt} />
                </ServiceActionLink>
            </ServiceHeader>
            <ServiceContent>
                Rewards: { rewards.nitro?.length > 0 && rewards.nitro?.map(reward =>
                <Reward key={reward[0]} src={reward[1]} alt={reward[0]} title={reward[0]}/>
            )}
            </ServiceContent>
        </RustyRow>
    );
}

const ServiceHeader = styled.div`
	display: flex;
	align-items: center;
	${props => !props.nopad && `padding-bottom: 0.75rem;`}
	font-size: 2.25rem;
	text-transform: capitalize;
	font-weight: bold;
	& > svg:last-child {
		margin-left: auto;
		color:  ${props => props.theme.colors.subtext};
	}
`;

const ServiceIcon = styled(FontAwesomeIcon)`
	font-size: 1.8em;
	margin-right: 1.5rem; 
	color: ${props => props.theme.colors.brands[props.service]};
`;

const ServiceUserInfo = styled.div`
	display: flex;
	align-items: center;
	margin-top: 0.25em;
	font-size: 1.7rem;
	font-weight: normal;
	text-transform: none;
`;

const ServiceUsername = styled.div`
	color: ${props => props.theme.colors.subtext};
	user-select: all;
	position: relative;
	cursor: pointer;
	& > div {
		position: absolute;
		left: -0.25rem;
		right: -0.25rem;
		top: -0.25rem;
		bottom: -0.25rem;
		background-color: ${props => props.theme.colors.backgrounds[3]};
		display: flex;
		justify-content: center;
		align-items: center;
		&:hover {
			opacity: 0;
		}
	}
`;

const ServiceFollowerStatus = styled.div`
	color: ${props => props.theme.colors.positive};
	margin-left: 0.5em;
	font-size: 1.5rem;
	${props => props.theme.tablet} {
		display: none;
	}
`;

const LinkButtonSideInfo = styled.div`
	color: ${props => props.theme.colors.subbedtext};
	margin-left: auto;
	margin-right: 1.5em;
	font-size: 1.5rem;
	font-weight: normal;
	text-transform: none;
	& > a {
		color: ${props => props.theme.colors.positive};
	}
	${props => props.theme.tablet} {
		display: none;
	}
`;

const ServiceContent = styled.div`
	background-color: ${props => props.theme.colors.backgrounds[2]};
	padding: 0.75rem;
	font-weight: bold;
	display: flex;
	gap: 0.75rem;
`;

const linkStatusColors = (colors) => ({
    'Cancel': colors.negative,
    'Unlink': colors.negative,
    'Boost': colors.accent,
    'Boosting': colors.positive,
    'Link': colors.accent,
    'Linked': colors.positive,
    'Add': colors.accent,
    'Added' : colors.positive,
    'Edit' : colors.warning,
    'PENDING': colors.warning,
    'DENIED': colors.negative,
    'CANCELLED': colors.negative
});

const ServiceAction = styled(RustyAction)`
	cursor: ${props => props.linkStatus === 'Link' || props.linkStatus === 'Unlink' || props.linkStatus === 'Add' || props.linkStatus === 'Edit' ? 'pointer' : 'default'};
	border-color: ${({ theme, linkStatus }) => linkStatusColors(theme.colors)[linkStatus]};
	text-transform: capitalize;
	user-select: none;
	min-width: 7em;

	&:hover {
		background-color: ${props => (props.linkStatus !== 'DENIED' || props.linkStatus !== 'PENDING') && props.theme.colors.backgrounds[7]};
	}
	${props => props.theme.tablet} {
		margin-left: auto;
	}
`;

const ServiceActionLink = styled.a`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 2rem;
	padding: 0.75rem;
	gap: 0.75rem;
	font-weight: bold;
	height: max-content;

	cursor: pointer;
	border: 2px solid ${({ theme, linkStatus }) => linkStatusColors(theme.colors)[linkStatus]};
	text-transform: capitalize;
	user-select: none;
	min-width: 7em;

	&:hover {
		background-color: ${props => props.theme.colors.backgrounds[7]};
	}
	${props => props.theme.tablet} {
		margin-left: auto;
	}
`;

const Reward = styled.img` 
	background-color: ${props => props.theme.colors.backgrounds[3]};
	&:hover {
		background-color: ${props => props.theme.colors.backgrounds[4]};
	}
	height: 6.5rem;
	width: 6.5rem;
`


export default LinkAccounts;