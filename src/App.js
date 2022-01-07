import React, {useState, useEffect} from 'react';
import './App.css';
import Navbar from './components/navbar';
import Search from './components/search';
import Post from './components/post';
import Modal from './components/LoginModal';
import { auth, db } from './connections/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { ref, onValue } from 'firebase/database';

function App() {
  const [pData, setPData] = useState([]);
  const [search, setSearch] = useState();

  useEffect(() => {
      onValue(ref(db), snap => {
        const data = snap.val();
        Object.values(data).map((item) => {
          Object.values(item).map((postData) => {
            setPData(oldPostData => [...oldPostData, postData])
          })

        })
      })
  }, [1000])

 const handleLogin = async (email, password) => {
    try {
      const user = await signInWithEmailAndPassword(
        auth, email, password
        );
        console.log(user);
        alert('User signed In')
    } catch (err) {
      console.error(err);
    }
  }

  const show = (e, s) => {
      e.preventDefault();
      setShowModal(s)
  }

  const handleSearch = (e) => {
      setSearch(e)
  }
  
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="App bg-gray-200">
      <Navbar show={show}/>
      <Search seach={handleSearch}/>
      <Post data={pData} search={search}/>

      <Modal show={showModal} setFalse={show} login={handleLogin}/>
    </div>
  );
}

export default App;
