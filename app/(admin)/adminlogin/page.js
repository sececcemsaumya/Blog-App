'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

const AdminLogin = () => {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push('/create');
  };

  return (
    <div className="loginpage">
      <form className="admin-login-form" onSubmit={handleSubmit}>
        <p className="admin-head">Admin Login</p>
        <div className="form-content">
          <div className="name">
            <label>Name</label><br />
            <input type="text" className="rounded borderless outline" placeholder="Enter your Name" required />
          </div>
          <br />

          <div>
            <label>Email</label><br />
            <input type="email" className="rounded borderless outline" placeholder="Enter your Email" required />
          </div>
          <br />
          <div className="pass">
            <label>Password</label><br />
            <input type="password" className="rounded borderless outline" placeholder="Enter your Password" required />
          </div>
          <br />
          <button type="submit" className="submit rounded borderless">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AdminLogin;
