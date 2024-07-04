import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import AddPost from '../components/AddPost';
import TweetsFeed from '../components/TweetsFeed';
import AddPostDialogue from '../components/AddPostDialogue';
import { useAuth } from '../contexts/authContext';
import { useNavigate } from 'react-router-dom';

const App = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isPostOpen, setPostOpen] = useState(false);
  const { currentUser, loading } = useAuth();
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const togglePostOpen = () => {
    setPostOpen(!isPostOpen);
  };

  const handleClosePostDialog = () => {
    setPostOpen(false);
  };

  useEffect(() => {
    console.log('Current user:', currentUser);
  }, [currentUser]);

  useEffect(() => {
    if (!loading && !currentUser) {
      navigate('/login');
    }
  }, [currentUser, loading, navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex h-screen bg-black text-white max-w-7xl mx-auto">
      <div className="lg:hidden">
        <button onClick={handleDrawerToggle} className="p-4">
          <span className="sr-only">Open sidebar</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      <Sidebar
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
        togglePostOpen={togglePostOpen}
      />

      <div className="flex-1 flex flex-col lg:flex-row">
        <div className="flex-1 py-4 lg:ml-64 border border-gray-500 overflow-y-auto">
          <AddPost />
          <TweetsFeed />
        </div>
        <div className="hidden xl:block xl:w-72 xl:flex-shrink-0 bg-black text-white border border-gray-500 ml-8 rounded-2xl">
          <div className="p-4">
            <h2 className="text-xl font-bold">What's happening?</h2>
          </div>
        </div>
      </div>

      {isPostOpen && <AddPostDialogue onClose={handleClosePostDialog} />}
    </div>
  );
};

export default App;
