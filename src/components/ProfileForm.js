import React, { useState } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import '../styles/globalStyles.css';

const ProfileForm = ({ onSubmit }) => {
    const [imageSrc, setImageSrc] = useState(null);
    const [crop, setCrop] = useState({ aspect: 1 });
    const [bio, setBio] = useState('');
    const [errors, setErrors] = useState({});

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        const allowedFileTypes = ['image/jpeg', 'image/png', 'image/gif'];

        if (file && allowedFileTypes.includes(file.type) && file.size <= 5000000){
            reader.addEventListener('load', () => setImageSrc(reader.result), false);
            reader.readAsDataURL(file);
            setErrors({...errors, image: ''});

        } else {
            setImageSrc(null);
            setErrors({
                ...errors,
                image: 'Please upload a valid image (JPEG, PNG, GIF) smaller than 5MB.',
            });
            }
        };
        

     


const handleCropChange = (newCrop) => {
    setCrop(newCrop);
  };

  const handleBioChange = (e) => {
    setBio(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the form data here
    onSubmit({ imageSrc, bio });
    console.log('Form submitted:', { imageSrc, bio });
  };
  const isValidForm = () => {
    return !errors.image && bio.trim().length > 0;
  };

  return (
    <form 
    onSubmit={handleSubmit}
    className="profile-form">
        
      <h2>Edit Profile</h2>
      <label>
        Profile Picture:
        <input type="file" accept="image/*" onChange={handleImageUpload} />
      </label>
      {errors.image && <p className="error">{errors.image}</p>}

      {imageSrc && (
        <ReactCrop src={imageSrc} crop={crop} onChange={handleCropChange} />
      )}
      <label>
        Bio:
        <textarea 
        maxLength={200} 
        value={bio} 
        onChange={handleBioChange} 
        className="bio-textarea"
        />
      </label>
      <div className="char-count">{200 - bio.length} characters remaining</div>

      <button type="submit" disabled={!isValidForm()} className="">
        Submit
      </button>
      </form>
  );
};

export default ProfileForm;

