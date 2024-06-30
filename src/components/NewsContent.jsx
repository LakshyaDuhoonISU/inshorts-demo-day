import { Container } from '@mui/material'
import './NewsContent.css'
import NewsCard from './NewsCard'
import { useContext, useEffect, useState } from 'react'
import { Theme } from '../App'

function NewsContent(props) {

    let theme = useContext(Theme);
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
                    // using map function on the array storing the news and displaying the news on a card
                    props.newsArray.map((newsItem) => {
                        return (<NewsCard key={newsItem.title} newsItem={newsItem} />)
                    })
                }
                { // displaying the load more button only when the news displayed on the screen is less than the total news in the array(38) and removing it when all the news is displayed on the screen
                    props.loadMore <= props.newsResults && (
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
                }
            </div></Container>) : (<div style={{ backgroundColor: "black" }}><Container maxWidth="md" style={{ backgroundColor: "black" }}><div className='content-dark'>
                {
                    // using map function on the array storing the news and displaying the news on a card
                    props.newsArray.map((newsItem) => {
                        return (<NewsCard key={newsItem.title} newsItem={newsItem} />)
                    })
                }
                { // displaying the load more button only when the news displayed on the screen is less than the total news in the array(38) and removing it when all the news is displayed on the screen
                    props.loadMore <= props.newsResults && (
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