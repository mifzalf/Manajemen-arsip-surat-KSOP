import React, { useState, useEffect } from 'react';
import Label from '../components/form/Label';
import InputField from '../components/form/InputField';
import Select from '../components/form/Select';
import TextArea from '../components/form/TextArea';
import Button from '../components/ui/Button';
import FileInput from '../components/form/FileInput';

const classificationOptions = [
  { value: '', label: 'Pilih Klasifikasi' },
  { value: 'Biasa', label: 'Biasa' },
  { value: 'Penting', label: 'Penting' },
  { value: 'Rahasia', label: 'Rahasia' },
];

const classificationCodes = {
  Biasa: 'B',
  Penting: 'P',
  Rahasia: 'R',
};

const OutgoingLetterForm = () => {
  const [letterData, setLetterData] = useState({
    letterNumber: 'Nomor akan dibuat otomatis',
    classification: '',
    letterDate: new Date().toISOString().slice(0, 10),
    notes: '',
    remarks: '',
    file: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLetterData({ ...letterData, [name]: value });
  };

  const handleFileChange = (e) => {
    setLetterData({ ...letterData, file: e.target.files[0] });
  };
  
  useEffect(() => {
    if (letterData.classification) {
      const code = classificationCodes[letterData.classification];
      const date = new Date(letterData.letterDate);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const dummyCount = 123;
      
      const generatedNumber = `${String(dummyCount).padStart(3, '0')}/${code}/KSOP-K/${month}/${year}`;
      setLetterData(prev => ({ ...prev, letterNumber: generatedNumber }));
    } else {
      setLetterData(prev => ({ ...prev, letterNumber: 'Pilih klasifikasi untuk membuat nomor' }));
    }
  }, [letterData.classification, letterData.letterDate]);


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data Surat Keluar:", letterData);
    alert('Surat Keluar Disimpan!');
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Formulir Surat Keluar</h1>
      <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 md:grid-cols-2">
          
          <div>
            <Label htmlFor="letterNumber">Nomor Surat</Label>
            <InputField type="text" name="letterNumber" id="letterNumber" value={letterData.letterNumber} disabled />
          </div>

          <div>
            <Label htmlFor="classification">Klasifikasi</Label>
            <Select name="classification" id="classification" options={classificationOptions} value={letterData.classification} onChange={handleChange} required />
          </div>

          <div>
            <Label htmlFor="letterDate">Tanggal Surat</Label>
            <InputField type="date" name="letterDate" id="letterDate" value={letterData.letterDate} onChange={handleChange} required />
          </div>

          <div></div>

          <div className="md:col-span-2">
            <Label htmlFor="notes">Catatan</Label>
            <TextArea name="notes" id="notes" rows="4" value={letterData.notes} onChange={handleChange}></TextArea>
          </div>

          <div className="md:col-span-2">
            <Label htmlFor="remarks">Keterangan</Label>
            <TextArea name="remarks" id="remarks" rows="4" value={letterData.remarks} onChange={handleChange}></TextArea>
          </div>

          <div className="md:col-span-2">
            <Label htmlFor="file">Upload File</Label>
            <FileInput name="file" id="file" onChange={handleFileChange} />
          </div>

          <div className="md:col-span-2 flex justify-end gap-3">
            <Button to="/outgoing-letters" variant="secondary">Batal</Button>
            <Button type="submit">Simpan</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OutgoingLetterForm;