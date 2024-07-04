import React from 'react';
import image from '../images/twitter logo.png';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/authContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ mobileOpen, handleDrawerToggle, togglePostOpen }) => {
  const { logout ,currentUser, loading } = useAuth();
  const navigate=useNavigate();
  const handleLogout = () => {
      logout();
      navigate('/login');
  };
  return (
    <div className={`fixed inset-0 z-40 transition-transform transform ${mobileOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0 bg-black text-white w-1/2 lg:w-auto -mr-52 border-r border-gray-500 lg:border-none`}>
      <div className="py-4">
        <button onClick={handleDrawerToggle} className="lg:hidden mb-4">
          Close
        </button>
        <div className="hidden lg:block">
          <img src={image} alt="Twitter Logo" className="w-12 h-12 mb-4" />
        </div>
        <ul>
          <a href="/" className="p-2 rounded-2xl hover:bg-gray-700 flex items-center mb-1">
            <span>
              <svg viewBox="0 0 24 24" aria-hidden="true" style={{ fill: 'white', width: '28px', height: '28px', marginRight: '8px' }}>
                <path d="M21.591 7.146L12.52 1.157c-.316-.21-.724-.21-1.04 0l-9.071 5.99c-.26.173-.409.456-.409.757v13.183c0 .502.418.913.929.913H9.14c.51 0 .929-.41.929-.913v-7.075h3.909v7.075c0 .502.417.913.928.913h6.165c.511 0 .929-.41.929-.913V7.904c0-.301-.158-.584-.408-.758z"></path>
              </svg>
            </span>
            <span className="text-xl font-medium">Home</span>
          </a>
          <a href="/" className="p-2 rounded-2xl hover:bg-gray-700 flex items-center mb-1">
            <span>
              <svg viewBox="0 0 24 24" aria-hidden="true" style={{ fill: 'white', width: '28px', height: '28px', marginRight: '8px' }}>
                <path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path>
              </svg>
            </span>
            <span className="text-xl font-medium">Explore</span>
          </a>
          
          <a href="/" className="p-2 rounded-2xl hover:bg-gray-700 flex items-center mb-1">
                <span>
                <svg viewBox="0 0 24 24" aria-hidden="true" style={{ fill: 'white', width: '28px', height: '28px', marginRight: '8px' }}><path d="M19.993 9.042C19.48 5.017 16.054 2 11.996 2s-7.49 3.021-7.999 7.051L2.866 18H7.1c.463 2.282 2.481 4 4.9 4s4.437-1.718 4.9-4h4.236l-1.143-8.958zM12 20c-1.306 0-2.417-.835-2.829-2h5.658c-.412 1.165-1.523 2-2.829 2zm-6.866-4l.847-6.698C6.364 6.272 8.941 4 11.996 4s5.627 2.268 6.013 5.295L18.864 16H5.134z"></path></svg>
                </span>
                <span className="text-xl font-medium">Notifications</span>
            </a>
            <a href="/" className="p-2 rounded-2xl hover:bg-gray-700 flex items-center mb-1">
                <span>
                <svg viewBox="0 0 24 24" aria-hidden="true" style={{ fill: 'white', width: '28px', height: '28px', marginRight: '8px' }}><path d="M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5v13c0 1.381-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.119-2.5-2.5v-13zm2.5-.5c-.276 0-.5.224-.5.5v2.764l8 3.638 8-3.636V5.5c0-.276-.224-.5-.5-.5h-15zm15.5 5.463l-8 3.636-8-3.638V18.5c0 .276.224.5.5.5h15c.276 0 .5-.224.5-.5v-8.037z"></path></svg>
                </span>
                <span className="text-xl font-medium">Messages</span>
            </a>
            <a href="/" className="p-2 rounded-2xl hover:bg-gray-700 flex items-center mb-1">
                <span>
                <svg viewBox="0 0 24 24" aria-hidden="true" style={{ fill: 'white', width: '28px', height: '28px', marginRight: '8px' }}><g clip-path="url(#40-clip0_2592_269)" clip-rule="evenodd"><path d="M18 4.1H6c-1.05 0-1.9.85-1.9 1.9v12c0 1.05.85 1.9 1.9 1.9h12c1.05 0 1.9-.85 1.9-1.9V6c0-1.05-.85-1.9-1.9-1.9zM6 2h12c2.21 0 4 1.79 4 4v12c0 2.21-1.79 4-4 4H6c-2.21 0-4-1.79-4-4V6c0-2.21 1.79-4 4-4z"></path><path d="M6.68 17.8l8.108-11.58h2.532L9.21 17.8H6.68z"></path></g><defs><clipPath id="40-clip0_2592_269"><rect height="20" rx="1" width="20" x="2" y="2"></rect></clipPath></defs></svg></span>
                <span className="text-xl font-medium">Grok</span>
            </a>
            <a href="/" className="p-2 rounded-2xl hover:bg-gray-700 flex items-center mb-1">
                <span>
                <svg viewBox="0 0 24 24" aria-hidden="true" style={{ fill: 'white', width: '28px', height: '28px', marginRight: '8px' }}><path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"></path></svg></span>
                <span className="text-xl font-medium">Bookmarks</span>
            </a>
            <a href="/" className="p-2 rounded-2xl hover:bg-gray-700 flex items-center mb-1">
                <span>
                <svg viewBox="0 0 24 24" aria-hidden="true" style={{ fill: 'white', width: '28px', height: '28px', marginRight: '8px' }}><path d="M7.501 19.917L7.471 21H.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977.963 0 1.95.212 2.87.672-.444.478-.851 1.03-1.212 1.656-.507-.204-1.054-.329-1.658-.329-2.767 0-4.57 2.223-4.938 6.004H7.56c-.023.302-.05.599-.059.917zm15.998.056L23.528 21H9.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977s6.816 2.358 7 8.977zM21.437 19c-.367-3.781-2.17-6.004-4.938-6.004s-4.57 2.223-4.938 6.004h9.875zm-4.938-9c-.799 0-1.527-.279-2.116-.73-.836-.64-1.384-1.638-1.384-2.77 0-1.93 1.567-3.5 3.5-3.5s3.5 1.57 3.5 3.5c0 1.132-.548 2.13-1.384 2.77-.589.451-1.317.73-2.116.73zm-1.5-3.5c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5-.673-1.5-1.5-1.5-1.5.673-1.5 1.5zM7.5 3C9.433 3 11 4.57 11 6.5S9.433 10 7.5 10 4 8.43 4 6.5 5.567 3 7.5 3zm0 2C6.673 5 6 5.673 6 6.5S6.673 8 7.5 8 9 7.327 9 6.5 8.327 5 7.5 5z"></path></svg></span>
                <span className="text-xl font-medium">Communities</span>
            </a>
            <a href="/" className="p-2 rounded-2xl hover:bg-gray-700 flex items-center mb-1">
                <span>
                <svg viewBox="0 0 24 24" aria-hidden="true" style={{ fill: 'white', width: '28px', height: '28px', marginRight: '8px' }}><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
                </span>
                <span className="text-xl font-medium">Premium</span>
            </a>
            <a href="/" className="p-2 rounded-2xl hover:bg-gray-700 flex items-center mb-1">
                <span>
                <svg viewBox="0 0 24 24" aria-hidden="true" style={{ fill: 'white', width: '28px', height: '28px', marginRight: '8px' }}><path d="M5.651 19h12.698c-.337-1.8-1.023-3.21-1.945-4.19C15.318 13.65 13.838 13 12 13s-3.317.65-4.404 1.81c-.922.98-1.608 2.39-1.945 4.19zm.486-5.56C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46zM12 4c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2zM8 6c0-2.21 1.791-4 4-4s4 1.79 4 4-1.791 4-4 4-4-1.79-4-4z"></path></svg></span>
                <span className="text-xl font-medium">Profile</span>
            </a>
            <a className="p-2 rounded-2xl hover:bg-gray-700 flex items-center mb-1 hover:cursor-pointer" onClick={handleLogout}>
                <span>
                    <svg viewBox="0 0 24 24" aria-hidden="true" style={{ fill: 'white', width: '28px', height: '28px', marginRight: '8px' }}>
                        <path d="M14.71 11.29l-4-4a1 1 0 0 0-1.42 1.42L12.59 12l-3.3 3.29a1 1 0 0 0 1.42 1.42l4-4a1 1 0 0 0 0-1.42z"></path>
                    </svg>
                </span>
                <span className="text-xl font-medium">Logout</span>
            </a>

          <button onClick={togglePostOpen} className="mt-4 px-6 py-2 text-white rounded-3xl bg-blue-500 w-full text-xl font-medium">
            Post
          </button>
          {currentUser && (
            <p className="text-white text-lg mt-8 font-semibold hover:cursor-pointer pl-2">
              <FontAwesomeIcon icon={faUser} className="text-white mr-2 mt-2 font-medium" /> {currentUser.username}
            </p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
