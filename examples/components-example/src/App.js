import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Posts from './components/Posts';
import SubredditHeader from './components/SubredditHeader';
import MyButton from './components/MyButton';

function App() {
  const [posts] = useState(
    {
      title: 'Post 1',
    },
    {
      title: 'Post 2',
    }
  );
  return (
    <div className="App">
      <NavBar />
      <SubredditHeader
        title="JavaScript"
        url="/r/JavaScript"
        numberOfMembers={42}
      />
      <Posts posts={posts} />
      <MyButton icon="smile" children="Click Me" />
      <MyButton>Click Me Instead</MyButton>
    </div>
  );
}

export default App;
