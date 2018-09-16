import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'
import './sass/app.sass'
const app = document.getElementById('app')
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import store from './store'
import {Provider} from 'react-redux'


ReactDOM.render(
                <Provider store={store}>
                    <Router>
                        <Switch>
                            <Route path='/' exact component={App} />
                        </Switch>
                    </Router>
                </Provider>, app)