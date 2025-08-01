import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { DropdownItem } from '../ui/dropdown/DropdownItem';
import { Dropdown } from '../ui/dropdown/Dropdown';

// 1. Data dummy untuk pengguna yang sedang login
const currentUser = {
  name: "Budi Santoso",
  email: "budi.santoso@example.com",
  photo: "/images/user/owner.jpeg", // Pastikan foto ini ada di public/images/user/
};

export default function UserDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef(null);

  return (
    <div className="relative">
      <button 
        ref={triggerRef}
        onClick={() => setIsOpen(!isOpen)} 
        className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-gray-800 shadow-sm hover:bg-gray-50"
      >
        {/* 2. Gunakan data untuk menampilkan foto */}
        <img src={currentUser.photo} alt="User" className="h-8 w-8 rounded-full" />
        {/* 3. Gunakan data untuk menampilkan nama pendek */}
        <span className="hidden font-medium sm:block">{currentUser.name.split(' ')[0]}</span>
        <svg className={`stroke-gray-500 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.3125 8.65625L9 13.3437L13.6875 8.65625" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <Dropdown 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
        triggerRef={triggerRef}
        className="absolute right-0 mt-4 flex w-[260px] flex-col rounded-2xl border bg-white p-3 shadow-lg"
      >
        <div>
          {/* 4. Gunakan data untuk nama lengkap dan email */}
          <span className="block font-medium text-gray-700">{currentUser.name}</span>
          <span className="block mt-0.5 text-sm text-gray-500">{currentUser.email}</span>
        </div>

        <ul className="my-3 flex flex-col gap-1 border-y py-3">
          <li>
            <DropdownItem to="/profile" onItemClick={() => setIsOpen(false)} className="flex items-center gap-3 rounded-lg px-3 py-2 font-medium hover:bg-gray-100">
              Profil Saya
            </DropdownItem>
          </li>
          <li>
            <DropdownItem to="/settings" onItemClick={() => setIsOpen(false)} className="flex items-center gap-3 rounded-lg px-3 py-2 font-medium hover:bg-gray-100">
              Pengaturan
            </DropdownItem>
          </li>
        </ul>
        
        <DropdownItem tag="button" onItemClick={() => alert('Sign Out!')} className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left font-medium hover:bg-gray-100">
          Keluar (Sign Out)
        </DropdownItem>
      </Dropdown>
    </div>
  );
}