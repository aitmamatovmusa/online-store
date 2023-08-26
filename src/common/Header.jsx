import { Link } from "react-router-dom"
import { paths } from "../router"

function Header() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to={paths.home} className="text-white text-xl font-semibold">Online Store</Link>
        <a href="#" ></a>
        <ul className="flex space-x-4">
          <li>
            <Link to={paths.home} className="text-white hover:text-gray-300">Home</Link>
          </li>
          <li>
            <Link to={paths.cart} className="text-white hover:text-gray-300">Shopping cart</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header