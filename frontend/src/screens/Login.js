import React,{useState,useEffect} from 'react';
import SignInModal from './SignInModal';
import SignUpModal from './SignUpModal';
import image from '../images/twitter logo.png';
import { useAuth } from '../contexts/authContext';
import { useNavigate } from 'react-router-dom';

function Home() {

  const [isSignInOpen, setSignInOpen] = useState(false);
  const [isSignUpOpen, setSignUpOpen] = useState(false);
  const { currentUser, loading } = useAuth();
  const navigate = useNavigate();

  const toggleSignIn = () => setSignInOpen(!isSignInOpen);
  const toggleSignUp = () => setSignUpOpen(!isSignUpOpen);

  useEffect(() => {
    if (!loading && currentUser) {
      navigate('/');
    }
  }, [currentUser, loading, navigate]);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-black text-white">
      <div className="md:w-1/2 flex justify-center md:justify-end">
        <img src={image} alt="Logo" className="w-24 md:w-96" />
      </div>
      <div className="md:w-1/2 flex flex-col items-center md:items-start md:ml-8 text-center md:text-left">
        <h1 className="text-3xl md:text-6xl mb-12 font-bold">Happening now</h1>
        <h1 className="text-2xl md:text-3xl mb-6 font-bold">Join Today.</h1>
        <button className="bg-blue-500 text-white py-3 px-8 rounded-full mb-12 font-medium" onClick={toggleSignUp} >
          Create account
        </button>
        <div>
          <p className="mb-4 font-medium text-lg">Already have an account?</p>
          <button onClick={toggleSignIn} className="text-blue-500 border border-white-2 rounded-full py-2 px-16">
            Sign in
          </button>
        </div>
      </div>
      {isSignInOpen && <SignInModal onClose={toggleSignIn} />}
      {isSignUpOpen && <SignUpModal onClose={toggleSignUp} />}
    </div>
  );
}

export default Home;
