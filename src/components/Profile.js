import React, { useState, useEffect } from 'react';
import Header from './Header';
import ProfileForm from './ProfileForm';
import { db, getUserProfile } from '../firebase/firebase';
import '../styles/globalStyles.css';

const Profile = ({ user }) => {
  //const [showProfileForm, setShowProfileForm] = useState(false);
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    if (user){
      const fetchUserProfile = async () => {
        const profile = await getUserProfile(user.uid);
        setUserProfile(profile);
      };
      fetchUserProfile();
    }
  }, [user]);


/*       setUserProfile({
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        bio: '',
      });
    }
  }, [user]);
   */
  


/*   const handleEditProfileClick = () => {
    setShowProfileForm(!showProfileForm);
  }; */

  const saveProfileChanges = async (profileData) => {
    try {
      await db.collection('users').doc(user.uid).update(profileData);
      console.log('Profile updated successfully');
    } catch (error) {
      console.error('Error updating profile: ', error);
    }
  };



  const handleFormSubmit = (profileData) => {
    setUserProfile((prevProfile) => { 
      const updatedProfile = { ...prevProfile, ...profileData };
      if (profileData.imageSrc){
        updatedProfile.photoURL = profileData.imageSrc;
      }
      saveProfileChanges(updatedProfile);
      return updatedProfile;
  });
  };
  if (!userProfile) {
    return <div>Loading...</div>;
  }

  return (
    <>        
    <Header />

<div className="user-profile-container">
<div className="profile-section">
      <h1>Welcome, {userProfile.displayName}</h1>
      <p>Email: {userProfile.email}</p>
      <div className="profile-image">

      {userProfile.photoURL && (

<img 
src={userProfile.photoURL} 
alt={userProfile.displayName} 
style={{ maxWidth: '200px', maxHeight: '200px' }} />
      )}
            </div>
            <p>Bio: {userProfile.bio}</p>

            <ProfileForm onSubmit={handleFormSubmit} />
            </div>
    </div>
    </>   
  );
};

export default Profile;
