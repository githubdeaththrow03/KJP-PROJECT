import {Routes, Route} from 'react-router-dom';
import Home from "./Views/Home/Home";
import Gallery from "./Views/Gallery/Gallery";
import About from "./Views/About/About";
import Registration from './Views/Registration/Registration';


function App() {
  return (
    <div className="App">
      <About/>
      <Routes>
        <Route exact path="/home" element={Home} /> 
        <Route path="/gallery" elemet={Gallery} /> 
        <Route path="/registration" elemet={Registration} /> 
        <Route path="/about" element={About} /> 
      </Routes>
    </div>
  );
}

export default App;