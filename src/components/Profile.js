import React from 'react';
import Header from './Header';

const Profile = ({ user }) => {
  return (
    <div>
                      <Header />

      <h1>Welcome, {user.displayName}</h1>
      <p>Email: {user.email}</p>
      <img src={user.photoURL} alt={user.displayName} />
    </div>
  );
};

export default Profile;
