import { Container } from '@mui/material'
import './NewsContent.css'
import NewsCard from './NewsCard'

function NewsContent(props) {
    return (
        <Container maxWidth="md">
            <div className='content'>
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
            </div>
        </Container>
    )
}

export default NewsContent