import React, { useState, useMemo } from 'react';
import SearchBar from '../../components/common/SearchBar';
import Button from '../../components/ui/Button';
import UserTable from '../../components/table/UserTable';
import FilterDropdown from '../../components/common/FilterDropdown';

const dummyUsers = [
  { id: 1, name: 'Budi Santoso', username: 'budisan', email: 'budi.santoso@example.com', role: 'Admin', jabatan: 'Kepala Bagian', phone: '+62 812 3456 7890', photo: '/images/user/owner.jpg'},
  { id: 2, name: 'Citra Lestari', username: 'citral', email: 'citra.lestari@example.com', role: 'User', jabatan: 'Staff Administrasi', phone: '+62 812 1111 2222', photo: '/images/user/user-02.jpg'},
  { id: 3, name: 'Agus Wijaya', username: 'agusw', email: 'agus.wijaya@example.com', role: 'User', jabatan: 'Staff Operasional', phone: '+62 812 3333 4444', photo: '/images/user/user-03.jpg'},
];

const jabatanOptions = ['Kepala Bagian', 'Staff Administrasi', 'Staff Operasional'];

const UserManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedJabatan, setSelectedJabatan] = useState('');

  const filteredUsers = useMemo(() => {
    return dummyUsers
      .filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.phone.includes(searchTerm)
      )
      .filter(user => 
        selectedJabatan ? user.jabatan === selectedJabatan : true
      );
  }, [searchTerm, selectedJabatan]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Kelola Pengguna</h1>
        <Button to="/master/users/add">Tambah Pengguna</Button>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white shadow-sm">
        <div className="flex flex-col gap-4 border-b border-gray-200 p-4 sm:flex-row">
          <SearchBar 
            searchTerm={searchTerm} 
            setSearchTerm={setSearchTerm} 
            placeholder="Cari nama, email, telepon..." 
          />
          <FilterDropdown
            options={jabatanOptions}
            selectedValue={selectedJabatan}
            setSelectedValue={setSelectedJabatan}
            placeholder="Semua Jabatan"
          />
        </div>
        <UserTable users={filteredUsers} />
      </div>
    </div>
  );
};

export default UserManagement;