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
        <Route exact path='/'>
          <Home /> 
        </Route>
        <Route path='/Search'>
          <Search />
        </Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;