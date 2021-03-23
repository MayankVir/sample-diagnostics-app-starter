import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Sidebar from './components/Sidebar'
import SysData from './components/SysData'
import SysManager from './components/SysManager'
import SysState from './components/SysState'
import './App.css'

export default function App() {
    return (
	<Router>
		<div className="App">
			<Sidebar />
			{/* <div className="content"> */}
			<div className="content">
				<div class="header">
					<h1>SAMPLE DIAGNOSTICS APP</h1>
				</div>
				<Switch>
					<Route path="/" exact component={SysData}/>
					<Route path="/diagnostic_manager" component={SysManager}/>
					<Route path="/state" component={SysState}/>
				</Switch>
			</div>
				{/* <div className="child">
					<Switch>
						<Route path="/" exact component={SysData}/>
						<Route path="/diagnostic_manager" component={SysManager}/>
						<Route path="/state" component={SysState}/>
					</Switch>
				</div> */}
			{/* </div> */}
		</div>
    	</Router>
    );
}