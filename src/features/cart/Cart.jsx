import React from "react";

function Cart() {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <h2 className="text-2xl font-semibold text-center py-4">Your Cart</h2>
        <div className="px-4 py-2 border-b border-gray-300">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                className="w-20 h-20 object-cover mr-4"
                src="product-image-url"
                alt="Product"
              />
              <div>
                <h3 className="font-semibold">Product Name</h3>
                <p className="text-gray-600">$20.99</p>
              </div>
            </div>
            <div className="flex items-center">
              <button className="px-3 py-1 bg-blue-500 text-white rounded-md focus:outline-none">
                -
              </button>
              <span className="mx-5 text-lg">2</span>
              <button className="px-3 py-1 bg-blue-500 text-white rounded-md focus:outline-none">
                +
              </button>
              <button className="p-2 bg-red-500 text-white rounded-md ml-4 focus:outline-none">
                Remove
              </button>
            </div>
          </div>
        </div>
        <div className="py-2 px-4 bg-gray-50 flex justify-between items-center">
          <button className="py-2 px-4 bg-red-500 text-white rounded-md focus:outline-none">
            Clear Cart
          </button>
          <h3 className="font-semibold text-lg">Total: $41.98</h3>
        </div>
      </div>
    </div>
  );
}

export default Cart;