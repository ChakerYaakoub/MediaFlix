import React, { useState } from 'react';
import './craetePar.css';
import axios from 'axios';

const Modal = ({ open, onClose }) => {
  if (!open) return null;

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [info, setInfo] = useState('');
  const [img, setImg] = useState(null);
  const [kind, setKind] = useState('actor');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('info', info);
    formData.append('img', img);
    formData.append('kind', kind);
  
    axios.post('http://localhost:3000/Participants', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(response => {
        console.log(response.data);
        // {onClose}
        window.location.reload();

      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <div onClick={onClose} className='create'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
      
      >
        <p className='closeBtn' onClick={onClose}>
          X
        </p>
        <div className='content'>
          <form onSubmit={handleSubmit}>
            <div style={{display: 'flex'}}>
              <div style={{marginRight: '1em'}}>
                <h2>First Name</h2>
                <input 
                  type="text" 
                  required 
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div>
                <h2>Last Name</h2>
                <input 
                  type="text" 
                  required 
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
            <h2>Info</h2>
            <textarea
              required
              value={info}
              onChange={(e) => setInfo(e.target.value)}
            ></textarea>
            <h2>Upload Image</h2>
            <input type="file" onChange={(e) => setImg(e.target.files[0])} />
            <h2>Class</h2>
            <select
              value={kind}
              onChange={(e) => setKind(e.target.value)}
            >
              <option value="actor">Actor</option>
              <option value="writer">Writer</option>
              <option value="director">Director</option>
            
          </select>
          <button>JOIN</button>
        
        
          
            </form>
          
          </div>
        </div>
      </div>
  
  );
};

export default Modal;
