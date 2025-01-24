import React, { useState } from 'react';

function LikeButton({ initialLiked, onToggle }) {
  const [liked, setLiked] = useState(initialLiked);

  const handleClick = () => {
    setLiked(!liked);
    onToggle(!liked);
  };

  return (
    <button onClick={handleClick}>
      {liked ? '❤️ Liked' : '🤍 Like'}
    </button>
  );
}

export default LikeButton;
