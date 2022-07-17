import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from './components/Search'
import Home from "./components/Home";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/react-project-2' exact element={<Home />} ></Route>
        <Route path='/Search' exact element={<Search />}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;