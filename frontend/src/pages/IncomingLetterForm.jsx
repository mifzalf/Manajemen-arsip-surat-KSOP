import { useState } from 'react';

const IncomingLetterForm = () => {
  const [form, setForm] = useState({
    letterNumber: '',
    classification: '',
    letterDate: '',
    entryDate: '',
    sender: '',
    notes: '',
    remarks: '',
    file: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleFileChange = (e) => {
    setForm({ ...form, file: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="max-w-2xl mx-auto py-8">
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white/90">Form Surat Masuk</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5">
          <div>
            <label className="block mb-1.5 text-sm font-medium text-gray-700 dark:text-gray-400">Nomor Surat</label>
            <input
              type="text"
              name="letterNumber"
              value={form.letterNumber}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-primary focus:ring-1 focus:ring-primary dark:border-gray-700 dark:bg-gray-900 dark:text-white/90"
              required
            />
          </div>
          <div>
            <label className="block mb-1.5 text-sm font-medium text-gray-700 dark:text-gray-400">Klasifikasi</label>
            <input
              type="text"
              name="classification"
              value={form.classification}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-primary focus:ring-1 focus:ring-primary dark:border-gray-700 dark:bg-gray-900 dark:text-white/90"
              required
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block mb-1.5 text-sm font-medium text-gray-700 dark:text-gray-400">Tanggal Surat</label>
              <input
                type="date"
                name="letterDate"
                value={form.letterDate}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-primary focus:ring-1 focus:ring-primary dark:border-gray-700 dark:bg-gray-900 dark:text-white/90"
                required
              />
            </div>
            <div>
              <label className="block mb-1.5 text-sm font-medium text-gray-700 dark:text-gray-400">Tanggal Diterima</label>
              <input
                type="date"
                name="entryDate"
                value={form.entryDate}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-primary focus:ring-1 focus:ring-primary dark:border-gray-700 dark:bg-gray-900 dark:text-white/90"
                required
              />
            </div>
          </div>
          <div>
            <label className="block mb-1.5 text-sm font-medium text-gray-700 dark:text-gray-400">Pengirim</label>
            <input
              type="text"
              name="sender"
              value={form.sender}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-primary focus:ring-1 focus:ring-primary dark:border-gray-700 dark:bg-gray-900 dark:text-white/90"
            />
          </div>
          <div>
            <label className="block mb-1.5 text-sm font-medium text-gray-700 dark:text-gray-400">Catatan</label>
            <textarea
              name="notes"
              value={form.notes}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-primary focus:ring-1 focus:ring-primary dark:border-gray-700 dark:bg-gray-900 dark:text-white/90"
              rows={2}
            />
          </div>
          <div>
            <label className="block mb-1.5 text-sm font-medium text-gray-700 dark:text-gray-400">Keterangan</label>
            <textarea
              name="remarks"
              value={form.remarks}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-primary focus:ring-1 focus:ring-primary dark:border-gray-700 dark:bg-gray-900 dark:text-white/90"
              rows={2}
            />
          </div>
          <div>
            <label className="block mb-1.5 text-sm font-medium text-gray-700 dark:text-gray-400">File</label>
            <input
              type="file"
              name="file"
              onChange={handleFileChange}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm dark:border-gray-700 dark:bg-gray-900 dark:text-white/90"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default IncomingLetterForm;
export default IncomingLetterForm;
