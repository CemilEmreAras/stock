import { useState } from 'react'

const ProductManagement = () => {
  const [products, setProducts] = useState([
    { 
      id: 'FTB-010163',
      name: 'DEVİRDAİM',
      model: 'ISUZU D-MAX 16-1.9D',
      brand: 'FUTABA',
      price: '23.50',
      currency: 'USD',
      status: true,
      code: 'FTB-010163',
      description: 'ISUZU D-MAX 2016-2023 1.9 Dizel araçlar için orijinal kalitede devirdaim.',
      image: 'https://placehold.co/300x200?text=Devirdaim'
    }
  ])

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingProduct, setEditingProduct] = useState(null)
  const [newProduct, setNewProduct] = useState({
    code: '',
    name: '',
    description: '',
    model: '',
    brand: '',
    price: '',
    currency: 'USD',
    status: true,
    image: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (editingProduct) {
      setProducts(products.map(product => 
        product.id === editingProduct.id 
          ? { ...product, ...newProduct }
          : product
      ))
    } else {
      setProducts([...products, { ...newProduct, id: newProduct.code }])
    }
    handleCloseModal()
  }

  const handleEdit = (product) => {
    setEditingProduct(product)
    setNewProduct({
      code: product.code,
      name: product.name,
      description: product.description,
      model: product.model,
      brand: product.brand,
      price: product.price,
      currency: product.currency,
      status: product.status,
      image: product.image
    })
    setIsModalOpen(true)
  }

  const handleDelete = (productId) => {
    if (window.confirm('Bu ürünü silmek istediğinize emin misiniz?')) {
      setProducts(products.filter(product => product.id !== productId))
    }
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setEditingProduct(null)
    setNewProduct({
      code: '',
      name: '',
      description: '',
      model: '',
      brand: '',
      price: '',
      currency: 'USD',
      status: true,
      image: ''
    })
  }

  const toggleStatus = (productId) => {
    setProducts(products.map(product => 
      product.id === productId 
        ? { ...product, status: !product.status }
        : product
    ))
  }

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Ürün Yönetimi</h2>
        <button 
          className="btn btn-primary"
          onClick={() => setIsModalOpen(true)}
        >
          Yeni Ürün
        </button>
      </div>

      <div className="bg-base-100 rounded-lg shadow-xl">
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Resim</th>
                <th>Ürün Kodu</th>
                <th>Ürün Adı</th>
                <th>Model</th>
                <th>Marka</th>
                <th>Fiyat</th>
                <th>Stok</th>
                <th>İşlemler</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>
                    <img 
                      src={product.image || 'https://placehold.co/50x50?text=Ürün'} 
                      alt={product.name}
                      className="w-12 h-12 object-cover rounded"
                    />
                  </td>
                  <td>{product.code}</td>
                  <td>{product.name}</td>
                  <td>{product.model}</td>
                  <td>{product.brand}</td>
                  <td>{product.price} {product.currency}</td>
                  <td>
                    <span 
                      className={`badge ${product.status ? 'badge-success' : 'badge-error'} cursor-pointer`}
                      onClick={() => toggleStatus(product.id)}
                    >
                      {product.status ? 'Var' : 'Yok'}
                    </span>
                  </td>
                  <td>
                    <div className="flex gap-2">
                      <button 
                        className="btn btn-info btn-sm"
                        onClick={() => handleEdit(product)}
                      >
                        Düzenle
                      </button>
                      <button 
                        className="btn btn-error btn-sm"
                        onClick={() => handleDelete(product.id)}
                      >
                        Sil
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Ürün Ekleme/Düzenleme Modalı */}
      <dialog className={`modal ${isModalOpen ? 'modal-open' : ''}`}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            {editingProduct ? 'Ürün Düzenle' : 'Yeni Ürün Ekle'}
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Ürün Resmi URL</span>
              </label>
              <input
                type="text"
                className="input input-bordered"
                value={newProduct.image}
                onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}
                placeholder="https://example.com/image.jpg"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Ürün Kodu</span>
              </label>
              <input
                type="text"
                className="input input-bordered"
                value={newProduct.code}
                onChange={(e) => setNewProduct({...newProduct, code: e.target.value})}
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Ürün Adı</span>
              </label>
              <input
                type="text"
                className="input input-bordered"
                value={newProduct.name}
                onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Ürün Açıklaması</span>
              </label>
              <textarea
                className="textarea textarea-bordered"
                value={newProduct.description}
                onChange={(e) => setNewProduct({...newProduct, description: e.target.value})}
                rows="3"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Araç Modeli</span>
              </label>
              <input
                type="text"
                className="input input-bordered"
                value={newProduct.model}
                onChange={(e) => setNewProduct({...newProduct, model: e.target.value})}
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Marka</span>
              </label>
              <input
                type="text"
                className="input input-bordered"
                value={newProduct.brand}
                onChange={(e) => setNewProduct({...newProduct, brand: e.target.value})}
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Fiyat</span>
              </label>
              <div className="join">
                <input
                  type="number"
                  step="0.01"
                  className="input input-bordered join-item w-full"
                  value={newProduct.price}
                  onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
                  required
                />
                <select 
                  className="select select-bordered join-item"
                  value={newProduct.currency}
                  onChange={(e) => setNewProduct({...newProduct, currency: e.target.value})}
                >
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="TRY">TRY</option>
                </select>
              </div>
            </div>

            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">Stok Durumu</span>
                <input
                  type="checkbox"
                  className="toggle toggle-success"
                  checked={newProduct.status}
                  onChange={(e) => setNewProduct({...newProduct, status: e.target.checked})}
                />
              </label>
            </div>

            <div className="modal-action">
              <button type="submit" className="btn btn-primary">
                {editingProduct ? 'Güncelle' : 'Ekle'}
              </button>
              <button 
                type="button" 
                className="btn"
                onClick={handleCloseModal}
              >
                İptal
              </button>
            </div>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button onClick={handleCloseModal}>close</button>
        </form>
      </dialog>
    </div>
  )
}

export default ProductManagement 