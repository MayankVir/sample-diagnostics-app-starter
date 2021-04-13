import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import SysData from './components/SysData'
import SysManager from './components/SysManager'
import SysState from './components/SysState'
import './App.css'
import Navbar from './components/Navbar'

export default function App() {
    return (
	<Router>
		<div className="App">
			{/* <Sidebar /> */}
			<Navbar />
			<Switch>
				<Route path="/" exact component={SysData}/>
				<Route path="/diagnostic_manager" component={SysManager}/>
				<Route path="/state" component={SysState}/>
			</Switch>
		</div>
    	</Router>
    );
}