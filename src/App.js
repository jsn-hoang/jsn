import './App.css';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import About from './components/About';
import Projects from './components/Projects';
import Credits from './components/Credits';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Intro></Intro>
      <About></About>
      <Projects></Projects>
      <Credits></Credits>
    </div>
  );
}

export default App;
