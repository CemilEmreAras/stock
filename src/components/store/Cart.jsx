import { useState } from 'react'

const Cart = ({ cartItems, setCartItems }) => {
  const [quantities, setQuantities] = useState({})

  const handleQuantityChange = (productId, value) => {
    setQuantities({
      ...quantities,
      [productId]: Math.max(1, parseInt(value) || 0)
    })
  }

  const handleRemoveItem = (productId) => {
    if (window.confirm('Bu ürünü sepetten çıkarmak istediğinize emin misiniz?')) {
      setCartItems(cartItems.filter(item => item.id !== productId))
    }
  }

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const quantity = quantities[item.id] || item.quantity || 1
      return total + (parseFloat(item.price) * quantity)
    }, 0).toFixed(2)
  }

  const handleUpdateCart = () => {
    // Sepeti güncelle
    const updatedItems = cartItems.map(item => ({
      ...item,
      quantity: quantities[item.id] || item.quantity || 1
    }))
    setCartItems(updatedItems)
    alert('Sepetiniz güncellendi!')
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6">Ürün Sepetiniz</h2>

      <div className="bg-base-100 rounded-lg shadow-xl">
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th className="text-red-500">Ürün Sil</th>
                <th className="text-red-500">Ürün Resmi</th>
                <th className="text-red-500">Ürün Kodu</th>
                <th className="text-red-500">Ürün Açıklaması</th>
                <th className="text-red-500">Araç Modeli</th>
                <th className="text-red-500">Sipariş Miktarı</th>
                <th className="text-red-500">Stok Durumu</th>
                <th className="text-red-500">Dövizli Fiyat</th>
                <th className="text-red-500">Birim Fiyatı</th>
                <th className="text-red-500">Tutarı</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => {
                const quantity = quantities[item.id] || item.quantity || 1
                const total = (parseFloat(item.price) * quantity).toFixed(2)

                return (
                  <tr key={item.id}>
                    <td>
                      <button 
                        className="btn btn-error btn-sm"
                        onClick={() => handleRemoveItem(item.id)}
                      >
                        ×
                      </button>
                    </td>
                    <td>
                      <img
                        src={item.image || 'https://placehold.co/50x50?text=Ürün'}
                        alt={item.name}
                        className="w-12 h-12 object-cover rounded"
                      />
                    </td>
                    <td>{item.code}</td>
                    <td>{item.name}</td>
                    <td>{item.model}</td>
                    <td>
                      <input
                        type="number"
                        min="1"
                        value={quantity}
                        onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                        className="input input-bordered input-sm w-20"
                      />
                    </td>
                    <td>
                      {item.status ? (
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
                    <td>{item.price} {item.currency}</td>
                    <td className="text-right">{item.price} {item.currency}</td>
                    <td className="text-right font-bold">{total} {item.currency}</td>
                  </tr>
                )
              })}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="9" className="text-right font-bold">Toplam:</td>
                <td className="text-right font-bold text-primary">
                  {calculateTotal()} {cartItems[0]?.currency}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      <div className="flex justify-end gap-4 mt-6">
        <button 
          className="btn btn-primary"
          onClick={handleUpdateCart}
        >
          Sepeti Güncelle
        </button>
      </div>
    </div>
  )
}

export default Cart 