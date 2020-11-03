import React from 'react';
import './App.css';
import ButtonComponent from './ButtonComponent';
import PostList from './PostList'

function App() {
  return (
    <div className="App">
      <h3>Hi</h3>
      <ButtonComponent/>
      <br/>
      <PostList/>
    </div>
  );
}

export default App;