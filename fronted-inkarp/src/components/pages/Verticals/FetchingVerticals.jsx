const FetchingVerticals = ({ products = [] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 bg-white rounded-xl shadow-md">
      {products.map((product) => (
        <div
          key={product.id}
          className="border rounded-lg shadow-sm p-4 hover:shadow-lg transition bg-white"
        >
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-40 object-cover rounded-md mb-3"
          />
          <h2 className="text-lg font-bold text-red-600">{product.title}</h2>
          <p className="text-sm text-gray-700 mt-1">{product.description}</p>
          <ul className="text-sm text-gray-500 mt-3 space-y-1">
            <li><strong>Brand:</strong> {product.brand}</li>
            <li><strong>Category:</strong> {product.category}</li>
            <li><strong>Price:</strong> ${product.price}</li>
            <li><strong>Discount:</strong> {product.discountPercentage}%</li>
            <li><strong>Rating:</strong> ⭐ {product.rating}</li>
            <li><strong>Stock:</strong> {product.stock} units</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FetchingVerticals;
