import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';

import { useStoreService } from 'rusty-web/src/store';
import useLoadMyInfo from 'rusty-web/src/hooks/useLoadMyInfo';
import theme from './theme'
import ErrorBoundary from 'rusty-web/src/component/ErrorBoundary';
import Spinner from 'rusty-web/src/component/Spinner';
import Topbar from './component/Topbar';
import PrivateRoute from 'rusty-web/src/component/PrivateRoute';
import Dashboard from './pages/Dashboard';
import ServiceAuth from 'rusty-web/src/pages/Auth';
import Leaderboards from 'rusty-web/src/pages/Leaderboards';
import LinkAccounts from './pages/Account/LinkAccounts';

import RustyAlert from "rusty-web/src/component/RustyAlert";
import RustyNotification from "rusty-web/src/component/RustyNotification";

const Support = React.lazy(() => import('rusty-web/src/pages/Support'));
const Account = React.lazy(() => import('rusty-web/src/pages/Account'));

const App = () => {
	const { state: { authorized, me, popup }} = useStoreService();
	useLoadMyInfo();

	return (
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<SiteWrapper>
					<ErrorBoundary>
						<Topbar />
						<React.Suspense fallback={<Spinner />}>
							<ErrorBoundary>
								<Routes>
									<Route index element={<Dashboard />} />
									<Route path="leaderboards" element={<Leaderboards />} />
									<Route path="/service-auth/:service" element={<ServiceAuth />}/>
									<Route element={<PrivateRoute authorized={authorized} me={me} />}>
										<Route path="support" element={<Support />} />
										<Route path="account/*" element={<Account linkAccounts={LinkAccounts} />} />
									</Route>
									<Route exact path='/link/' element={<Navigate to={'/account/links'} />} />
									<Route path="*" element={<Navigate to='' replace />}/>
								</Routes>
							</ErrorBoundary>
						</React.Suspense>
					</ErrorBoundary>

					{ popup && <RustyAlert border popup={popup} >{popup.message}</RustyAlert>}
					<RustyNotification />
				</SiteWrapper>
			</ThemeProvider>
		</BrowserRouter>
	);
}

const SiteWrapper = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	color: ${props => props.theme.colors.text};
	background-color: ${props => props.theme.colors.backgroundDim};
	overflow: hidden;
`;

export default App;
