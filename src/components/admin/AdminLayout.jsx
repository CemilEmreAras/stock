const AdminLayout = ({ children, setCurrentPage, setIsAdmin }) => {
  return (
    <div className="min-h-screen bg-base-200">
      <div className="drawer lg:drawer-open">
        <input id="admin-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar bg-base-300">
            <div className="flex-none lg:hidden">
              <label htmlFor="admin-drawer" className="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2 text-xl font-bold">Admin Panel</div>
            <div className="flex-none gap-2">
              <a href="/" className="btn btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
                Anasayfa
              </a>
              <button onClick={() => setIsAdmin(false)} className="btn btn-ghost">Güvenli Çıkış</button>
            </div>
          </div>
          {/* Ana içerik */}
          <div className="p-4">
            {children}
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="admin-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-64 h-full bg-base-200 text-base-content">
            <li className="menu-title">Yönetim</li>
            <li><button onClick={() => setCurrentPage('dashboard')}>Dashboard</button></li>
            <li><button onClick={() => setCurrentPage('products')}>Ürünler</button></li>
            <li><button onClick={() => setCurrentPage('users')}>Kullanıcılar</button></li>
            <li><button onClick={() => setCurrentPage('categories')}>Kategoriler</button></li>
            <li><button onClick={() => setCurrentPage('orders')}>Siparişler</button></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AdminLayout 