import React, { useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const storedProfile = localStorage.getItem('profile');
    if (storedProfile) {
      setProfile(JSON.parse(storedProfile));
    }
  }, []);

  const login = useGoogleLogin({
    onSuccess: async (codeResponse) => {
      try {
        const res = await axios.get('https://www.googleapis.com/oauth2/v1/userinfo', {
          headers: {
            Authorization: `Bearer ${codeResponse.access_token}`,
          },
        });
        setProfile(res.data);
        localStorage.setItem('profile', JSON.stringify(res.data));
      } catch (err) {
        console.log(err);
      }
    },
  });

  const handleLogout = () => {
    googleLogout();
    setProfile(null);
    localStorage.removeItem('profile');
  };

  return (
    <div>
      <Navbar profile={profile} onLogout={handleLogout} />
      <Home 
        profile={profile}
        onLogin={login}
        onLogout={handleLogout}
      />
    </div>
  );
}

export default App;
