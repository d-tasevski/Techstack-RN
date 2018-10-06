/** @format */

import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './src/App';
import reducers from './src/reducers';
import { name as appName } from './app.json';

const store = createStore(reducers);

const Root = () => (
	<Provider store={store}>
		<App />
	</Provider>
);
AppRegistry.registerComponent(appName, () => Root);
