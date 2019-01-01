import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';

import Layout from './Layouts/Layout';
import Main from './Pages/Main';
import Football from './Pages/Football';
import Basketball from './Pages/Basketball';
// import SignUp from './Pages/SignUp';

const app = document.getElementById('root');


ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={Layout}>
			<IndexRoute component={Main} />
			<Route path="/football" component={Football}></Route>
			<Route path="/basketball" component={Basketball}></Route>
		</Route>
	</Router>,
	app);