import { useState } from 'react';
import './App.css'
import UserList from './UserList'
import BlogList from './BlogList';

export default function App() {

  const [selectUser, setSelectUser] = useState(null);
  const content = selectUser ? <BlogList user={selectUser} onBackClick={() => setSelectUser(null)} /> : <UserList handleUserClick={(user) => setSelectUser(user)} />;

  return (
    <>
      {content}
    </>
  );
}

