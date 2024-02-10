import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route,Link,Navigate} from 'react-router-dom'
import Home from './Home';
import AboutUs from './AboutUs'
import Page404 from './Page404';

// Desktop/Express/rout/rout-demo

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
        <Link to ="/Home">Home</Link>
        <Link to ="/AboutUs">About</Link>
      
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
