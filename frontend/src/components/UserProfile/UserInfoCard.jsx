import React from 'react';

export default function UserInfoCard({ user }) {
  if (!user) return null;

  return (
    <div className="rounded-lg border p-4">
      <h5 className="mb-4 text-lg font-semibold text-gray-800">Informasi Pribadi</h5>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <p className="text-sm text-gray-500">Nama Lengkap</p>
          <p className="font-medium">{user.name}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Email</p>
          <p className="font-medium">{user.email}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Telepon</p>
          <p className="font-medium">{user.phone}</p>
        </div>
      </div>
    </div>
  );
}