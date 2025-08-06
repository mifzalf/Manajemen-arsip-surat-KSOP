import React, { useState, useMemo } from 'react';
import LetterTable from '../components/LetterTable';
import SearchBar from '../components/SearchBar';
import FilterDropdown from '../components/FilterDropdown';
import InputField from '../components/form/InputField';

const dummyAllLetters = [
  { id: 1, type: 'Surat Masuk', letterNumber: '001/IN/2024', classification: 'Penting', letterDate: '2024-06-01', receivedDate: '2024-06-02', summary: 'Undangan rapat', sender: 'PT. Sejahtera Abadi', recipient: ''},
  { id: 2, type: 'Surat Keluar', letterNumber: '001/OUT/2024', classification: 'Penting', letterDate: '2024-06-10', receivedDate: '', summary: 'Proposal kerja sama', sender: '', recipient: 'PT. Mitra Jaya'},
  { id: 3, type: 'Surat Masuk', letterNumber: '002/IN/2024', classification: 'Biasa', letterDate: '2024-06-03', receivedDate: '2024-06-03', summary: 'Laporan bulanan', sender: 'Cabang Utama Surabaya', recipient: ''},
  { id: 4, type: 'Surat Keluar', letterNumber: '002/OUT/2024', classification: 'Biasa', letterDate: '2024-06-11', receivedDate: '', summary: 'Pemberitahuan internal', sender: '', recipient: 'Seluruh Staff'},
];

const classificationOptions = ['Penting', 'Biasa', 'Rahasia'];
const typeOptions = ['Surat Masuk', 'Surat Keluar'];

const Archives = () => {
  const [filters, setFilters] = useState({
    searchTerm: '',
    classification: '',
    type: '',
    startDate: '',
    endDate: '',
  });

  const handleFilterChange = (name, value) => {
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const filteredLetters = useMemo(() => {
    return dummyAllLetters
      .filter(letter => {
        const searchTerm = filters.searchTerm.toLowerCase();
        return (
          letter.letterNumber.toLowerCase().includes(searchTerm) ||
          letter.summary.toLowerCase().includes(searchTerm) ||
          (letter.sender && letter.sender.toLowerCase().includes(searchTerm)) ||
          (letter.recipient && letter.recipient.toLowerCase().includes(searchTerm))
        );
      })
      .filter(letter => filters.classification ? letter.classification === filters.classification : true)
      .filter(letter => filters.type ? letter.type === filters.type : true)
      .filter(letter => {
        if (!filters.startDate || !filters.endDate) return true;
        return letter.letterDate >= filters.startDate && letter.letterDate <= filters.endDate;
      });
  }, [filters]);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Arsip Surat</h1>

      <div className="rounded-2xl border border-gray-200 bg-white shadow-sm">
        <div className="grid grid-cols-1 items-end gap-4 border-b border-gray-200 p-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="lg:col-span-3">
            <SearchBar 
              searchTerm={filters.searchTerm} 
              setSearchTerm={(value) => handleFilterChange('searchTerm', value)} 
              placeholder="Cari no surat, ringkasan, pengirim/tujuan..." 
            />
          </div>
          <FilterDropdown 
            options={typeOptions} 
            selectedValue={filters.type} 
            setSelectedValue={(value) => handleFilterChange('type', value)}
            placeholder="Semua Jenis Surat"
          />
          <FilterDropdown 
            options={classificationOptions} 
            selectedValue={filters.classification} 
            setSelectedValue={(value) => handleFilterChange('classification', value)}
            placeholder="Semua Klasifikasi"
          />
          <div className="flex items-center gap-2">
            <InputField type="date" name="startDate" value={filters.startDate} onChange={(e) => handleFilterChange(e.target.name, e.target.value)} />
            <span className="text-gray-500">-</span>
            <InputField type="date" name="endDate" value={filters.endDate} onChange={(e) => handleFilterChange(e.target.name, e.target.value)} />
          </div>
        </div>
        <LetterTable letters={filteredLetters} />
      </div>
    </div>
  );
};

export default Archives;