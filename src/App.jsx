import { useState } from 'react'
import AdminLayout from './components/admin/AdminLayout'
import Dashboard from './components/admin/Dashboard'
import ProductManagement from './components/admin/ProductManagement'
import UserManagement from './components/admin/UserManagement'
import StoreLayout from './components/store/StoreLayout'
import ProductList from './components/store/ProductList'
import Products from './components/store/Products'

import './App.css'

function App() {
  const [isAdmin, setIsAdmin] = useState(false)
  const [currentPage, setCurrentPage] = useState('home')
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
    },
    { 
      id: 'FTB-010162',
      name: 'DEVİRDAİM (KAPAKSIZ)',
      model: 'MITSUBISHI L200 15-2.4D',
      brand: 'FUTABA',
      price: '19.00',
      currency: 'USD',
      status: false,
      code: 'FTB-010162',
      description: 'MITSUBISHI L200 2015-2023 2.4 Dizel araçlar için kapaksız devirdaim.',
      image: 'https://placehold.co/300x200?text=Devirdaim+Kapaksız'
    }
    // Diğer ürünler...
  ])

  const renderStoreContent = () => {
    switch(currentPage) {
      case 'home':
        return <ProductList products={products} />
      case 'products':
        return <Products products={products} />
      default:
        return <ProductList products={products} />
    }
  }

  const renderAdminContent = () => {
    switch(currentPage) {
      case 'dashboard':
        return <Dashboard />
      case 'products':
        return <ProductManagement />
      case 'users':
        return <UserManagement />
      case 'categories':
        return <div>Kategoriler Sayfası</div>
      case 'orders':
        return <div>Siparişler Sayfası</div>
      default:
        return <Dashboard />
    }
  }

  if (isAdmin) {
    return (
      <AdminLayout setCurrentPage={setCurrentPage} setIsAdmin={setIsAdmin}>
        {renderAdminContent()}
      </AdminLayout>
    )
  }

  return (
    <StoreLayout setIsAdmin={setIsAdmin} setCurrentPage={setCurrentPage}>
      {renderStoreContent()}
    </StoreLayout>
  )
}

export default App

