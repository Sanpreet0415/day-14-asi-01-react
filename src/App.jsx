// App.jsx

import React, { useState, useEffect } from 'react';
import Post from './Post';

const App = () => {
  const [timer, setTimer] = useState(0);
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleAddPost = () => {
    if (title && body) {
      const newPost = {
        id: Date.now(),
        title,
        body,
        verifyPost: false,
      };
      setPosts([...posts, newPost]);
      setTitle('');
      setBody('');
    }
  };

  return (
    <div>
      <h1>Timer: {timer}</h1>
      <div>
        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button onClick={handleAddPost}>Add Post</button>
      </div>
      <hr />
      <div>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default App;
