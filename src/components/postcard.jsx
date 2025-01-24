import React from 'react';
import LikeButton from './likebutton';

function PostCard({ post, onLikeToggle }) {
  return (
    <div className="post-card" style={{ border: '5px solid white', padding: '1rem', margin: '1rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
        <img
          src={post.profileImage}
          alt={post.username}
          style={{ width: '45px', height: '45px', borderRadius: '50%', marginRight: '1rem' }}
        />
        <strong>{post.username}</strong>
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <p>{post.content}</p>
      </div>
      <LikeButton 
        initialLiked={post.isLiked} 
        onToggle={(newStatus) => onLikeToggle(post.id, newStatus)}
      />
    </div>
  );
}

export default PostCard;
