// ✅
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import pages 
import Search from './pages/Search';
import Saved from './pages/Saved';
import NoMatch from './pages/NoMatch';
// import components
import Nav from './Components/Nav';

function App() {
	return (
		<Router>
			<div>
				<Nav />
				<Switch>
					<Route exact path="/">
						<Search />
					</Route>
					<Route exact path="/search">
						<Search />
					</Route>
					<Route exact path="/saved">
						<Saved />
					</Route>
					<Route>
						<NoMatch />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
