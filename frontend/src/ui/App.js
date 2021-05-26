import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css"
import {Route, BrowserRouter, Switch} from 'react-router-dom'
import {Home} from './Home'
import {About} from "./About";

export function App() {
	return(
		<>
			<BrowserRouter>
				<Switch>
					<Route exact path='/react-challenge' component={Home} />
					<Route exact path='/about' component={About} />
				</Switch>
			</BrowserRouter>
		</>
	)

}