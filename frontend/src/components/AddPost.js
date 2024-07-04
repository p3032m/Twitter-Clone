import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from "../contexts/authContext";
import axios from 'axios';

const AddPost = () => {
  const [postContent, setPostContent] = useState('');
  const { currentUser, loading } = useAuth();
  const textareaRef = useRef(null);
  const MAX_CHARACTERS = 280;

  const handleInputChange = (event) => {
    const inputText = event.target.value.slice(0, MAX_CHARACTERS); // Limit input to MAX_CHARACTERS
    setPostContent(inputText);
  };

  useEffect(() => {
    // Adjust the height of the textarea based on its scroll height
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [postContent]);

  const handlePost = async (event) => {
    event.preventDefault();
  
    // Retrieve userId and accessToken from localStorage
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const accessToken = localStorage.getItem('accessToken');
  
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/api/users/${currentUser.userId}/tweet`,
        { content: postContent },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        }
      );
      console.log('Tweet added:', response.data);
      // Optionally, reset the form or perform other actions on success
      setPostContent('');
    } catch (error) {
      console.error('Error adding tweet:', error);
    }
  };

  return (
    <div className="p-4 border-b bg-black text-white border-y border-gray-500">
      <div className="flex items-start mb-2">
        <FontAwesomeIcon icon={faUser} className="text-white mr-2 mt-2" />
        <textarea
          ref={textareaRef}
          className="w-full p-2 bg-black text-white border-b border-gray-500 resize-none"
          placeholder="What's happening?!"
          value={postContent}
          onChange={handleInputChange}
          rows="2"
          maxLength={MAX_CHARACTERS} // Set maximum length for textarea
          style={{ overflow: 'hidden' }}
        ></textarea>
      </div>
      <div className="flex justify-end">
        <button
          className={`mt-2 px-4 py-1.5 text-white rounded-xl ${postContent.trim() ? 'bg-blue-500' : 'bg-blue-900'}`}
          disabled={!postContent.trim() || loading} // Disable button if no content or while loading
          onClick={handlePost}
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default AddPost;
