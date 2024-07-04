import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const TweetsFeed = () => {
  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTweets = async () => {
      try {
        const accessToken = localStorage.getItem('accessToken');
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/tweets`, {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        });

        // Sort tweets by createdAt in descending order
        const sortedTweets = response.data.data.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        // console.log('Tweets:', response.data.data);
        setTweets(sortedTweets);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
        console.error("There was an error fetching the tweets!", error);
      }
    };

    fetchTweets();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="overflow-y-auto h-96"> {/* Make this div scrollable with a fixed height */}
        {error && <div className="text-red-500">Error fetching tweets: {error.message}</div>}
        {tweets.map((tweet) => (
            <div key={tweet._id} className="p-4 border-b border-gray-500 bg-black text-white">
                <div className="flex items-center mb-2">
                    <FontAwesomeIcon icon={faUser} className="text-white mr-2" /> {/* Icon to the left of the author's name */}
                    <p className='font-bold mr-4 text-lg'>{tweet.author.name}</p>
                    <p className='text-gray-400 text-sm'>{new Date(tweet.createdAt).toLocaleString()}</p>
                </div>
                <p className='text-md ml-6'>{tweet.content}</p>
            </div>
        ))}
    </div>
  );
};

export default TweetsFeed;
