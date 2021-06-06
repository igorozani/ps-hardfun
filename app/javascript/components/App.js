import React, {Component} from 'react'
import { Route, Switch } from 'react-router-dom'
import PeriodicTable from '../components/PeriodicTable/PeriodicTable'
import Element from '../components/SingleElement/SingleElement'

class App extends Component {
    render() {
        return <Switch>
            <Route exact path="/table" component={PeriodicTable} />
            <Route exact path="/element" component={Element} />
        </Switch>
    }
}
export default App