import React from 'react';
import { GoogleLogin } from "@react-oauth/google";




const Home = ({ profile, onLogin, onLogout }) => {

  const handleLoginSuccess = async (response) => {
    await onLogin(response);
    // navigate('/todo');
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="text-center mb-8">
        <h1 className="font-Jersey25 text-[#152E4D] flex flex-col items-center">
          <span className="text-9xl mb-4 drop-shadow-[0_1.2px_1.2px_rgba(5,0,0,0.8)] opacity-0 animate-slide-in">
            What do
          </span>
          <span className="text-9xl mb-4 drop-shadow-[0_1.2px_1.2px_rgba(5,0,0,0.8)] opacity-0 animate-slide-in [animation-delay:200ms]">
            you have
          </span>
          <span className="text-9xl drop-shadow-[0_1.2px_1.2px_rgba(5,0,0,0.8)] opacity-0 animate-slide-in [animation-delay:400ms]">
            ToDO?
          </span>
        </h1>
      </div>
      
      <div className="flex flex-col gap-4 w-full max-w-xs">
      {!profile ? (
          <GoogleLogin
            onSuccess={handleLoginSuccess}
            onError={(error) => console.log("Login Failed:", error)}
          />
        ) : (
          <button
            onClick={onLogout}
            className="bg-[#152E4D] text-white py-3 px-6 w-full text-2xl font-Jersey25"
          >
            Logout
          </button>
        )}
       
        {/* <button className="bg-[#152E4D] text-white py-3 px-6 w-full text-2xl font-Jersey25">
          Login
        </button>
        <button className="bg-[#152E4D] text-white py-3 px-6 w-full text-2xl font-Jersey25">
          Sign Up!
        </button> */}
      </div>
    </div>
  );
};

export default Home;