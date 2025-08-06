import React, { useState } from 'react';
import Label from '../../components/form/Label';
import InputField from '../../components/form/InputField';
import Select from '../../components/form/Select';
import TextArea from '../../components/form/TextArea';
import Button from '../../components/ui/Button';
import FileInput from '../../components/form/FileInput';

const classificationOptions = [
  { value: '', label: 'Pilih Klasifikasi' },
  { value: 'Biasa', label: 'Biasa' },
  { value: 'Penting', label: 'Penting' },
  { value: 'Rahasia', label: 'Rahasia' },
];

const IncomingLetterForm = () => {
  const [letterData, setLetterData] = useState({
    letterNumber: '',
    classification: '',
    letterDate: '',
    entryDate: '',
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data Surat Masuk:", letterData);
    alert('Surat Masuk Disimpan!');
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Formulir Surat Masuk</h1>
      <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 md:grid-cols-2">
          
          <div>
            <Label htmlFor="letterNumber">Nomor Surat</Label>
            <InputField type="text" name="letterNumber" id="letterNumber" value={letterData.letterNumber} onChange={handleChange} required />
          </div>

          <div>
            <Label htmlFor="classification">Klasifikasi</Label>
            <Select name="classification" id="classification" options={classificationOptions} value={letterData.classification} onChange={handleChange} required />
          </div>

          <div>
            <Label htmlFor="letterDate">Tanggal Surat</Label>
            <InputField type="date" name="letterDate" id="letterDate" value={letterData.letterDate} onChange={handleChange} required />
          </div>

          <div>
            <Label htmlFor="entryDate">Tanggal Masuk</Label>
            <InputField type="date" name="entryDate" id="entryDate" value={letterData.entryDate} onChange={handleChange} required />
          </div>

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
            <Button to="/incoming-letters" variant="secondary">Batal</Button>
            <Button type="submit">Simpan</Button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default IncomingLetterForm;