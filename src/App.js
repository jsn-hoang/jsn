import './App.css';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import About from './components/About';
import Projects from './components/Projects';
import Credits from './components/Credits';
import Loader from './components/Loader';
import { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return loading ? (
    <Loader></Loader>
  ) : (
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
