function Header() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <a href="#" className="text-white text-xl font-semibold">Online Store</a>
        <ul className="flex space-x-4">
          <li><a href="#" className="text-white hover:text-gray-300">Home</a></li>
          <li>
            <a href="#" className="text-white hover:text-gray-300 flex items-center">
              Shopping cart
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header