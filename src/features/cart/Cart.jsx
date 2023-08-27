import { useSelector } from "react-redux";

function Cart() {
  const cartProducts = useSelector(state => state.cart.items)
  const totalPrice = useSelector(state => state.cart.totalPrice)

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <h2 className="text-2xl font-semibold text-center py-4">Your Cart</h2>
        {
          cartProducts.map(cartProduct => {
            return <div key={cartProduct.id} className="px-4 py-2 border-b border-gray-300">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    className="w-20 h-20 object-cover mr-4"
                    src={cartProduct.image}
                    alt={cartProduct.title}
                  />
                  <div>
                    <h3 className="font-semibold">{cartProduct.title}</h3>
                    <p className="text-gray-600">${cartProduct.price}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <button className="px-3 py-1 bg-blue-500 text-white rounded-md focus:outline-none">
                    -
                  </button>
                  <span className="mx-5 text-lg">{cartProduct.quantity}</span>
                  <button className="px-3 py-1 bg-blue-500 text-white rounded-md focus:outline-none">
                    +
                  </button>
                  <button className="p-2 bg-red-500 text-white rounded-md ml-4 focus:outline-none">
                    Remove
                  </button>
                </div>
              </div>
            </div>
          })
        }

        {
          cartProducts.length > 0 && <div className="py-2 px-4 bg-gray-50 flex justify-between items-center">
            <button className="py-2 px-4 bg-red-500 text-white rounded-md focus:outline-none">
              Clear Cart
            </button>
            <h3 className="font-semibold text-lg">Total: ${totalPrice}</h3>
          </div>
        }
      </div>
    </div>
  );
}

export default Cart;
