import React, { useState } from 'react';
import './Registration.css';
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import axios from 'axios';
import { useEffect } from 'react';


const Registration = () => {
  const [submit, setSubmit] = useState('Submit');
  const [showMessage, setShowMessage] = useState(false);
  const [idealCommunity, setIdealCommunity] = useState('');
  const [contribution, setContribution] = useState('');
  const [fullName, setFullName] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [heardAboutUs, setHeardAboutUs] = useState(false);
  const [memberOfCommunities, setMemberOfCommunities] = useState('');
  const API_ENDPOINT_URL = 'https://jsonplaceholder.typicode.com/posts';

  const handleSubmitButton = async (e) => {
    e.preventDefault();
  
    const validateEmail = (email) => {
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
    };
  
    const calculateAge = (dobString) => {
      const today = new Date();
      const dob = new Date(dobString);
      let age = today.getFullYear() - dob.getFullYear();
      const m = today.getMonth() - dob.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
        age--;
      }
      return age;
    };
  
    if (calculateAge(dob) < 7) {
      alert('You must be at least 7 years old to register. Thank you!');
      return;
    }
  
    if (
      fullName.trim() === '' ||
      dob === '' ||
      email.trim() === '' ||
      address.trim() === '' ||
      !heardAboutUs ||
      memberOfCommunities.trim() === '' ||
      idealCommunity.trim() === '' ||
      contribution.trim() === ''
    ) {
      alert('Please answer all the questions. Thank you!');
      return;
    }
  
    if (!validateEmail(email)) {
      alert('Please enter a valid email address. Thank you!');
      return;
    }
  
    try {
      const payload = {
        fullName,
        dob,
        email,
        address,
        heardAboutUs,
        memberOfCommunities,
        idealCommunity,
        contribution,
      };
  
      const response = await axios.post(API_ENDPOINT_URL, payload);
      console.log(response.data);
  
      setSubmit('Submitted');
      setShowMessage(true);
    } catch (error) {
      console.error(error);
    }
  };
  
  const handleOkayButton = () => {
    setSubmit('Submit');
    setShowMessage(false);
  };
  
  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };
  
  const handleDOBChange = (e) => {
    setDob(e.target.value);
  };
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  
  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };
  
  const handleHeardAboutUsChange = (e) => {
    setHeardAboutUs(e.target.value);
  };
  
  const handleMembershipChange = (e) => {
    setMemberOfCommunities(e.target.value);
  };
  

  const handleCommunity = (e) => {
    const text = e.target.value;
    setIdealCommunity(text.substring(0, 300));
  };
  
  const handleContribution = (e) => {
    const text = e.target.value;
    setContribution(text.substring(0, 300));
  };

  useEffect(() => {
    document.title = "2KLC | Registration Form"
  }, []);

  return (
    <>
      <Navbar />
      <form className="reg-form">
        <h1 className="reg-title display-1 mb-5">Registration</h1>
        {showMessage && (
          <div className="message-box">
            <p>You have successfully submitted the form.</p>
            <p>Just wait for our email for the next step.</p>
            <p>Thank You!</p>
            <button onClick={handleOkayButton}>Okay</button>
          </div>
        )}
        <div className="form-container">
          <div className="personal-details">
            <h3>Personal Details:</h3>
            <div className="input-container">
              <div className="divide-input">
                <label>Full Name:</label>
                <input type="text" value={fullName} onChange={handleFullNameChange} className="input-name" id="fullname" placeholder="Type Your Full Name Here..." />
              </div>
              <div className="divide-input">
                <label className="input-label">Date of Birth:</label>
                <input className="input_dob" type="date" value={dob} onChange={handleDOBChange}/>
              </div>
              <div className="divide-input">
                <label className="email">Email Address:</label>
                <input className="input_emailAdd" type="email" value={email} onChange={handleEmailChange} placeholder="Type Your Email Address Here.." required/>
              </div>
              <div className="divide-input">
                <label>Address:</label>
                <input className="input_address" type="text" value={address} onChange={handleAddressChange} id="address" placeholder="Type Your Address Here..." />
              </div>
            </div>
          </div>
          <div className="other-info space-top">
            <h6>How did you hear about us?</h6>
            <div className="section2"><input type="checkbox" value="engine" 
                onChange={handleHeardAboutUsChange} />Search Engine (Google, etc...)</div>
            <div className="section2"><input type="checkbox" value="social"  
                onChange={handleHeardAboutUsChange} />Social Media (Facebook, etc...)</div>
            <div className="section2"><input type="checkbox" value="referral"  
                onChange={handleHeardAboutUsChange} />Others: </div>
          </div>
          <div className="other-info memberCom">
            <h6>Are you a member of other communities?</h6>
            <div className="section3"><input type="radio" value="yes" name="membership" checked={memberOfCommunities === 'yes'}
                onChange={handleMembershipChange} />YES</div>
            <div className="section3"><input type="radio" value="no" name="membership" checked={memberOfCommunities === 'no'}
                onChange={handleMembershipChange} />NO</div>
          </div>
          <div className="other-info">
            <h6 className="h6Style">What is your ideal community?</h6>
            <textarea rows="5" cols="30" placeholder='Type Your Answer..' value={idealCommunity} onChange={handleCommunity} maxLength={300}></textarea>
            <p className='character-count'>{idealCommunity.length}/300 characters</p>
          </div>
          <div className="other-info">
            <h6 className="h6StyleTwo">What can you contribute to this community?</h6>
            <textarea rows="5" cols="30" placeholder='Type Your Answer..' value={contribution} onChange={handleContribution} maxLength={300}></textarea>
            <p className='character-count'>{contribution.length}/300 characters</p>
          </div>
          <div className="other-info bottom-info">
            <p className="foot-info">After completing this form, please click Submit Form.
              You will receive a confirmation email.
              If you do not receive the email within a few minutes, please
              check your spam; otherwise,
              please contact us at admin@gmail.com.
            </p>
            <div className="submit-container">
              <button onClick={handleSubmitButton} id="submit" className="submit-button">{submit}</button>
            </div>
          </div>
        </div>
      </form>
      <Footer/>
    </>
  );
};

export default Registration;
