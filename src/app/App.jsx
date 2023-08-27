import "./app.scss"

function App() {
  return (
    <>
      {/* Header */}
      <nav className="bg-gray-800 py-4 px-8">
        <div className="container mx-auhref flex items-center justify-between">
          <a href="#" className="text-white text-xl font-semibold">Online Store</a>
          <ul className="flex items-center space-x-4">
            <li className="header__product-item">
              <a href="#" className="text-white hover:text-gray-300">Home</a>
            </li>
            <li className="header__product-item">
              <a href="#" className="text-white hover:text-gray-300">
                <div className="relative py-2">
                  <div className="header__product-count t-0 absolute left-3">
                    <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">0</p>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="file: h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                  </svg>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* Categories */}
      <div className="bg-gray-100 p-8">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4">Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300">
              <h3 className="text-lg font-semibold">Something</h3>
            </div>
          </div>
        </div>
      </div>
      {/* Products */}
      <div className="bg-gray-100 p-4">
        <h2 className="text-2xl font-semibold text-center">Products</h2>
        <div className="mt-3 flex flex-wrap justify-center">
          <div
            className="max-w-sm rounded overflow-hidden shadow-md bg-white m-4"
          >
            <img
              className="w-full h-48 object-cover"
              src=""
              alt="Some title"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Some title</div>
              <p className="text-gray-700 text-base mb-2">$100</p>
              <p className="text-gray-600 text-sm">Some description</p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                Something
              </span>
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 text-yellow-500 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 0l2.39 6.09h5.71l-4.57 3.91 1.9 5.11L10 12.72l-4.43 2.39 1.91-5.11L0.9 6.09H6.61z" />
                  </svg>
                  <span className="ml-1">3.0 (100)</span>
                </div>
                <button
                  className="px-4 py-2 text-white rounded focus:outline-none bg-blue-500 hover:bg-blue-600"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Cart */}
      <div className="bg-gray-100 min-h-screen p-8">
        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <h2 className="text-2xl font-semibold text-center py-4">Your Cart</h2>
          <p className="text-center text-gray-600 py-8">Your cart is empty.</p>
          <>
            <div className="px-4 py-2 border-b border-gray-300">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    className="w-20 h-20 object-cover mr-4"
                    src=""
                    alt="Some title"
                  />
                  <div>
                    <h3 className="font-semibold">Some title</h3>
                    <p className="text-gray-600">$0</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <button
                    className="px-3 py-1 bg-blue-500 text-white rounded-md focus:outline-none"
                  >
                    -
                  </button>
                  <span className="mx-5 text-lg">1</span>
                  <button
                    className="px-3 py-1 bg-blue-500 text-white rounded-md focus:outline-none"
                  >
                    +
                  </button>
                  <button
                    className="p-2 bg-red-500 text-white rounded-md ml-4 focus:outline-none"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
            <div className="py-2 px-4 bg-gray-50 flex justify-between items-center">
              <button
                className="py-2 px-4 bg-red-500 text-white rounded-md focus:outline-none"
              >
                Clear Cart
              </button>
              <h3 className="font-semibold text-lg">Total: 0</h3>
            </div>
          </>
        </div>
      </div>
    </>
  )
}

export default App
