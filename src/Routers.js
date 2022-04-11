import { 
    BrowserRouter as Router, 
    Routes,
    Route
} from "react-router-dom";
import Cart from "./Pages/Cart/Cart";
import Favourites from "./Pages/Favourites/Favourites";
import Profile from "./Pages/Profile/profile";
import TopUsers from "./Pages/TopUsers/TopUsers";

export default function Routers() {
    return(
        <Router>
            <Routes>
                <Route path="/" element = {<Profile />}/>
                <Route path="/topUsers" element={<TopUsers/>}/>
                <Route path="/favourites" element={<Favourites/>}/>
                <Route path="/cart" element={<Cart/>}/>
            </Routes>
        </Router>
    )
}