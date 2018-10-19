import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from './Dashboard';
import { SearchByCityName } from './SearchByCityName';

class Content extends Component {
	render() {
		return (
            <Switch>
                <Route path="/" exact component={ Dashboard }></Route>
                <Route path="/search" component={ SearchByCityName }></Route>
            </Switch>
		);
	}
}
export default Content;