import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

function Login() {
  const { login } = useAuth();
  const [form, setForm] = useState({ email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email: form.email });
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 space-y-2">
      <input placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} className="border p-2 w-full" />
      <input type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} className="border p-2 w-full" />
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Login</button>
    </form>
  );
}

export default Login;
