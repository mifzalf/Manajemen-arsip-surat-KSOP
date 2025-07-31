import React, { useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSidebar } from '../context/SidebarContext';
import SidebarWidget from '../components/SidebarWidget';

const navItems = [
  { name: 'Dashboard', path: '/', icon: <span>🏠</span> },
  { name: 'Surat Masuk', path: '/incoming-letters', icon: <span>📥</span> },
  { name: 'Surat Keluar', path: '/outgoing-letters', icon: <span>📤</span> },
  { name: 'Arsip', path: '/archives', icon: <span>🗄️</span> },
];

const AppSidebar = () => {
  const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();
  const location = useLocation();

  const isActive = useCallback((path) => location.pathname === path, [location.pathname]);

  const renderMenuItems = (items) => (
    <ul className="flex flex-col gap-2">
      {items.map((nav) => (
        <li key={nav.name}>
          <Link
            to={nav.path}
            className={`group flex items-center gap-3 rounded-lg px-4 py-3 font-medium transition-all duration-150
              ${isActive(nav.path)
                ? 'bg-brand-50 text-brand-600'
                : 'text-gray-600 hover:bg-gray-100'
              }
              ${!isExpanded && !isHovered ? 'lg:justify-center' : 'lg:justify-start'}
            `}
          >
            <span className="text-lg">{nav.icon}</span>
            {(isExpanded || isHovered || isMobileOpen) && (
              <span className="truncate">{nav.name}</span>
            )}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <aside
      className={`fixed top-0 left-0 flex h-screen flex-col bg-white px-5 transition-all duration-300 ease-in-out z-40 border-r border-gray-200
        ${isExpanded || isMobileOpen ? 'w-[290px]' : isHovered ? 'w-[290px]' : 'w-[90px]'}
        ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0
      `}
      onMouseEnter={() => !isExpanded && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`flex h-16 items-center border-b border-gray-200 
        ${!isExpanded && !isHovered ? 'lg:justify-center' : 'justify-start'}
      `}>
        <Link to="/" className="font-bold text-xl text-brand-500">
          {(isExpanded || isHovered || isMobileOpen) ? 'KSOP Admin' : 'K'}
        </Link>
      </div>

      <div className="flex flex-col overflow-y-auto no-scrollbar flex-grow py-8">
        <nav className="flex-grow">
          <h2 className={`mb-4 text-xs uppercase text-gray-400 
            ${!isExpanded && !isHovered ? 'lg:text-center' : 'pl-4'}
          `}>
            {(isExpanded || isHovered || isMobileOpen) ? 'Menu' : '•••'}
          </h2>
          {renderMenuItems(navItems)}
        </nav>
        
        {(isExpanded || isHovered || isMobileOpen) && <SidebarWidget />}
      </div>
    </aside>
  );
};

export default AppSidebar;