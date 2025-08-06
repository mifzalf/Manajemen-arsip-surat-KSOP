import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import LetterTable from '../../components/LetterTable';
import SearchBar from '../../components/SearchBar';
import Button from '../../components/ui/Button';

const dummyLetters = [
  { id: 1, agendaId: 'AGD-001', sender: 'PT. Sejahtera Abadi', letterNumber: '123/SA/VI/2024', letterDate: '2024-06-01', receivedDate: '2024-06-02', summary: 'Surat undangan rapat koordinasi', classification: 'Penting', remarks: 'Segera proses'},
  { id: 2, agendaId: 'AGD-002', sender: 'Cabang Utama Surabaya', letterNumber: 'CU-SBY/L/VI/2024', letterDate: '2024-06-03', receivedDate: '2024-06-03', summary: 'Laporan bulanan cabang', classification: 'Biasa', remarks: '-'},
];

const IncomingLetters = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredLetters = useMemo(() => {
    return dummyLetters.filter(letter => 
      letter.letterNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      letter.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      letter.sender.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Surat Masuk</h1>
        <Button to="/incoming-letter-form">Tambah Surat Masuk</Button>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white shadow-sm">
        <div className="border-b border-gray-200 p-4">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} placeholder="Cari nomor surat, pengirim, ringkasan..." />
        </div>
        <LetterTable letters={filteredLetters} detailPagePath="/incoming-letters" showSenderColumn={true} />
      </div>
    </div>
  );
};

export default IncomingLetters;