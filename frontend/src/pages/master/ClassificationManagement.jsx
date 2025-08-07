import React, { useState, useMemo } from 'react';
import SearchBar from '../../components/SearchBar';
import Button from '../../components/ui/Button';
import ClassificationTable from '../../components/ClassificationTable';

const dummyClassifications = [
  { id: 1, kode: 'P', klasifikasi: 'Penting' },
  { id: 2, kode: 'B', klasifikasi: 'Biasa' },
  { id: 3, kode: 'R', klasifikasi: 'Rahasia' },
  { id: 4, kode: 'U', klasifikasi: 'Undangan' },
  { id: 5, kode: 'SK', klasifikasi: 'Surat Keputusan' },
];

const ClassificationManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredClassifications = useMemo(() => {
    return dummyClassifications.filter(item =>
      item.kode.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.klasifikasi.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Kelola Klasifikasi</h1>
        <Button to="/master/classification/add">Tambah Klasifikasi</Button>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white shadow-sm">
        <div className="border-b border-gray-200 p-4">
          <SearchBar 
            searchTerm={searchTerm} 
            setSearchTerm={setSearchTerm} 
            placeholder="Cari kode atau klasifikasi..." 
          />
        </div>
        <ClassificationTable classifications={filteredClassifications} />
      </div>
    </div>
  );
};

export default ClassificationManagement;