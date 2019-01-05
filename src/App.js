import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/style.scss';

import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';

import Layout from './Layouts/Layout';
import Main from './Pages/Main';
import Football from './Pages/Football';
import Basketball from './Pages/Basketball';
import Cricket from './Pages/Cricket';
import Contacts from './Pages/Contacts';
import Tennis from './Pages/Tennis';
import Post from './Pages/Post';

const app = document.getElementById('root');


ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Layout}>
			<IndexRoute component={Main} />
			<Route path="football" component={Football}>
				<Route path=":postId" component={Post}/>
			</Route>
			<Route path="basketball" component={Basketball}></Route>
			<Route path="contacts" component={Contacts}></Route>
			<Route path="cricket" component={Cricket}></Route>
			<Route path="tennis" component={Tennis}></Route>
		</Route>
	</Router>,
	app);