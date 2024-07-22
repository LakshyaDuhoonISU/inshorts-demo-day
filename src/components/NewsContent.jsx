import { Container } from '@mui/material'
import './NewsContent.css'
import NewsCard from './NewsCard'
import { useContext, useEffect, useState } from 'react'
import { Theme } from '../App'
import apikey from '../data/config'

function NewsContent(props) {

    let theme = useContext(Theme);
    let [newsArray, setNewsArray] = useState([]);
    let [newsResults, setNewsResults] = useState();
    const [showTopBtn, setShowTopBtn] = useState(false); // state to manage the visibility of the top button

    useEffect(() => {
        const handleScroll = () => {
            // if the user has scrolled down for 100px, then the scroll button will appear, else disappear
            if (window.scrollY > 100) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        };

        // scroll event listener
        window.addEventListener('scroll', handleScroll);

        // cleanup function to remove event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (props.userSearch !== '') {
            fetch(`https://newsapi.org/v2/everything?q=${props.userSearch}&sortBy=popularity&apiKey=${apikey}&pageSize=${props.loadMore}`)
                .then((response) => response.json())
                .then((data) => {
                    setNewsArray(data.articles);
                    setNewsResults(data.totalResults);
                    // console.log(data);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, [props.userSearch, props.loadMore]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // for smooth scrolling
        });
    };

    return (
        <>
            {/* using ternary operator to check whether the theme is light or dark and rendering the the appropriate elements */}
            {theme === 'light' ? (<Container maxWidth="md"><div className='content'>
                {
                    props.userSearch !== '' ? (
                        <>
                            <h1>News with topic: {props.userSearch}</h1>
                            {
                                newsArray.length <= 0 ? <h1>No news found</h1> :
                                    newsArray.filter(newsItem => newsItem.title !== '[Removed]').map((newsItem) => (
                                        <NewsCard key={newsItem.title} newsItem={newsItem} />
                                    ))}
                        </>) : (
                        // using map function on the array storing the news and displaying the news on a card
                        props.newsArray.map((newsItem) => {
                            return (<NewsCard key={newsItem.title} newsItem={newsItem} />)
                        }))
                }
                { // displaying the load more button only when the news displayed on the screen is less than the total news in the array(38) and removing it when all the news is displayed on the screen
                    props.useSearch !== '' ?
                        props.loadMore <= newsResults && (
                            <>
                                <hr></hr>
                                {/* clicking the button will load 20 more news articles from the news array and displayed on the screen */}
                                <button className='loadmore' onClick={() => {
                                    props.setLoadMore(props.loadMore + 20);
                                }}>
                                    Load More
                                </button>
                            </>
                        )
                        : (
                            props.loadMore <= props.newsResults && (
                                <>
                                    <hr></hr>
                                    <button className='loadmore' onClick={() => {
                                        props.setLoadMore(props.loadMore + 20);
                                    }}>
                                        Load More
                                    </button>
                                </>
                            ))
                }
            </div></Container>) : (<div style={{ backgroundColor: "black" }}><Container maxWidth="md" style={{ backgroundColor: "black" }}><div className='content-dark'>
                {
                    props.userSearch !== '' ? (
                        <>
                            <h1>News with topic: {props.userSearch}</h1>
                            {
                                newsArray.length <= 0 ? <h1>No news found</h1> :
                                    newsArray.filter(newsItem => newsItem.title !== '[Removed]').map((newsItem) => (
                                        <NewsCard key={newsItem.title} newsItem={newsItem} />
                                    ))}
                        </>) : (
                        // using map function on the array storing the news and displaying the news on a card
                        props.newsArray.map((newsItem) => {
                            return (<NewsCard key={newsItem.title} newsItem={newsItem} />)
                        }))
                }
                { // displaying the load more button only when the news displayed on the screen is less than the total news in the array(38) and removing it when all the news is displayed on the screen
                    props.useSearch !== '' ?
                        props.loadMore <= newsResults && (
                            <>
                                <hr></hr>
                                {/* clicking the button will load 20 more news articles from the news array and displayed on the screen */}
                                <button className='loadmore-dark' onClick={() => {
                                    props.setLoadMore(props.loadMore + 20);
                                }}>
                                    Load More
                                </button>
                            </>
                        )
                        : (
                            props.loadMore <= props.newsResults && (
                                <>
                                    <hr></hr>
                                    <button className='loadmore-dark' onClick={() => {
                                        props.setLoadMore(props.loadMore + 20);
                                    }}>
                                        Load More
                                    </button>
                                </>
                            ))
                }
            </div></Container></div>)}
            {/* checking if the condition to display the top button is satisfied, and displaying the button */}
            {showTopBtn && (
                <button className="scrollToTop" onClick={scrollToTop}>
                    <i class="fa-solid fa-arrow-up"></i>
                </button>
            )}
        </>
    )
}

export default NewsContent