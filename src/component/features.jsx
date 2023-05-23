import Root from "../layout/rootLayout";
import "./features.css"
import { createBrowserRouter,createRoutesFromElements,Route, RouterProvider, } from "react-router-dom";
import Bookmarking from "./pages/bookmarking";
import Searching from "./pages/searching";
import Sorting from "./pages/sorting";
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />}>
            <Route index element={<Bookmarking/>}/>
            <Route path="search" element={<Searching />}/>
            <Route path="sort" element={<Sorting />}/>
        </Route>
    )
)
function Features() {
    return ( 
        <div className="features">
            <div className="feature">
                <h2>Features</h2>
                <p> Our aim is to make it quick and easy for you to access your favourite websites. 
                Your bookmarks sync between your devices so you can access them on the go.</p>
            </div>
            <RouterProvider router={router} />
        </div>
        
     );
}

export default Features;