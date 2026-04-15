import { Link } from 'react-router-dom'
import logo from '../../assets/image/logo_no_bg_v2.png'

function NavBar() {
  return (
    <div className="sticky top-0 z-50 bg-base-100 shadow-md">

      <div className="navbar container mx-auto px-4">

        {/* LEFT */}
        <div className="navbar-start">

          {/* Mobile Menu */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>

            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-xl mt-3 w-56 p-3 shadow-lg z-[1]">
              <li><a>Home</a></li>
              <li><a>Investor License</a></li>
              <li><a>Visa Service</a></li>
              <li><a>General Service</a></li>
              <li><a>About Us</a></li>
              <li><a>Contact</a></li>
            </ul>
          </div>

          {/* Logo */}
          <a className="flex items-center gap-2">
            <img className="h-18 w-auto" src={logo} alt="Logo" />
          </a>

        </div>

        {/* CENTER */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-medium gap-2">

            <li><Link to="/">Home</Link></li>

            <li>
              <details>
                <summary>Services</summary>
                <ul className="p-2 bg-base-100 w-48 rounded-xl shadow-md">
                  <li><a>Visa Services</a></li>
                  <li><a>General Services</a></li>
                  <li><a>Business Services</a></li>
                  <li><a>Investor Services</a></li>
                </ul>
              </details>
            </li>

            <li><Link to="/investorlicense">Investor License</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/addtocard">
            ADD TO CARD
            </Link></li>

          </ul>
        </div>

        {/* RIGHT */}
        <div className="navbar-end gap-3 bg-gradient-to-r from-[#16166b] to-[#1105f3] bg-clip-text text-transparent">

          <a className="  btn btn-ghost hidden sm:inline-flex">
            Login
          </a>
<Link to="/contact" className="px-6 py-3 rounded-md text-white font-semibold 
bg-gradient-to-r from-[#16166b] to-[#1105f3] 
hover:from-[#1105f3] hover:to-[#16166b] 
transition-all duration-300">
  Contact US
</Link>

        </div>

      </div>
    </div>
  )
}

export default NavBar