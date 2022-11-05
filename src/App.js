import React from "react"
import { useState, useEffect } from "react";
import {Routes, Route} from 'react-router-dom'
import ErrorBoundary from './pages/ErrorBoundary'
import Navbar from './pages/Navbar';
import HeroSection from './pages/HeroSection';
import Users from './pages/Users';
import About from './pages/About'
import Login from './pages/Login';
import Error from './pages/ErrorPage';
import Account from './pages/Account';
import { AuthContextProvider } from './context/AuthContext';
import Protected from './pages/Protected';



function App() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);
  const getData = async () => {
    const response = await fetch("https://randomuser.me/api/?results=120");
    setLoading(false);
    const data = await response.json();
    setUser(data.results);
    console.log(data.results);
  };
  useEffect(() => {
    getData();
  }, []);
  
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = user.slice(indexOfFirstPost, indexOfLastPost);
  const nPages = Math.ceil(user.length / postsPerPage);
  
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const nextPage = () => {
    if (currentPage !== nPages) {
      setCurrentPage(currentPage + 1);
    } else if (currentPage === 1) {
      setCurrentPage(0);
    }
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };
  return (
  <div>
  <div className="App">
     <ErrorBoundary>
      <AuthContextProvider>
        <Navbar/>
      <Routes>
        <Route path='/' element={<HeroSection/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/users' element={<Users
                  loading={loading}
                  nPages={nPages}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  nextPage={nextPage}
                  prevPage={prevPage}
                  user={currentPosts}
                  postsPerPage={postsPerPage}
                  totalPosts={user.length}
                  paginate={paginate}
                />} />
        <Route path='/signup' element={<Login/>} />
        <Route path='/account' element={ <Protected> <Account/></Protected>} />
        <Route path='*' element={<Error/>} />
      </Routes>
      </AuthContextProvider>
      </ErrorBoundary>
        </div>
    </div>
  );
}

export default App;