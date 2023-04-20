import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/NavBar";
import AllProducts from "./Components/AllProducts";
import LandingPage from "./Components/LandingPage";
import { Routes,Route } from "react-router-dom";


function App() {
	return (
		<div className="App">
			<header>
				<NavBar/>
			</header>
      <main>
        <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='allProduct' element={<AllProducts/>}/>
        </Routes>
      </main>
		</div>
	);
}

export default App;
