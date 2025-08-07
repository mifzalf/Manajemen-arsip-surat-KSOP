import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Label from '../../components/form/Label';
import InputField from '../../components/form/InputField';
import Button from '../../components/ui/Button';
import CustomCombobox from '../../components/form/Combobox';
import CustomSelect from '../../components/form/CustomSelect';

const initialJabatanOptions = ['Kepala Bagian', 'Staff Administrasi', 'Staff Operasional'];
const roleOptions = [
  { value: 'Admin', label: 'Admin' },
  { value: 'User', label: 'User' },
];

const UserAddForm = () => {
  const [jabatanOptions, setJabatanOptions] = useState(initialJabatanOptions);
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
    jabatan: '',
    role: 'User',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleJabatanChange = (value) => {
    setFormData({ ...formData, jabatan: value });
  };

  const handleRoleChange = (value) => {
    setFormData({ ...formData, role: value });
  };

  const handleJabatanAdded = (newJabatan) => {
    if (newJabatan && !jabatanOptions.find(j => j.toLowerCase() === newJabatan.toLowerCase())) {
      const updatedOptions = [...jabatanOptions, newJabatan];
      setJabatanOptions(updatedOptions);
      setFormData({ ...formData, jabatan: newJabatan });
    }
  };

  const handleJabatanDelete = (jabatanToDelete) => {
    setJabatanOptions(jabatanOptions.filter(j => j !== jabatanToDelete));
    if (formData.jabatan === jabatanToDelete) {
      setFormData({ ...formData, jabatan: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Pengguna Baru Disimpan!');
    console.log("Data Pengguna Baru:", formData);
  };

  return (
    <div className="space-y-6">
      <Link to="/master/users" className="text-sm text-gray-500 hover:text-brand-500">&larr; Kembali ke Kelola Pengguna</Link>
      <h1 className="text-2xl font-bold text-gray-800">Formulir Tambah Pengguna</h1>
      <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <Label htmlFor="name">Nama Lengkap</Label>
            <InputField name="name" id="name" onChange={handleChange} required />
          </div>
          <div>
            <Label htmlFor="username">Username</Label>
            <InputField name="username" id="username" onChange={handleChange} required />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <InputField type="email" name="email" id="email" onChange={handleChange} required />
          </div>
          <div>
            <Label htmlFor="phone">Telepon</Label>
            <InputField type="tel" name="phone" id="phone" onChange={handleChange} />
          </div>
          <div>
            <Label htmlFor="jabatan">Jabatan</Label>
            <CustomCombobox 
              items={jabatanOptions}
              selected={formData.jabatan}
              setSelected={handleJabatanChange}
              onAddItem={handleJabatanAdded}
              onDeleteItem={handleJabatanDelete}
              placeholder="Cari atau tambah jabatan..."
            />
          </div>
          <div>
            <Label htmlFor="role">Role</Label>
            <CustomSelect
              options={roleOptions}
              selected={formData.role}
              onChange={handleRoleChange}
            />
          </div>
          <div className="md:col-span-2">
            <Label htmlFor="password">Password</Label>
            <InputField type="password" name="password" id="password" onChange={handleChange} required />
          </div>
          <div className="md:col-span-2 flex justify-end gap-3">
            <Button to="/master/users" variant="secondary">Batal</Button>
            <Button type="submit">Simpan Pengguna</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserAddForm;