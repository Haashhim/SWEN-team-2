import React, {useEffect , useState} from 'react'
import './Settings.css';
import styles from './Settings.css'
import axios from 'axios';

export const Settings = () => {

  const [userData, setUserData] = useState({
    name: '',
    fullName: '',
    email: '',
    phoneNumber: '',
    location: '',
    postalCode: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSend = {
        user: userData.name,
        fullName: userData.fullName,
        phoneNumber: userData.phoneNumber,
        location: userData.location,
        postalCode: userData.postalCode
      };

    await axios.post("http://localhost:8000/changedata", {
        dataToSend
    }).then(response => {

        if (response.data === 0)
        {
            alert("Successfull");
        }
        else if (response.data === -1)
        {
          alert("couldn't update information");
        }
        else
        {
            alert("Something went wrong try again later");
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  const fetchData = async () => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      const response = await axios.get('http://localhost:8000/data', {
        params: {
          username: storedUsername,
        },
      });
      setUserData(response.data);
    }

  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='settings'>
        <div className="profile-content">
        <div className='top-bar'>
        <div className='ptext'>
              <h3>{userData.fullName === "" ? userData.name : userData.fullName}</h3>
              <div className='work'>
                  <h5>Software Designer</h5>
                  <h5>Abu Dhabi, United Arab Emirates</h5>
              </div>
          </div>  
        </div>
        <div className='profile'>
          <div className='p-image'>
                
          </div>
        </div>
          
        </div>
        <div className='setting-content'>
       
          <form className='settings-form' onSubmit={handleSubmit}>
          <div className='row'>
            <div className='input-box'>
                  <h3>Name</h3>
                  <input type="text" readOnly value={userData.name} onChange={(e) => setUserData({ ...userData, name: e.target.value })}></input>
            </div>
            <div className='input-box'>
                  <h3>Full Name</h3>
                  <input type="text" value={userData.fullName} onChange={(e) => setUserData({ ...userData, fullName: e.target.value })}></input>
            </div>
          </div>
          <div className='row'>
            <div className='input-box'>
                  <h3>Email Address</h3>
                  <input type="text" readOnly value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })}></input>
            </div>
            <div className='input-box'>
                  <h3>Phone Number</h3>
                  <input type="text" value={userData.phoneNumber} onChange={(e) => setUserData({ ...userData, phoneNumber: e.target.value })}></input>
            </div>
          </div>
          <div className='row'>
            <div className='input-box'>
                  <h3>Location</h3>
                  <input type="text" value={userData.location} onChange={(e) => setUserData({ ...userData, location: e.target.value })}></input>
            </div>
            <div className='input-box'>
                  <h3>Postal Code</h3>
                  <input type="text" value={userData.postalCode} onChange={(e) => setUserData({ ...userData, postalCode: e.target.value })}></input>
            </div>
          </div>
          <div className='row'>
          <input type="submit" value="Save Changes" class="save-changes"/>
          </div>
          </form>
          
          
        </div>
    </div>
  )
}
