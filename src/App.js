import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Home from './Home';
import AboutUs from './AboutUs'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
        <Link to ="/Home">Home</Link>
        <Link to ="/AboutUs">About</Link>
      
        <Routes>
          <Route path ="/Home" element={<Home />} />
          <Route path ="/AboutUs" element={<AboutUs />} />
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
