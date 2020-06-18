import React from 'react';
import { hot } from 'react-hot-loader';
import './styles/App.scss';
import Venue from './pages/Venue/Venue';
import Accommodation from './pages/Accommodation';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home/Home';
import Rsvp from './pages/Rsvp/Rsvp';
import NavBar from './components/NavBar/NavBar';

export const App = () => (
	<div className="app-container">
		<NavBar />
		<main className="app">
			<div className="bg">
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/Venue" component={Venue} />
					<Route path="/Accommodation" component={Accommodation} />
					<Route path="/Rsvp" component={Rsvp} />
					<Route component={Home} />
					<Redirect to="/" />
				</Switch>
			</div>
		</main>
	</div>
);

export default App;
