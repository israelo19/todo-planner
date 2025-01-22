/*
To-do app by Israel Ogwu 
Sophomore Computer Science student - UMD
01/18/2025 - 4:54am 
Note to self, please Israel I hope you've fixed your sleep schedule, 
surely being up at this time is not Worth it.
*/

//NECESSARY IMPORTS
import React from 'react'; //REACT
import { GoogleLogin } from "@react-oauth/google"; //GOOGLE AUTH
import TodoList from './TodoList';
//PROFILE VARIABLE, AND LOGIN/LOGOUT FUNCTIONS
const Home = ({ profile, onLogin, onLogout }) => {

  
  const handleLoginSuccess = async (response) => {
    console.log('Login attempt:', response); // Add this debug line
    await onLogin(response);
    // navigate('/todo');
  };

  return (
    //WHAT DO YOU HAVE TO DO 
    <div className="flex flex-col items-center justify-center w-full">
      {/* <div className="text-center mb-8">
        <h1 className="font-Jersey25 text-[#152E4D] flex flex-col items-center">
          <span className="text-9xl mb-4 drop-shadow-[0_1.2px_1.2px_rgba(5,0,0,0.8)] opacity-0 animate-slide-in">
            What do
          </span>
          <span className="text-9xl mb-4 drop-shadow-[0_1.2px_1.2px_rgba(5,0,0,0.8)] opacity-0 animate-slide-in [animation-delay:200ms]">
            you have
          </span>
          <span className="text-9xl drop-shadow-[0_1.2px_1.2px_rgba(5,0,0,0.8)] opacity-0 animate-slide-in [animation-delay:500ms]">
            ToDO?
          </span>
        </h1>
      </div> */}
        {/* ////////////////// */}
      {/* WHETHER TO SHOW THE GOOGLE SIGN IN OR LOGOUT BUTTON*/}
      {/* <div className="flex flex-col gap-4 w-full max-w-xs">
      {!profile ? (
         <span className='flex flex-col items-center justify-center w-full opacity-0 animate-slide-in [animation-delay:600ms]'>
          <GoogleLogin
            onSuccess={handleLoginSuccess}
            onError={(error) => console.log("Login Failed:", error)}
          />
          </span>
        ) : (
          <span className='opacity-0 animate-slide-in [animation-delay:600ms]'>
          <button
            onClick={onLogout}
            className="bg-[#152E4D] text-white py-3 px-6 w-full text-2xl font-Jersey25"
          >
            Logout
          </button>
          </span>
        )} */}
       
        {/* <button className="bg-[#152E4D] text-white py-3 px-6 w-full text-2xl font-Jersey25">
          Login
        </button>
        <button className="bg-[#152E4D] text-white py-3 px-6 w-full text-2xl font-Jersey25">
          Sign Up!
        </button> */}
        {/* ////////////////// */}

      {/* </div> */}

      <TodoList></TodoList>
    </div>
  );
};

export default Home;