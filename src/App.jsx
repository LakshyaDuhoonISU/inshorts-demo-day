import { useEffect, useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import NewsContent from './components/NewsContent';
import apikey from './data/config';
import Footer from './components/Footer';

function App() {

  // state variables to store the news results from the news API and load more from the results
  let [category, setCategory] = useState("General");
  let [newsArray, setNewsArray] = useState([]);
  let [newsResults, setNewsResults] = useState();
  let [loadMore, setLoadMore] = useState(20);

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
      <NavBar setCategory={setCategory} />
      <NewsContent setLoadMore={setLoadMore} loadMore={loadMore} newsArray={newsArray} newsResults={newsResults} />
      <Footer />
    </>
  )
}

export default App
