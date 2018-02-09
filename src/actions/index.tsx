import { Dispatch } from "react-redux";

export type App1State = {
    count: number
}

export type State = {
    app1: App1State
}

export type Action =
    | { type: "UpdateCount", value: number }
    | { type: "Action2", value?: string }

const runAction = (dp: Dispatch<{}>, action: Action) => dp(action);

export const updateCount = (count: number) => (dp) => {
    console.log("updateCount")
    runAction(dp, { type: "UpdateCount", value: count })
}