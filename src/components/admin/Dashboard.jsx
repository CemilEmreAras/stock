const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="stats shadow">
        <div className="stat">
          <div className="stat-title">Toplam Ürün</div>
          <div className="stat-value">89</div>
          <div className="stat-desc">↗︎ 14 (30 günde)</div>
        </div>
      </div>
      
      <div className="stats shadow">
        <div className="stat">
          <div className="stat-title">Aktif Kullanıcılar</div>
          <div className="stat-value">23</div>
          <div className="stat-desc">↗︎ 4 (30 günde)</div>
        </div>
      </div>

      <div className="stats shadow">
        <div className="stat">
          <div className="stat-title">Toplam Sipariş</div>
          <div className="stat-value">156</div>
          <div className="stat-desc">↘︎ 90 (30 günde)</div>
        </div>
      </div>

      <div className="stats shadow">
        <div className="stat">
          <div className="stat-title">Toplam Gelir</div>
          <div className="stat-value">$4,200</div>
          <div className="stat-desc">↗︎ $340 (30 günde)</div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard 