import React, { useState, useMemo } from 'react';
import ButtonGroup from '../components/ButtonGroup';
import LetterTable from '../components/LetterTable';
import SearchBar from '../components/SearchBar';
import FilterDropdown from '../components/FilterDropdown';

const dummyLetters = [
  { id: 1, number: '001/OUT/2024', classification: 'Penting', letterDate: '2024-06-10', entryDate: '2024-06-10', notes: 'Pengiriman proposal kerja sama', remarks: 'Menunggu balasan'},
  { id: 2, number: '002/OUT/2024', classification: 'Biasa', letterDate: '2024-06-11', entryDate: '2024-06-11', notes: 'Surat pemberitahuan internal', remarks: 'Terkirim'},
  { id: 3, number: '003/OUT/2024', classification: 'Rahasia', letterDate: '2024-06-12', entryDate: '2024-06-12', notes: 'Dokumen penawaran tender', remarks: 'Terkirim'},
  { id: 4, number: '004/OUT/2024', classification: 'Biasa', letterDate: '2024-06-13', entryDate: '2024-06-13', notes: 'Balasan permohonan data', remarks: 'Selesai'},
];

const classificationOptions = ['Penting', 'Biasa', 'Rahasia'];

const OutgoingLetters = () => {
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
        <h1 className="text-2xl font-bold text-gray-800">Surat Keluar</h1>
        <ButtonGroup to="/outgoing-letter-form" />
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-5">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} placeholder="Cari surat keluar..."/>
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

export default OutgoingLetters;