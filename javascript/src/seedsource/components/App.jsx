import React from 'react'
import CoreApp from '../../../../seedsource-core/javascript/src/seedsource/components/App'
import { store } from '../../../../seedsource-core/javascript/src/index'
import { selectMethod } from '../../../../seedsource-core/javascript/src/actions/variables'

export default class App extends React.Component {
    componentDidMount() {
        store.dispatch(selectMethod('function'))
    }

    render() {
        return (
            <React.Fragment>
                <CoreApp />
            </React.Fragment>
        )
    }
}
