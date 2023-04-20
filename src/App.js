import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/NavBar";
import AllProducts from "./Components/AllProducts";

function App() {
	return (
		<div className="App">
			<header>
				<NavBar />
			</header>
      <main>
        <AllProducts/>
      </main>
		</div>
	);
}

export default App;
