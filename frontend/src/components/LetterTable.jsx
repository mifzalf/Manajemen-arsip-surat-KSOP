import React from "react";

const LetterTable = ({ letters = [], onEdit = () => {}, onDelete = () => {} }) => (
  <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800">
      <thead className="bg-gray-50 dark:bg-gray-900">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Letter Number</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Classification</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Letter Date</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Entry Date</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Notes</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Remarks</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">File</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
        {letters.map((letter) => (
          <tr key={letter.id}>
            <td className="px-6 py-4">{letter.number}</td>
            <td className="px-6 py-4">{letter.classification}</td>
            <td className="px-6 py-4">{letter.letterDate}</td>
            <td className="px-6 py-4">{letter.entryDate}</td>
            <td className="px-6 py-4">{letter.notes}</td>
            <td className="px-6 py-4">{letter.remarks}</td>
            <td className="px-6 py-4">{letter.file}</td>
            <td className="px-6 py-4 flex gap-2">
              <button
                onClick={() => onEdit(letter.id)}
                className="inline-flex items-center rounded bg-brand-500 px-3 py-1.5 text-xs font-semibold text-white hover:bg-brand-600"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(letter.id)}
                className="inline-flex items-center rounded bg-red-500 px-3 py-1.5 text-xs font-semibold text-white hover:bg-red-600"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default LetterTable;