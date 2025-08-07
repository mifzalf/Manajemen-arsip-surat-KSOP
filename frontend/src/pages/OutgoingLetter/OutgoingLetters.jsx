import React, { useState, useMemo } from 'react';
import Button from '../../components/ui/Button';
import LetterTable from '../../components/LetterTable';
import SearchBar from '../../components/SearchBar';

const dummyLetters = [
  { id: 1, recipient: 'PT. Mitra Jaya', letterNumber: '001/P/KSOP-K/6/2024', letterDate: '2024-06-10', summary: 'Pengiriman proposal kerja sama', classification: 'Penting', remarks: 'Menunggu balasan'},
  { id: 2, recipient: 'Seluruh Staff', letterNumber: '002/B/KSOP-K/6/2024', letterDate: '2024-06-11', summary: 'Surat pemberitahuan internal', classification: 'Biasa', remarks: 'Terkirim'},
];

const OutgoingLetters = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredLetters = useMemo(() => {
    return dummyLetters.filter(letter => 
      letter.letterNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      letter.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      letter.recipient.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Surat Keluar</h1>
        <Button to="/outgoing-letter-form">Tambah Surat Keluar</Button>
      </div>
      <div className="rounded-2xl border border-gray-200 bg-white shadow-sm">
        <div className="border-b border-gray-200 p-4">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} placeholder="Cari nomor surat, tujuan, ringkasan..." />
        </div>
        <LetterTable letters={filteredLetters} pageType="outgoing" />
      </div>
    </div>
  );
};

export default OutgoingLetters;