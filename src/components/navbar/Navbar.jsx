import "./navbar.css"
import {faBed, faCalendarDays, faPerson} from "@fortawesome/free-solid-svg-icons"


   const Navbar = () => {

   
  return (
    <div className="navbar">
        <div className="navContainer">
            <span className="logo">Devcodez</span>
            <div className="navItems" >
                <button className="navButton">Register</button>
                <button className="navButton">Login</button>
            </div>
        </div>

    </div>
  )
}

export default Navbar