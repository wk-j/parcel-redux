import * as React from "react"
import * as ReactDOM from "react-dom"
import { connect, Dispatch, Provider } from "react-redux"
import { combineReducers, createStore, Store } from "redux"
import { applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { State, updateCount } from "./actions"
import { App, ConnectedApp } from "./App"
import { reducers } from "./reducers"

declare var module

const defaultState = {
    app1: { count: 0 }
}

export default function configureStore(initialState) {
    const localStore: Store<State> = createStore(reducers, initialState, applyMiddleware(thunk))

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept("./reducers", () => {
            const nextRootReducer = require("./reducers/index")
            localStore.replaceReducer(nextRootReducer)
        })
    }
    return localStore
}

const store = configureStore(defaultState);

const root =
    <Provider store={store}>
        <ConnectedApp title="Hello, world!" />
    </Provider>

const el = document.getElementById("app")
ReactDOM.render(root, el)
