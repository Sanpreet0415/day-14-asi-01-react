// Post.jsx

import React, { useState, useMemo, useCallback } from 'react';

const Post = ({ post }) => {
  const [verifyPost, setVerifyPost] = useState(post.verifyPost);

  const toggleVerify = useCallback(() => {
    setVerifyPost((prevVerify) => !prevVerify);
  }, []);

  // Generate a random background color for each post
  const backgroundColor = useMemo(() => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    return randomColor;
  }, []);

  return (
    <div style={{ backgroundColor, padding: '10px', margin: '10px', borderRadius: '5px' }}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <button onClick={toggleVerify}>{verifyPost ? 'Verified' : 'Verify'}</button>
    </div>
  );
};

export default React.memo(Post);
