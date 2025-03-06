import { useState } from 'react'

const ProductList = ({ products }) => {
  const [filters, setFilters] = useState({
    brand: '',
    minPrice: '',
    maxPrice: ''
  })

  const filteredProducts = products.filter(product => {
    return (
      (!filters.brand || product.brand === filters.brand) &&
      (!filters.minPrice || product.price >= filters.minPrice) &&
      (!filters.maxPrice || product.price <= filters.maxPrice)
    )
  })

  const brands = [...new Set(products.map(product => product.brand))]

  return (
    <div>
      {/* Filtreler */}
      <div className="bg-base-100 p-4 rounded-box mb-4">
        <h3 className="text-lg font-bold mb-4">Filtreler</h3>
        <div className="flex flex-wrap gap-4">
          <select 
            className="select select-bordered w-full md:w-auto"
            value={filters.brand}
            onChange={(e) => setFilters({...filters, brand: e.target.value})}
          >
            <option value="">Tüm Markalar</option>
            {brands.map(brand => (
              <option key={brand} value={brand}>{brand}</option>
            ))}
          </select>
          <input
            type="number"
            placeholder="Min Fiyat"
            className="input input-bordered w-full md:w-auto"
            value={filters.minPrice}
            onChange={(e) => setFilters({...filters, minPrice: e.target.value})}
          />
          <input
            type="number"
            placeholder="Max Fiyat"
            className="input input-bordered w-full md:w-auto"
            value={filters.maxPrice}
            onChange={(e) => setFilters({...filters, maxPrice: e.target.value})}
          />
        </div>
      </div>

      {/* Ürün Listesi */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{product.name}</h2>
              <p className="text-sm text-gray-500">{product.model}</p>
              <p className="text-sm">Marka: {product.brand}</p>
              <p className="text-lg font-bold text-primary">{product.price} {product.currency}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Sepete Ekle</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductList 