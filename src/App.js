import "./App.scss";
import HeroComponent from "./components/Hero/HeroComponent";
import Navbar from "./components/Layout/Navbar";
import Reviews from "./components/Reviews/Reviews";
import UpcomingShows from "./components/UpcomingShows/UpcomingShows";
function App() {
	return (
		<div className='app'>
			<Navbar />
			<HeroComponent />
			<UpcomingShows />
			<Reviews />
		</div>
	);
}

export default App;
