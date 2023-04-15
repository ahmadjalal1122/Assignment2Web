import React,{useState} from 'react'
import './App.css'

const Question2 = () => {
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
  
    // function to fetch users from GitHub API
    const fetchUsers = async () => {
      const response = await fetch(`https://api.github.com/search/users?q=${searchTerm}`);
      const data = await response.json();
      setUsers(data.items);
    };
  
    // function to handle input change
    const handleInputChange = (event) => {
      setSearchTerm(event.target.value);
    };
  
    // function to handle form submit
    const handleSubmit = (event) => {
      event.preventDefault();
      fetchUsers();
    };
  return (
    <div>
         <form onSubmit={handleSubmit}>
        {/* <input type="text" value={searchTerm} onChange={handleInputChange} /> */}
        <div class="search-form">
   <input type="text" placeholder="Search..." id="searchBox" value={searchTerm} onChange={handleInputChange}/>
   <button type="submit">Search</button>
     
     </div>

      </form>

      <div className='container'>
      {users.map(user => (
      <div className='user'>
      <img src={user.avatar_url} alt="" className='profile-pic' />
      <h2 className='loginID'>
        <h1 style={{color:"gray",fontSize:"20px"}}>User ID:</h1>
      {user.login}</h2>   
      <a href={user.html_url} className='link'>
      <h1 style={{color:"gray",fontSize:"20px"}}>Profile link:</h1>
        <br />
        {user.html_url}</a> 


      </div> 
      ))}
      </div> 

      {/* <ul>

        {users.map(user => (
        
          <li key={user.id}>{user.login}</li>
        ))}
      </ul> */}
    </div>
  )
}

export default Question2
