import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import LocationAdd from './components/LocationAdd/LocationAdd';
import LocationShow from './components/LocationShow/LocationShow';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/add/location" element={<LocationAdd/>}></Route>
          <Route path="/show/location" element={<LocationShow/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
