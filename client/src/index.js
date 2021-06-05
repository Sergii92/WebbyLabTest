import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import Modal from 'react-modal';
import { Provider } from 'react-redux';

import { store } from './core/store';
Modal.setAppElement('#root');

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
