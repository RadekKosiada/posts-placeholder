import React from 'react';
import '../App.scss';

export default function Post(props) {
  const { posts, users } = props;

  posts.forEach(post => {
    users.forEach(user => {
      if (post.userId === user.id) {
        post.user = user.name
      }
    })
  })

  return (
    <div className="post-container">
      {posts.map(post =>
        <div className="post" key={post.id}>
          <h3>{post.title}</h3>
          <p className="post-body">{post.body}</p>
          <h4 className="post-user">{post.user}</h4>
        </div>
      )}
    </div>
  )
}