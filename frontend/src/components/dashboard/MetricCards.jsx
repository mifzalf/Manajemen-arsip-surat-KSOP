import React from 'react';
// Komponen Badge tidak lagi dibutuhkan di file ini
import { 
  EnvelopeIcon, 
  PaperPlaneIcon, 
  FolderIcon,
} from '../../icons'; // Arrow icons tidak lagi dibutuhkan

// 1. Data diubah untuk merefleksikan "surat hari ini"
const stats = [
  { 
    label: "Surat Masuk", 
    value: 120, 
    today: 20, // Data baru: jumlah surat hari ini
    icon: <EnvelopeIcon className="h-6 w-6 text-gray-800" /> 
  },
  { 
    label: "Surat Keluar", 
    value: 80, 
    today: 15, // Data baru: jumlah surat hari ini
    icon: <PaperPlaneIcon className="h-6 w-6 text-gray-800" />
  },
  { 
    label: "Arsip", 
    value: 200, 
    today: 5, // Data baru: jumlah surat hari ini
    icon: <FolderIcon className="h-6 w-6 text-gray-800" />
  },
];

const MetricCards = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6">
      {stats.map((stat) => (
        <div key={stat.label} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100">
            {stat.icon}
          </div>
          <div className="mt-5 flex items-end justify-between">
            <div>
              <span className="text-sm text-gray-500">{stat.label}</span>
              <h4 className="mt-1 text-2xl font-bold text-gray-800">{stat.value}</h4>
            </div>

            {}
            <div className="flex items-center text-sm font-medium text-green-600">
              <span>+{stat.today}</span>
              <span className="ml-1 text-gray-500">Hari ini</span>
            </div>

          </div>
        </div>
      ))}
    </div>
  );
};

export default MetricCards;