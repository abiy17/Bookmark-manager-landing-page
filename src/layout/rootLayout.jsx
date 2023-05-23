import { NavLink,Outlet } from "react-router-dom";
import "./root.css"
function Root() {
    return ( 
        <div className="root">
            <div className="navlinks">
                <NavLink className="navlink" to="/">Simple Bookmarking</NavLink>
                <NavLink className="navlink" to="search">Speedy Searching</NavLink>
                <NavLink className="navlink" to="sort">Easy Sharing</NavLink>
            </div>
            <Outlet />
        </div>
        
     );
}

export default Root;

  