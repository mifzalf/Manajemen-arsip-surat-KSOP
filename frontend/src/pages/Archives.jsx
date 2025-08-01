import React, { useState, useEffect } from 'react';
import LetterTable from '../components/LetterTable';
import SearchBar from '../components/SearchBar';

const Archives = () => {
  const [letters, setLetters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchLetters = async () => {
      const response = await fetch('/api/letters');
      const data = await response.json();
      setLetters(data);
    };

    fetchLetters();
  }, []);

  const filteredLetters = letters.filter(letter =>
    letter.classification.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Archives</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <LetterTable letters={filteredLetters} />
    </div>
  );
};

export default Archives;