import { useState } from 'react'

const StockList = () => {
  const [stocks, setStocks] = useState([
    { 
      id: 'FTB-010163',
      name: 'DEVİRDAİM',
      model: 'ISUZU D-MAX 16-1.9D',
      brand: 'FUTABA',
      price: '23.50',
      currency: 'USD',
      status: true,
      code: 'FTB-010163'
    },
    {
      id: 'FTB-010162',
      name: 'DEVİRDAİM (KAPAKSIZ)',
      model: 'MITSUBISHI L200 15-2.4D',
      brand: 'FUTABA',
      price: '19.00',
      currency: 'USD',
      status: true,
      code: 'FTB-010162'
    },
    // Diğer ürünler buraya eklenebilir
  ])

  return (
    <div className="overflow-x-auto">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Ürün Ara..."
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <table className="table table-zebra w-full">
        <thead>
          <tr className="bg-base-200">
            <th>Ürün Kodu</th>
            <th>Ürün Açıklaması</th>
            <th>Araç Modeli</th>
            <th>Marka</th>
            <th>Fiyat</th>
            <th>Stok Durumu</th>
            <th>Sepet</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock) => (
            <tr key={stock.id}>
              <td>{stock.code}</td>
              <td>{stock.name}</td>
              <td>{stock.model}</td>
              <td>{stock.brand}</td>
              <td className="text-red-500 font-semibold">
                {stock.price} {stock.currency}
              </td>
              <td>
                {stock.status ? (
                  <span className="text-success">✓</span>
                ) : (
                  <span className="text-error">✗</span>
                )}
              </td>
              <td>
                <button className="btn btn-primary btn-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default StockList 