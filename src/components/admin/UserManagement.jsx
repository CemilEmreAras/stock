import { useState } from 'react'

const UserManagement = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'Mehmet Yusuf Çalışkan',
      email: 'memetycaliskan@gmail.com',
      role: 'Yönetici',
      status: 'Aktif',
      createdAt: 'Pzt, 3 Mar 2025 19:47'
    },
    {
      id: 2,
      name: 'asd',
      email: 'memetycaliasadkan@gmail.com',
      role: 'Misafir',
      status: 'Aktif',
      createdAt: 'Pzt, 3 Mar 2025 19:48'
    },
    {
      id: 3,
      name: 'Mehmet Yusuf Çalışkan',
      email: 'memetycaliasadasdkan@gmail.com',
      role: 'Çalışan',
      status: 'Aktif',
      createdAt: 'Pzt, 3 Mar 2025 19:52'
    },
    {
      id: 4,
      name: 'Deneme',
      email: 'denem@gmail.com',
      role: 'Misafir',
      status: 'Aktif',
      createdAt: 'Çar, 5 Mar 2025 18:22'
    }
  ])

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingUser, setEditingUser] = useState(null)
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    role: 'Misafir',
    status: 'Aktif'
  })

  const getRoleClass = (role) => {
    switch (role) {
      case 'Yönetici':
        return 'badge badge-primary'
      case 'Çalışan':
        return 'badge badge-secondary'
      case 'Misafir':
        return 'badge badge-accent'
      default:
        return 'badge'
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (editingUser) {
      setUsers(users.map(user => 
        user.id === editingUser.id 
          ? { ...user, ...newUser }
          : user
      ))
    } else {
      setUsers([...users, {
        ...newUser,
        id: Date.now(),
        createdAt: new Date().toLocaleString('tr-TR', {
          weekday: 'short',
          day: 'numeric',
          month: 'short',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      }])
    }
    handleCloseModal()
  }

  const handleEdit = (user) => {
    setEditingUser(user)
    setNewUser({
      name: user.name,
      email: user.email,
      role: user.role,
      status: user.status
    })
    setIsModalOpen(true)
  }

  const handleDelete = (userId) => {
    if (window.confirm('Bu kullanıcıyı silmek istediğinize emin misiniz?')) {
      setUsers(users.filter(user => user.id !== userId))
    }
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setEditingUser(null)
    setNewUser({
      name: '',
      email: '',
      role: 'Misafir',
      status: 'Aktif'
    })
  }

  const toggleStatus = (userId) => {
    setUsers(users.map(user => 
      user.id === userId 
        ? { ...user, status: user.status === 'Aktif' ? 'Pasif' : 'Aktif' }
        : user
    ))
  }

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Kullanıcı Yönetimi</h2>
        <button 
          className="btn btn-primary"
          onClick={() => setIsModalOpen(true)}
        >
          Yeni Kullanıcı
        </button>
      </div>

      <div className="bg-base-100 rounded-lg shadow-xl">
        <div className="p-4 text-sm text-gray-500">
          Kullanıcının durumuna tıklayarak mevcut durumunu değiştirebilirsiniz.
        </div>

        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Ad Soyad</th>
                <th>Email</th>
                <th>Rol</th>
                <th>Durum</th>
                <th>Kayıt Tarihi</th>
                <th>İşlemler</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <span className={getRoleClass(user.role)}>
                      {user.role}
                    </span>
                  </td>
                  <td>
                    <span 
                      className={`badge ${user.status === 'Aktif' ? 'badge-success' : 'badge-error'} cursor-pointer`}
                      onClick={() => toggleStatus(user.id)}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td>{user.createdAt}</td>
                  <td>
                    <div className="flex gap-2">
                      <button 
                        className="btn btn-info btn-sm"
                        onClick={() => handleEdit(user)}
                      >
                        Düzenle
                      </button>
                      <button 
                        className="btn btn-error btn-sm"
                        onClick={() => handleDelete(user.id)}
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

      {/* Kullanıcı Ekleme/Düzenleme Modalı */}
      <dialog className={`modal ${isModalOpen ? 'modal-open' : ''}`}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            {editingUser ? 'Kullanıcı Düzenle' : 'Yeni Kullanıcı Ekle'}
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Ad Soyad</span>
              </label>
              <input
                type="text"
                className="input input-bordered"
                value={newUser.name}
                onChange={(e) => setNewUser({...newUser, name: e.target.value})}
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                className="input input-bordered"
                value={newUser.email}
                onChange={(e) => setNewUser({...newUser, email: e.target.value})}
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Rol</span>
              </label>
              <select
                className="select select-bordered"
                value={newUser.role}
                onChange={(e) => setNewUser({...newUser, role: e.target.value})}
              >
                <option value="Misafir">Misafir</option>
                <option value="Çalışan">Çalışan</option>
                <option value="Yönetici">Yönetici</option>
              </select>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Durum</span>
              </label>
              <select
                className="select select-bordered"
                value={newUser.status}
                onChange={(e) => setNewUser({...newUser, status: e.target.value})}
              >
                <option value="Aktif">Aktif</option>
                <option value="Pasif">Pasif</option>
              </select>
            </div>

            <div className="modal-action">
              <button type="submit" className="btn btn-primary">
                {editingUser ? 'Güncelle' : 'Ekle'}
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

export default UserManagement 