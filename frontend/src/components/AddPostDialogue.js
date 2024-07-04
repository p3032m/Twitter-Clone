import React, { useState, useRef, useEffect } from 'react';
import image from '../images/twitter logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const AddPostDialogue = ({ onClose }) => {
  const [postContent, setPostContent] = useState('');
  const textareaRef = useRef(null);

  const handleInputChange = (event) => {
    setPostContent(event.target.value);
  };

  useEffect(() => {
    // Adjust the height of the textarea based on its scroll height
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [postContent]);

  return (
    <div className="fixed inset-0 bg-white bg-opacity-20 flex items-center justify-center z-50">
      <div className="bg-black text-white rounded-lg p-6 w-80 relative text-center">
        <div className="flex items-start mb-2">
          <FontAwesomeIcon icon={faUser} className="text-white mr-2 mt-2" />
          <textarea
            ref={textareaRef}
            className="w-full p-2 bg-black text-white border-b border-gray-500 resize-none focus:outline-none"
            placeholder="What's happening?!"
            value={postContent}
            onChange={handleInputChange}
            rows="2"
            style={{ overflow: 'hidden' }}
          ></textarea>
        </div>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-white focus:outline-none"
          >
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
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <button
          className={`mt-2 px-4 py-1.5 text-white rounded-xl ${postContent.trim() ? 'bg-blue-500' : 'bg-blue-900'}`}
          disabled={!postContent.trim()}
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default AddPostDialogue;
