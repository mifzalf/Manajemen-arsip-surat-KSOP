import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from '../ui/dropdown/Dropdown';
import { DropdownItem } from '../ui/dropdown/DropdownItem';

const notifications = [
  { id: 1, user: 'Terry Franci', image: '/images/user/user-02.jpg', time: '5 min ago' },
  { id: 2, user: 'Alena Franci', image: '/images/user/user-03.jpg', time: '8 min ago' },
];

// Pastikan Anda menggunakan "export default" di sini
export default function NotificationDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [notifying, setNotifying] = useState(true);

  const handleClick = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setNotifying(false);
    }
  };

  return (
    <div className="relative">
      <button onClick={handleClick} className="relative flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 transition-colors hover:bg-gray-100">
        {notifying && (
          <span className="absolute right-0 top-0.5 z-10 h-2 w-2 rounded-full bg-orange-400">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75"></span>
          </span>
        )}
        <svg className="fill-current" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M10.75 2.29248C10.75 1.87827 10.4143 1.54248 10 1.54248C9.58583 1.54248 9.25004 1.87827 9.25004 2.29248V2.83613C6.08266 3.20733 3.62504 5.9004 3.62504 9.16748V14.4591H3.33337C2.91916 14.4591 2.58337 14.7949 2.58337 15.2091C2.58337 15.6234 2.91916 15.9591 3.33337 15.9591H16.6667C17.0809 15.9591 17.4167 15.6234 17.4167 15.2091C17.4167 14.7949 17.0809 14.4591 16.6667 14.4591H16.375V9.16748C16.375 5.9004 13.9174 3.20733 10.75 2.83613V2.29248ZM14.875 14.4591V9.16748C14.875 6.47509 12.6924 4.29248 10 4.29248C7.30765 4.29248 5.12504 6.47509 5.12504 9.16748V14.4591H14.875ZM8.00004 17.7085C8.00004 18.1228 8.33583 18.4585 8.75004 18.4585H11.25C11.6643 18.4585 12 18.1228 12 17.7085C12 17.2943 11.6643 16.9585 11.25 16.9585H8.75004C8.33583 16.9585 8.00004 17.2943 8.00004 17.7085Z" fill="currentColor"/>
        </svg>
      </button>

      <Dropdown isOpen={isOpen} onClose={() => setIsOpen(false)} className="absolute -right-[140px] mt-4 flex h-auto max-h-[480px] w-[350px] flex-col rounded-2xl border bg-white p-3 shadow-lg sm:w-[360px] lg:right-0">
        <div className="mb-3 flex items-center justify-between border-b pb-3">
          <h5 className="text-lg font-semibold text-gray-800">Notifikasi</h5>
        </div>
        <ul className="flex flex-col overflow-y-auto">
          {notifications.map(notif => (
            <li key={notif.id}>
              <DropdownItem onItemClick={() => setIsOpen(false)} className="flex gap-3 rounded-lg p-3 hover:bg-gray-100">
                <img width={40} height={40} src={notif.image} alt="User" className="rounded-full" />
                <div>
                  <p className="mb-1 text-sm text-gray-500">
                    <span className="font-medium text-gray-800">{notif.user}</span> mengirim permintaan.
                  </p>
                  <span className="text-xs text-gray-500">{notif.time}</span>
                </div>
              </DropdownItem>
            </li>
          ))}
        </ul>
        <Link to="/notifications" className="mt-3 block rounded-lg border px-4 py-2 text-center text-sm font-medium text-gray-700 hover:bg-gray-100">Lihat Semua Notifikasi</Link>
      </Dropdown>
    </div>
  );
}