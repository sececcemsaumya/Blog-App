'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const AdminLogin = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

  
    if (!name || !mobile || !email || !password) {
      alert('Please fill in all fields');
      return;
    }

    if(email!=='admin123@gmail.com' || password !=='admin123'){
      alert('Invalid Email or Password');
      return;
    }
    
   
    try {
      localStorage.setItem('isAdmin', 'true');
      console.log('Redirecting to /create');
      
      
      setTimeout(() => {
        router.push('/create');
      }, 0);
    } catch (error) {
      console.error('Error saving to localStorage or redirecting:', error);
    }
  };

  return (
    <div className="loginpage">
      <form className="admin-login-form" onSubmit={handleSubmit}>
        <p className="admin-head">Admin Login</p>
        <div className="form-content">
          <div className="name">
            <label>Name</label><br />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div><br />
          <div className="mobilenumber">
            <label>Mobile Number</label><br />
            <input
              type="tel"
              pattern="[0-9]{10}"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />
          </div><br />
          <div className="email">
            <label>Email</label><br />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div><br />
          <div className="pass">
            <label>Password</label><br />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div><br />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AdminLogin;
