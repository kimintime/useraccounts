import React, {useState, useEffect} from 'react';
import './App.css';

import {getRandomColor, createImageFromInitials} from './components/Profile';
import ReactiveButton from 'reactive-button';

import More from './components/More';

import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';


function App() {

  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(resData => setUsers(resData))  
  }, []);
  
  return (
    <div className='App'>
     
      
      {
        users.map((user) =>
          <div className="container" key={user.id}>
            <ul>
              <li><img src={createImageFromInitials(100, user.name, getRandomColor())} alt="profile-pic"></img></li>
              <li className="name">{user.name}</li>
              <li className="username">@{user.username}</li>
              <li><a href={user.website}>{user.website}</a></li>
              <li>
              <BrowserRouter>  
                <Link to={`${user.id}`}>
                <ReactiveButton rounded color="blue" size="normal" idleText={'More Details'} animation={false} style={{ marginTop: '25px', marginBottom: '25px' }}></ReactiveButton>
                </Link>
                <Routes>
                  <Route path="/" element={<div></div>} />
                  <Route path=":id" element={<More />} />
                </Routes>
              </BrowserRouter>
                </li>
            </ul>
          </div>
        )
      } 
    </div>
  );
}
    
export default App;

