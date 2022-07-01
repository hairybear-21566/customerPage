import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import reducers from './reducers';


import {createStore, applyMiddleware, compose} from 'redux';


const store = createStore(reducers, compose(applyMiddleware(thunk)))

//ReactDOM.render(<App/>,document.getElementById('root'))
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Provider store={store}><App tab="home" /></Provider>);
