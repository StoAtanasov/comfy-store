import { BsCart3, BsMoonFill, BsSunFill } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-base-200">
      <nav className="navbar align-element">
        <div className="navbar-start">
          {/* LOGO */}
          <NavLink to="/" className="hidden lg:flex btn btn-primary text-3xl items-center">
            C
          </NavLink>
          {/* TO DO DROPDOWN */}
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal">
            {/* TO DO NAV LINKS COMPONENT */}
            nav links
          </ul>
        </div>
        <div className="navbar-end"></div>
      </nav>
    </nav>
  )
}
export default Navbar