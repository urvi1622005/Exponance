import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Description from './Components/Description.jsx';
import Carousel from './Components/Carousel.jsx';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Description />} />  
        <Route path="/" element={<Carousel />} />
      </Routes>
    </Router>
  );
}

export default App;
