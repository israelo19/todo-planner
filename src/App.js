import React, {useState, useEffect} from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';

// import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
// import List from './components/List';
import axios from 'axios';

function App() {

  const responseMessage = (response) => {
    console.log(response);
  };

  const errorMessage = (error) => {
    console.log(error);
  };

  //CREATING USER PROFILE
  const [profile, setProfile] = useState(null);

  // const navigate = useNavigate(); //THIS MAY BE FOR ROUTING 

  //STORING AND UPDATING THE USER
  useEffect(() => {
    const storedProfile = localStorage.getItem('profile');
    if (storedProfile) {
      setProfile(JSON.parse(storedProfile));
    }
  }, []);

  //GOOGLE LOGIN FUNCTION
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
        // navigate('/todo');
      } catch (err) {
        console.log(err);
      }
    },
  });

  //LOGGING OUT
  const handleLogout = () => {
    googleLogout();
    setProfile(null);
    localStorage.removeItem('profile');
    // navigate('/');
  };





  return (
   
    <div className="App">
      <div> 
        <Navbar></Navbar>  
      </div>
      
        <header className="App-header">
        <Home></Home>
        {/* <List></List> */}
        <br />
        <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />

        </header>
    </div>
  );
}

export default App;
