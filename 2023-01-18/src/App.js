import { useState, useEffect, localStorage } from 'react';
import './App.css';

function App() {
  const API_URL = 'https://api.adviceslip.com/advice';
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
       console.log(data);
       setPosts([data.slip]);
       })
  }, []);



        
console.log(posts);


  return (
<>{posts.map((value) => 
       <h1 key={value.id}>{value.advice}</h1>
 
      )}      </>
  );
}

export default App;
