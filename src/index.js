import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppWrapper from './AppWrapper';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './store/reducers';

const store = createStore(reducers);

ReactDOM.render(
	<Provider store={store}>
		<AppWrapper>
			<App />
		</AppWrapper>		
	</Provider>,
	document.getElementById('root')
);

registerServiceWorker();
