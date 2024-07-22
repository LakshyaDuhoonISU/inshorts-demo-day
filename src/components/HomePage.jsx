import React, { useState } from 'react';
import NavBar from './NavBar'; 
import NewsContent from './NewsContent';
import Footer from './Footer';

const HomePage = ({ setCategory, toggleTheme, setLoadMore, loadMore, newsArray, newsResults }) => {

  // use a state variable to store the topic that the user has searched for and pass it to newsContent to fetch and display the news
  let [userSearch,setUserSearch]=useState('');

  return (
    <>
      <NavBar setCategory={setCategory} toggleTheme={toggleTheme} setUserSearch={setUserSearch}/>
      <NewsContent setLoadMore={setLoadMore} loadMore={loadMore} newsArray={newsArray} newsResults={newsResults} userSearch={userSearch}/>
      <Footer />
    </>
  );
};

export default HomePage;