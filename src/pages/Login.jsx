import React, { useState } from 'react';
import logo from '../assets/images/logoc.png';
import { signInAdmin } from '../services/auth';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      localStorage.setItem('customer_id', '687e227295e84e85181ef520');

      const data = await signInAdmin(email, password);

      localStorage.setItem('auth_token', data.token);

      alert('Giriş başarılı!');
    } catch (err) {
      const msg = err?.response?.data?.error || 'Giriş başarısız';
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="card shadow p-4" style={{ minWidth: '360px' }}>
        <div className="img-wrapper text-center mb-4">
          <img src={logo} className="img-fluid logo" alt="Logo" style={{ maxHeight: 80 }} />
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              id="email"
              className="form-control rounded-5"
              placeholder="abc@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              className="form-control rounded-5"
              placeholder="******"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
            />
          </div>

          {error && <div className="alert alert-danger">{error}</div>}

          <button type="submit" className="btn custom-btn rounded-5 w-100 text-white" disabled={loading}>
            {loading ? 'Giriş Yapılıyor...' : 'Giriş Yap'}
          </button>
        </form>
        <div className='mt-3'>
          <a href="#" className='text-dark remember-pass'>Şifremi Unuttum</a>
        </div>
      </div>
    </div>
  );
}





