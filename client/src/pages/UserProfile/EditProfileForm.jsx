import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateProfile } from '../../actions/users';

import './UserProfile.css';

const EditProfileForm = ({ currentUser, setSwitched }) => {

    const [name, setName] = useState(currentUser?.message?.name);
    const [about, setAbout] = useState(currentUser?.message?.about);
    const [tags, setTags] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault()
        if(tags.length === 0){
            dispatch(updateProfile(currentUser?.message?._id, { name, about, tags: currentUser?.message?.tags }))
        } else{
            dispatch(updateProfile(currentUser?.message?._id, { name, about, tags }))
        }
        setSwitched(false);
    }

  return (
    <div>
        <h1 className="edit-profile-title">
            Edit Profile
        </h1>
        <h2 className="edit-profile-title-2">
            Public Information
        </h2>
        <form className="edit-profile-form" onSubmit={handleSubmit}>
            <label htmlFor="name">
                <h3>Display Name</h3>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label htmlFor="about">
                <h3>About Me</h3>
                <textarea id="about" cols="30" rows="10" value={about} onChange={(e) => setAbout(e.target.value)}></textarea>
            </label>
            <label htmlFor="tags">
                <h3>Watched Tags</h3>
                <p>Tags should be seperated by 1 space only.</p>
                <input type="text" id="tags" onChange={(e)=>setTags(e.target.value.split(' '))}></input>
            </label><br />
            <input type="submit" value="Save Profile" className="user-submit-btn" />
            <button type="button" className="user-cancel-btn" onClick={() => setSwitched(false)}>Cancel</button>
        </form>
    </div>
  )
}

export default EditProfileForm