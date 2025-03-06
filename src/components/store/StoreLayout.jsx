const StoreLayout = ({ children, setIsAdmin, setCurrentPage }) => {
  return (
    <div className="min-h-screen bg-base-200">
      <div className="navbar bg-base-100 shadow-lg">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><button onClick={() => setCurrentPage('home')}>Ana Sayfa</button></li>
              <li><button onClick={() => setCurrentPage('products')}>Ürünler</button></li>
              <li><button onClick={() => setCurrentPage('cart')}>Sepetim</button></li>
              <li><button onClick={() => setCurrentPage('orders')}>Siparişlerim</button></li>
              <li><button onClick={() => setCurrentPage('account')}>Cari Hesap</button></li>
              <li><button onClick={() => setCurrentPage('about')}>Kurumsal</button></li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">OTOMOTİV</a>
        </div>

        {/* Masaüstü menüsü */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><button onClick={() => setCurrentPage('home')}>Ana Sayfa</button></li>
            <li><button onClick={() => setCurrentPage('products')}>Ürünler</button></li>
            <li><button onClick={() => setCurrentPage('cart')}>Sepetim</button></li>
            <li><button onClick={() => setCurrentPage('orders')}>Siparişlerim</button></li>
            <li><button onClick={() => setCurrentPage('account')}>Cari Hesap</button></li>
            <li><button onClick={() => setCurrentPage('about')}>Kurumsal</button></li>
          </ul>
        </div>

        <div className="navbar-end gap-2">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="badge badge-sm indicator-item">0</span>
              </div>
            </label>
            <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
              <div className="card-body">
                <span className="font-bold text-lg">0 Ürün</span>
                <span className="text-info">Toplam: $0</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">Sepeti Görüntüle</button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <button onClick={() => setIsAdmin(true)} className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
          </div>
          <button className="btn btn-ghost">Güvenli Çıkış</button>
        </div>
      </div>
      <main className="container mx-auto py-8 px-4">
        {children}
      </main>
    </div>
  )
}

export default StoreLayout 