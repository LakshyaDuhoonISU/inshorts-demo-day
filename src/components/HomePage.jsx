import React from 'react';
import NavBar from './NavBar'; 
import NewsContent from './NewsContent';
import Footer from './Footer';

const HomePage = ({ setCategory, toggleTheme, setLoadMore, loadMore, newsArray, newsResults }) => {
  return (
    <>
      <NavBar setCategory={setCategory} toggleTheme={toggleTheme} />
      <NewsContent setLoadMore={setLoadMore} loadMore={loadMore} newsArray={newsArray} newsResults={newsResults} />
      <Footer />
    </>
  );
};

export default HomePage;