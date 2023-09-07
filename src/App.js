import './App.css';
import Navbar from './components/NAvbar';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" component={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}


export default App;
