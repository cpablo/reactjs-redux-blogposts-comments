import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import thunk from 'redux-thunk';

//Both reducers and middleware are needed when creating redux store.
const reduxStore = createStore(reducers, applyMiddleware(thunk)); 

//Provider will now be the parent container (above app component) when using redux.
//Pass the created store as property to provider
ReactDOM.render(
    <Provider store={reduxStore}> 
        <App/>
    </Provider>, 
    document.querySelector('#root'));