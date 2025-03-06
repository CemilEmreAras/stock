import { useState } from 'react'

const AddStock = () => {
  const [formData, setFormData] = useState({
    name: '',
    quantity: '',
    price: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Burada form verilerini işleyebilirsiniz
    console.log(formData)
  }

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Yeni Ürün Ekle</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Ürün Adı</span>
            </label>
            <input
              type="text"
              className="input input-bordered"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Miktar</span>
            </label>
            <input
              type="number"
              className="input input-bordered"
              value={formData.quantity}
              onChange={(e) => setFormData({...formData, quantity: e.target.value})}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Fiyat</span>
            </label>
            <input
              type="number"
              className="input input-bordered"
              value={formData.price}
              onChange={(e) => setFormData({...formData, price: e.target.value})}
            />
          </div>
          <div className="card-actions justify-end mt-4">
            <button className="btn btn-primary" type="submit">Ekle</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddStock 