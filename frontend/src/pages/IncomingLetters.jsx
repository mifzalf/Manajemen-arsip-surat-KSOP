import React, { useState, useMemo } from 'react';
import ButtonGroup from '../components/ButtonGroup';
import LetterTable from '../components/LetterTable';
import SearchBar from '../components/SearchBar';
import FilterDropdown from '../components/FilterDropdown';

const dummyLetters = [
  { id: 1, number: '001/IN/2024', classification: 'Penting', letterDate: '2024-06-01', entryDate: '2024-06-02', notes: 'Surat undangan rapat koordinasi', remarks: 'Segera proses'},
  { id: 2, number: '002/IN/2024', classification: 'Biasa', letterDate: '2024-06-03', entryDate: '2024-06-03', notes: 'Laporan bulanan cabang', remarks: '-'},
  { id: 3, number: '003/IN/2024', classification: 'Rahasia', letterDate: '2024-06-04', entryDate: '2024-06-05', notes: 'Dokumen perjanjian kerja sama', remarks: 'Hanya untuk direksi'},
  { id: 4, number: '004/IN/2024', classification: 'Biasa', letterDate: '2024-06-05', entryDate: '2024-06-06', notes: 'Permohonan data statistik', remarks: 'Proses setelah dispo'},
];

const classificationOptions = ['Penting', 'Biasa', 'Rahasia'];

const IncomingLetters = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClassification, setSelectedClassification] = useState('');

  const filteredLetters = useMemo(() => {
    return dummyLetters
      .filter(letter => 
        letter.number.toLowerCase().includes(searchTerm.toLowerCase()) ||
        letter.notes.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .filter(letter => 
        selectedClassification ? letter.classification === selectedClassification : true
      );
  }, [searchTerm, selectedClassification]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Surat Masuk</h1>
        <ButtonGroup to="/incoming-letter-form" />
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-5">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <FilterDropdown
            options={classificationOptions}
            selectedValue={selectedClassification}
            setSelectedValue={setSelectedClassification}
          />
        </div>
        <LetterTable letters={filteredLetters} />
      </div>
    </div>
  );
};

export default IncomingLetters;