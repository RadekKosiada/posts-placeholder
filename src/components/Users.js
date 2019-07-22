import React from 'react';
import '../App.scss';

export default function Users(props) {
  const users = props.users;

  return (
    <div className="users-container">
      {users.map(user =>
        <div className="user" key={user.id}>
          <h3>{user.name}</h3>          
        </div>
      )}
    </div>
  )
}