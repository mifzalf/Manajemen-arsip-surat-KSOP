const Navbar = () => (
  <header className="sticky top-0 z-10 bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-800 h-16 flex items-center px-6">
    <div className="flex-1 flex items-center justify-between">
      <span className="text-lg font-semibold text-gray-800 dark:text-white/90">Dashboard KSOP</span>
      <div className="flex items-center gap-4">
        {}
        <span className="text-sm text-gray-500 dark:text-gray-400">Admin</span>
      </div>
    </div>
  </header>
);

export default Navbar;
