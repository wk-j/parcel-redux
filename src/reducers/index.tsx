import { combineReducers } from "redux"
import { Action, App1State, State } from "../actions"

function app1Reducer(state: App1State, action: Action): App1State {
    if (action.type === "UpdateCount") {
        return { count: action.value }
    }
    return { count: 1 }
}

export const reducers = combineReducers<State>({
    app1: app1Reducer
})
