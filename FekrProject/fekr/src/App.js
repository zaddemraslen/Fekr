import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Errpage from "./pages/errPage/ErrPage";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {


  return <Router>
  <Routes>
    
    <Route exact path="/" element={<Home/>}></Route>

    <Route path="/Login" element={<Login/>}></Route>
    
    <Route path="/register" element={<Register/>}></Route>
    
    <Route path="/profile/" element={<Profile/>}></Route>

    <Route path="*" element={<Errpage/>}></Route>

  </Routes>
</Router>
}

export default App;

//TODO Indexer les routes 
