import { useState } from 'react'

const ProductList = ({ setCurrentPage }) => {
  const blogPosts = [
    {
      id: 1,
      title: 'Hoş Geldiniz',
      content: 'Otomotiv yedek parça sektöründe 20 yılı aşkın tecrübemizle sizlere hizmet vermekteyiz.',
      image: 'https://placehold.co/600x400?text=Otomotiv',
      date: '5 Mart 2024'
    },
    {
      id: 2,
      title: 'Kaliteli Hizmet',
      content: 'Orijinal ve muadil yedek parça çeşitlerimizle araçlarınız için en uygun çözümleri sunuyoruz.',
      image: 'https://placehold.co/600x400?text=Yedek+Parça',
      date: '4 Mart 2024'
    },
    {
      id: 3,
      title: 'Hızlı Teslimat',
      content: 'Türkiye\'nin her yerine hızlı kargo seçenekleriyle ürünlerinizi en kısa sürede teslim ediyoruz.',
      image: 'https://placehold.co/600x400?text=Teslimat',
      date: '3 Mart 2024'
    },
    {
      id: 4,
      title: 'Teknik Destek',
      content: 'Uzman ekibimiz ürün seçimi ve teknik konularda size yardımcı olmak için hazır.',
      image: 'https://placehold.co/600x400?text=Destek',
      date: '2 Mart 2024'
    }
  ]

  return (
    <div className="p-4">
      {/* Hero Section */}
      <div className="hero min-h-[400px] bg-base-200 rounded-box mb-8">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-8">Otomotiv Yedek Parça</h1>
            <p className="text-xl mb-6">
              Geniş ürün yelpazemiz ve profesyonel hizmet anlayışımızla 
              otomotiv yedek parça ihtiyaçlarınız için yanınızdayız.
            </p>
            <button 
              className="btn btn-primary"
              onClick={() => setCurrentPage('products')}
            >
              Ürünleri İncele
            </button>
          </div>
        </div>
      </div>

      {/* Özellikler */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Orijinal Ürünler
            </h2>
            <p>En kaliteli markalardan orijinal ve muadil yedek parçalar</p>
          </div>
        </div>
        
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Hızlı Teslimat
            </h2>
            <p>Aynı gün kargo ve güvenli teslimat seçenekleri</p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              7/24 Destek
            </h2>
            <p>Teknik destek ve satış sonrası hizmet</p>
          </div>
        </div>
      </div>

      {/* Blog Posts */}
      <h2 className="text-3xl font-bold mb-6">Bilgilendirmeler</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogPosts.map(post => (
          <div key={post.id} className="card lg:card-side bg-base-100 shadow-xl">
            <figure className="lg:w-48">
              <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{post.title}</h2>
              <p>{post.content}</p>
              <div className="card-actions justify-end">
                <div className="text-sm text-gray-500">{post.date}</div>
                <button className="btn btn-primary btn-sm">Devamını Oku</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* İletişim CTA */}
      <div className="mt-12 text-center bg-base-200 p-8 rounded-box">
        <h2 className="text-2xl font-bold mb-4">Bize Ulaşın</h2>
        <p className="mb-4">Sorularınız için 7/24 hizmetinizdeyiz</p>
        <button className="btn btn-primary">İletişime Geç</button>
      </div>
    </div>
  )
}

export default ProductList 