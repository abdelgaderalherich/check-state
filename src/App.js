
import { BrowserRouter, Route, Link } from "react-router-dom";
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Profile from './Component/Profile'
import About from './Component/About'
function App(){
    return(
        <div>
            <BrowserRouter>
            <Navbar/>
            <Route path='/' exact component={Home}/>
            <Route path='/profile' component={Profile}/>
            <Route path='/About' component={About}/>
            </BrowserRouter>
            </div>
    )
}
export default App 