import React from 'react';
import ReactDOM from 'react-dom';
// import {Router, Route, hashHistory} from 'react-router';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// <Route path="/dashboard" component={Dashboard} />
		// <Route path="/settings" component={Settings} />
		// <Route path="/analytics" component={Analytic} />
		// <IndexRoute component={MainApp} />

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Home from './components/Home.jsx';
import ParentComponent from './components/UILayout/Parent.jsx';
import Login from './components/Login.jsx';
import LandingPage from './components/LandingPage.jsx';
import MyProfile from './components/MyProfile/MyProfile';
import Hyperledger from './components/Hyperledger/Hyperledger';

import {Route, Router, IndexRoute, hashHistory} from 'react-router';
ReactDOM.render(
	<MuiThemeProvider>
	<Router history ={hashHistory} >
	<Route path="/landingPage" component={LandingPage} />
	<Route path="/login" component={Login} />
	
	
	
	
	<Route path="/" component={ParentComponent}>
	<Route  path="/myProfile" component={MyProfile}  />
	<Route path="/hyperledger" component={Hyperledger} />
		<IndexRoute component={Home} />
		</Route>
	</Router>
	</MuiThemeProvider>,
 document.getElementById('mountapp'));