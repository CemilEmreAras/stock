import { useState } from 'react'

const Products = ({ products, cartItems, setCartItems }) => {
  const [filters, setFilters] = useState({
    search: '',
    brand: '',
    category: ''
  })

  const [quantities, setQuantities] = useState({})

  const brands = [...new Set(products.map(product => product.brand))]
  
  const categories = [...new Set(products.map(product => {
    return product.name.split(' ')[0]
  }))]

  const filteredProducts = products.filter(product => {
    const searchMatch = !filters.search || 
      product.name.toLowerCase().includes(filters.search.toLowerCase()) ||
      product.code.toLowerCase().includes(filters.search.toLowerCase()) ||
      product.model.toLowerCase().includes(filters.search.toLowerCase()) ||
      product.brand.toLowerCase().includes(filters.search.toLowerCase())

    const brandMatch = !filters.brand || product.brand === filters.brand
    
    const categoryMatch = !filters.category || 
      product.name.toLowerCase().startsWith(filters.category.toLowerCase())

    return searchMatch && brandMatch && categoryMatch
  })

  const handleQuantityChange = (productId, value) => {
    setQuantities({
      ...quantities,
      [productId]: Math.max(1, parseInt(value) || 0)
    })
  }

  const addToCart = (product) => {
    const quantity = quantities[product.id] || 1
    const existingItem = cartItems.find(item => item.id === product.id)

    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: (item.quantity || 1) + quantity }
          : item
      ))
    } else {
      setCartItems([...cartItems, { ...product, quantity }])
    }

    setQuantities({ ...quantities, [product.id]: 1 })
    alert('Ürün sepete eklendi!')
  }

  return (
    <div>
      {/* Arama ve Filtreler */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Ürün Arama"
          className="input input-bordered flex-1"
          value={filters.search}
          onChange={(e) => setFilters({...filters, search: e.target.value})}
        />
        <select 
          className="select select-bordered w-48"
          value={filters.brand}
          onChange={(e) => setFilters({...filters, brand: e.target.value})}
        >
          <option value="">Tüm Markalar</option>
          {brands.map(brand => (
            <option key={brand} value={brand}>{brand}</option>
          ))}
        </select>
        <select 
          className="select select-bordered w-48"
          value={filters.category}
          onChange={(e) => setFilters({...filters, category: e.target.value})}
        >
          <option value="">Tüm Ürünler</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      {/* Ürün Tablosu */}
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th className="text-red-500">Ürün Resmi</th>
              <th className="text-red-500">Ürün Kodu</th>
              <th className="text-red-500">Ürün Açıklaması</th>
              <th className="text-red-500">Araç Modeli</th>
              <th className="text-red-500">Marka</th>
              <th className="text-red-500">Fiyat</th>
              <th className="text-red-500">Stok Durumu</th>
              <th className="text-red-500">Sepet</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product.id}>
                <td>
                  <img
                    src={product.image || 'https://placehold.co/100x100?text=Ürün'}
                    alt={product.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                </td>
                <td>{product.code}</td>
                <td>{product.name}</td>
                <td>{product.model}</td>
                <td>{product.brand}</td>
                <td className="text-red-500 font-bold">
                  {product.price} {product.currency}
                </td>
                <td>
                  {product.status ? (
                    <div className="w-6 h-6">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 12l2 2 4-4" stroke="green" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="12" cy="12" r="11" stroke="green" strokeWidth="2"/>
                      </svg>
                    </div>
                  ) : (
                    <span className="text-red-500">×</span>
                  )}
                </td>
                <td>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      min="1"
                      value={quantities[product.id] || 1}
                      onChange={(e) => handleQuantityChange(product.id, e.target.value)}
                      className="input input-bordered input-sm w-16"
                    />
                    <button 
                      className="btn btn-primary btn-sm"
                      onClick={() => addToCart(product)}
                      disabled={!product.status}
                    >
                      +
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Products 