import React from "react";
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import todoApp from './reducers';

let store = createStore(todoApp);
console.log(store.getState());
let app = document.getElementById('app');
ReactDOM.render(
	<Provider store={store}  >
		<App  />
	</Provider>,
    app
);
