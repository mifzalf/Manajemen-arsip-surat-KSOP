import { useState } from 'react';

const LetterForm = () => {
  const [letterData, setLetterData] = useState({
    letterNumber: '',
    classification: '',
    date: '',
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
    console.log(letterData);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Create Outgoing Letter</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Letter Number</label>
          <input
            type="text"
            name="letterNumber"
            value={letterData.letterNumber}
            onChange={handleChange}
            className="border rounded p-2 w-full"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Classification</label>
          <input
            type="text"
            name="classification"
            value={letterData.classification}
            onChange={handleChange}
            className="border rounded p-2 w-full"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Date</label>
          <input
            type="date"
            name="date"
            value={letterData.date}
            onChange={handleChange}
            className="border rounded p-2 w-full"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Entry Date</label>
          <input
            type="date"
            name="entryDate"
            value={letterData.entryDate}
            onChange={handleChange}
            className="border rounded p-2 w-full"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Notes</label>
          <textarea
            name="notes"
            value={letterData.notes}
            onChange={handleChange}
            className="border rounded p-2 w-full"
            rows="3"
          />
        </div>
        <div>
          <label className="block mb-1">Remarks</label>
          <textarea
            name="remarks"
            value={letterData.remarks}
            onChange={handleChange}
            className="border rounded p-2 w-full"
            rows="3"
          />
        </div>
        <div>
          <label className="block mb-1">File</label>
          <input
            type="file"
            name="file"
            onChange={handleFileChange}
            className="border rounded p-2 w-full"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white rounded p-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LetterForm;