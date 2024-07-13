import { createContext, useEffect, useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import NewsContent from './components/NewsContent';
import apikey from './data/config';
import Footer from './components/Footer';
import SelectCategory from './components/SelectCategory';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import NotFound from './components/NotFound';

export const Theme = createContext();

function App() {

  // state variables to store the news results from the news API and load more from the results and store the theme preference of the user
  let [category, setCategory] = useState("General");
  let [newsArray, setNewsArray] = useState([]);
  let [newsResults, setNewsResults] = useState();
  let [loadMore, setLoadMore] = useState(20);
  let [isSelected, setIsSelected] = useState(false);
  let [theme, setTheme] = useState('light');

  function toggleTheme() {
    // set the theme to dark if the theme is light and vice versa
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  // fetch the news using the news API and storing them in an array
  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}&category=${category}&pageSize=${loadMore}`)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setNewsArray(data.articles);
        setNewsResults(data.totalResults);
        // console.log(data.articles);
      })
      .catch((err) => {
        console.log(err)
      })
  }, [category, loadMore])

  return (
    <>
      {/* providing the theme details to all the components to render the appropriate elements */}
      <Theme.Provider value={theme}>
        {/* render these components only after the user has selected a category initially, else show the categories to the user first  */}
        {isSelected ? (
          <div>
            <BrowserRouter>
              <Routes>
                <Route path='/' element={
                  <HomePage
                    setCategory={setCategory}
                    toggleTheme={toggleTheme}
                    setLoadMore={setLoadMore}
                    loadMore={loadMore}
                    newsArray={newsArray}
                    newsResults={newsResults}
                  />
                } />
                <Route path='*' element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </div>
        ) : (
          <SelectCategory setIsSelected={setIsSelected} setCategory={setCategory} />
        )}
      </Theme.Provider>
    </>
  )
}

export default App
