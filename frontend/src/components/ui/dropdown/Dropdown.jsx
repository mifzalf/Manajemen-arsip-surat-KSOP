import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

// Pastikan Anda menggunakan "export const" di sini, bukan "export default"
export const Dropdown = ({ isOpen, onClose, className, children }) => {
  const dropdownRef = useRef(null);

  // Menutup dropdown jika klik di luar area dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div ref={dropdownRef} className={className}>
      {children}
    </div>
  );
};

Dropdown.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};