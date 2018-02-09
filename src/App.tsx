import * as React from "react";
import { connect, Dispatch } from "react-redux";
import { State, updateCount } from "./actions";

type ConnectedProps = {
    count: number
}

type ConnectedDispatch = {
    updateCount: (count: number) => void
}

type Props = { title: string }

export class App extends React.Component<Props & ConnectedProps & ConnectedDispatch, {}> {
    constructor(props) {
        super(props)
    }

    public render() {
        return (
            <div>
                <h1 onClick={this.click}> {this.props.title} {this.props.count}</h1>
            </div>
        );
    }

    private click = (e) => {
        this.props.updateCount(this.props.count + 1)
    }
}

const mapStateToProps = (state: State, props: Props) => ({
    count: state.app1.count
})

const mapDispatchToProps = (dp: Dispatch<State>): ConnectedDispatch => ({
    updateCount: (count) => dp(updateCount(count))
})

export const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)
