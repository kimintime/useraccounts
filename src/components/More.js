import React, {useState, useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom';

import ReactiveButton from 'reactive-button';

function More() {

    const [user, setUser] = useState({});
    const [userAddress, setUserAddress] = useState([]);
    const[userCompany, setUserCompany] = useState([]);
    const navigate = useNavigate();

    const { id } = useParams();
  
    useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.json())
        .then(
          (data) => {
            setUser(data);
            setUserAddress(data.address);
            setUserCompany(data.company);
          } 
        )
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
  
    return (
      <div className="App">
          <div className='more'>
          <ul>
              <li>{user.email}</li>
              <li>{user.phone}</li>
              <ul>
                <li className="name">{userCompany.name}</li>
                <li className="username">{userCompany.catchPhrase}</li>
                <li className="quote" >"{userCompany.bs}"</li>
              </ul>
              <li className="name">Home Address:</li>
              <ul>
                <li>{userAddress.street}, {userAddress.suite}</li>
                <li>{userAddress.city} {userAddress.zipcode}</li>
              </ul>
              
              
              
              
              <li><ReactiveButton onClick={() => navigate('/')} rounded color="red" size="normal" idleText={'Close'} animation={false} style={{ marginTop: '25px', marginBottom: '25px' }}></ReactiveButton></li>
            </ul>


          </div>
          
          
         
          
          
          
        
      </div>
    );
  }

  export default More;