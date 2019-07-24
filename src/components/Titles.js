import React from 'react';
import '../App.scss';

export default function Titles(props) {
  const posts = props.posts;

  return (
    <div className="titles-container">
      {posts.map(post =>
        <div className="title" key={post.id}>
          <h3>{post.title}</h3>          
        </div>
      )}
    </div>
  )
}