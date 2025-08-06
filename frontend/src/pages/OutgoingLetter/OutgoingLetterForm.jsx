import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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

const classificationCodes = { Biasa: 'B', Penting: 'P', Rahasia: 'R' };

const OutgoingLetterForm = () => {
  const [formData, setFormData] = useState({
    letterNumber: 'Nomor akan dibuat otomatis',
    recipient: '',
    letterDate: new Date().toISOString().slice(0, 10),
    summary: '',
    classification: '',
    remarks: '', // State untuk Keterangan ditambahkan kembali
    file: null,
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleFileChange = (e) => setFormData({ ...formData, file: e.target.files[0] });

  useEffect(() => {
    if (formData.classification) {
      const code = classificationCodes[formData.classification];
      const date = new Date(formData.letterDate);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const dummyCount = 123;
      const generatedNumber = `${String(dummyCount).padStart(3, '0')}/${code}/KSOP-K/${month}/${year}`;
      setFormData(prev => ({ ...prev, letterNumber: generatedNumber }));
    } else {
      setFormData(prev => ({ ...prev, letterNumber: 'Pilih klasifikasi untuk membuat nomor' }));
    }
  }, [formData.classification, formData.letterDate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data Surat Keluar:", formData);
    alert('Surat Keluar Disimpan!');
  };

  return (
    <div className="space-y-6">
      <Link to="/outgoing-letters" className="text-sm text-gray-500 hover:text-brand-500">&larr; Kembali</Link>
      <h1 className="text-2xl font-bold text-gray-800">Formulir Surat Keluar</h1>
      <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <Label htmlFor="letterNumber">Nomor Surat</Label>
            <InputField name="letterNumber" id="letterNumber" value={formData.letterNumber} disabled />
          </div>
          <div>
            <Label htmlFor="recipient">Tujuan</Label>
            <InputField name="recipient" id="recipient" onChange={handleChange} required />
          </div>
          <div>
            <Label htmlFor="letterDate">Tanggal Surat</Label>
            <InputField type="date" name="letterDate" id="letterDate" value={formData.letterDate} onChange={handleChange} required />
          </div>
          <div>
            <Label htmlFor="classification">Kode Klasifikasi</Label>
            <Select name="classification" id="classification" options={classificationOptions} onChange={handleChange} required />
          </div>
          <div className="md:col-span-2">
            <Label htmlFor="summary">Ringkasan Isi</Label>
            <TextArea name="summary" id="summary" rows="4" onChange={handleChange}></TextArea>
          </div>
          
          {/* Input Keterangan ditambahkan kembali di sini */}
          <div className="md:col-span-2">
            <Label htmlFor="remarks">Keterangan</Label>
            <TextArea name="remarks" id="remarks" rows="4" value={formData.remarks} onChange={handleChange}></TextArea>
          </div>

          <div className="md:col-span-2">
            <Label htmlFor="file">Lampiran File</Label>
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