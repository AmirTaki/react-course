import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Dashboard  () {
    return(
        <>
        <ul>
            <li><Link to = 'settings'>settings</Link></li>
            <li><Link to = 'profile'>profile</Link></li>
        </ul>
            yourWellcome dashboard
            <Outlet />
        </>
    )
}