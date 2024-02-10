import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route,Link,Navigate,NavLink} from 'react-router-dom'
import Home from './Home';
import AboutUs from './AboutUs'
import Page404 from './Page404';

// Desktop/Express/rout/rout-demo

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
        <div className="navbar">
        <NavLink className="nav-bar-link" to ="/Home">Home</NavLink>
        <NavLink className="nav-bar-link" to ="/AboutUs">About</NavLink>
        </div>
        <Routes>
          <Route path ="/home" element={<Home />} />
          <Route path ="/aboutUs" element={<AboutUs />} />
          {/* <Route path ="/*" element={ <Navigate to = "/" />} /> */}
          <Route path ="/*" element={<Page404 />} />
        </Routes>
        </BrowserRouter>
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
