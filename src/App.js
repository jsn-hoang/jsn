import './App.css';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Intro></Intro>
      <About></About>
    </div>
  );
}

export default App;
