import { Provider, connect, Dispatch } from "react-redux"
import { createStore, Store, combineReducers } from "redux"
import * as React from "react"
import * as ReactDOM from "react-dom"
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";
import { State, updateCount } from "./actions";
import { reducers } from "./reducers";
import { ConnectedApp, App } from "./App";

declare var module;

const defaultState = {
    app1: { count: 0 }
}

export default function configureStore(initialState) {
    const store: Store<State> = createStore(reducers, initialState, applyMiddleware(thunk))

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('./reducers', () => {
            const nextRootReducer = require('./reducers/index');
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}

let store = configureStore(defaultState);

let root =
    <Provider store={store}>
        <ConnectedApp title="Hello, world!" />
    </Provider>

var el = document.getElementById("app");
ReactDOM.render(root, el);