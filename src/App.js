import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/NavBar";
import AllProducts from "./Components/AllProducts";
import LandingPage from "./Components/LandingPage";
import { Routes,Route } from "react-router-dom";
import SinglePage from "./Components/SinglePage";
import Login from "./Components/Login";
import Electronic from "./Components/Electronic";
import Jewelry from "./Components/Jewel";
import MensClothing from "./Components/Men";
import WomenClothing from "./Components/Women";

function App() {
	return (
		<div className="App">
			<header>
				<NavBar/>
			</header>
      <main>
        <Routes>
        {/* <Route path='/' element={<LandingPage/>}/> */}
		<Route path='/login' element={<Login/>}/>
		<Route path='electronic' element={<Electronic/>}/>
		<Route path='jewel' element={<Jewelry/>}/>
		<Route path='men' element={<MensClothing/>}/>
		<Route path='women' element={<WomenClothing/>}/>
        <Route path='/' element={<AllProducts/>}/>
		<Route path='/products/:id' element={<SinglePage/>}/>
        </Routes>
		
      </main>
		</div>
	);
}

export default App;
