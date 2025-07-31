import React from 'react';
import { Link, useLocation } from "react-router-dom";

const menu = [
  { name: "Dashboard", path: "/", icon: <span>🏠</span> },
  { name: "Incoming Letters", path: "/incoming-letters", icon: <span>📥</span> },
  { name: "Outgoing Letters", path: "/outgoing-letters", icon: <span>📤</span> },
  { name: "Archives", path: "/archives", icon: <span>🗄️</span> },
];

const Sidebar = () => {
  const location = useLocation();
  return (
    <aside className="w-64 bg-white border-r border-gray-200 dark:bg-gray-900 dark:border-gray-800 min-h-screen flex flex-col">
      <div className="h-16 flex items-center justify-center border-b border-gray-200 dark:border-gray-800">
        <span className="text-2xl font-extrabold tracking-tight text-brand-500">KSOP Admin</span>
      </div>
      <nav className="flex-1 py-8">
        <ul className="space-y-1">
          {menu.map((item) => {
            const active = location.pathname === item.path;
            return (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`group flex items-center gap-3 px-6 py-3 rounded-lg font-medium text-theme-sm transition-all duration-150 relative
                    ${active
                      ? "bg-brand-50 text-brand-600 dark:bg-brand-500/[0.12] dark:text-brand-400"
                      : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/5"}
                  `}
                >
                  {/* Highlight bar for active menu */}
                  <span
                    className={`absolute left-0 top-2 bottom-2 w-1 rounded bg-brand-500 transition-all duration-200 ${
                      active ? "opacity-100" : "opacity-0 group-hover:opacity-40"
                    }`}
                  />
                  <span className="text-lg">{item.icon}</span>
                  <span className="truncate">{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="mt-auto mb-8 px-6">
        <div className="rounded-xl bg-brand-50 dark:bg-brand-500/[0.08] p-4 text-xs text-gray-500 dark:text-gray-300 text-center">
          <div className="font-semibold text-brand-600 dark:text-brand-400 mb-1">KSOP Archive System</div>
          <div>© {new Date().getFullYear()} KSOP</div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;