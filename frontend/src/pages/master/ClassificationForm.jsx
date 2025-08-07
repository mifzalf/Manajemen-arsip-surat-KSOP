import React from 'react';
import { Link } from 'react-router-dom';
import Label from '../../components/form/Label';
import InputField from '../../components/form/InputField';
import Button from '../../components/ui/Button';

const ClassificationForm = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Klasifikasi Disimpan!');
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <Link to="/master/classification" className="text-sm text-gray-500 hover:text-brand-500">
            &larr; Kembali ke Kelola Klasifikasi
          </Link>
          <h1 className="text-2xl font-bold text-gray-800">Formulir Klasifikasi</h1>
        </div>
      </div>
      
      <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <Label htmlFor="kode">Kode Klasifikasi</Label>
            <InputField 
              id="kode" 
              name="kode" 
              type="text" 
              placeholder="Contoh: P"
              required 
            />
          </div>

          <div>
            <Label htmlFor="klasifikasi">Klasifikasi</Label>
            <InputField 
              id="klasifikasi" 
              name="klasifikasi" 
              type="text"
              placeholder="Contoh: Penting"
              required
            />
          </div>
          
          <div className="flex justify-end gap-3">
            <Button to="/master/classification" variant="secondary">
              Batal
            </Button>
            <Button type="submit">
              Simpan
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ClassificationForm;