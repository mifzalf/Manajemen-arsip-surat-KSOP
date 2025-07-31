import React from 'react';
import ButtonGroup from '../components/ButtonGroup';
import LetterTable from '../components/LetterTable';

const dummyLetters = [
  {
    id: 1,
    number: '001/OUT/2024',
    classification: 'General',
    letterDate: '2024-06-01',
    entryDate: '2024-06-02',
    notes: 'Sample outgoing letter',
    remarks: 'No remarks',
    file: 'file.pdf',
  },
];

const OutgoingLetters = () => (
  <div className="space-y-6">
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white/90">Outgoing Letters</h1>
      <ButtonGroup to="/outgoing-letter-form" />
    </div>
    <LetterTable letters={dummyLetters} />
  </div>
);

export default OutgoingLetters;