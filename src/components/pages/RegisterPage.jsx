import React, { useState } from 'react';
import axios from 'axios';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post(
        'https://65a4576752f07a8b4a3d5a19.mockapi.io/',
        {
          name: '',
          email: '',
          password: '',
        }
      );

      if (response.status === 201) {
        console.log('Utilizator înregistrat cu succes:', response.data);
       
      } else {
        console.error('Eroare la înregistrarea utilizatorului:', response.data);
       
      }
    } catch (error) {
      console.error('Eroare la înregistrarea utilizatorului:', error.message);
    
    }
  };

  return (
    <div>
      <h2>Înregistrare</h2>
      <form>
        <label>
          Nume:
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </label>
        <label>
          Parolă:
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </label>
        <button type="button" onClick={handleRegister}>
          Înregistrare
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
