import { Container } from '@mui/material'
import './NewsContent.css'
import NewsCard from './NewsCard'

function NewsContent(props) {
    return (
        <Container maxWidth="md">
            <div className='content'>
                {
                    props.newsArray.map((newsItem) => {
                        return (<NewsCard key={newsItem.title} newsItem={newsItem} />)
                    })
                }
                {props.loadMore <= props.newsResults && (
                    <>
                        <hr></hr>
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