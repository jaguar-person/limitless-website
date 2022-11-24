import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { StoreProvider } from 'rusty-web/src/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<StoreProvider orgId={'3'}>
		<App />
	</StoreProvider>
)
