function Categories() {
  return (
    <div className="bg-gray-100 p-4">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <a href="#" className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300">
            <h3 className="text-lg font-semibold mb-2">Electronics</h3>
            <img src="electronics-image.jpg" alt="Electronics" className="w-full h-32 object-cover mb-2" />
            <p className="text-gray-600">Discover the latest gadgets and tech.</p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Categories