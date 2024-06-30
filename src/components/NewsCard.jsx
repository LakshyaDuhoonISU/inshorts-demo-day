import { useContext } from 'react';
import './NewsCard.css'
import { Theme } from '../App';

function NewsCard(props) {
    // fetching the dates from the news api and converting it into a readable format
    const fulldate = new Date(props.newsItem.publishedAt);
    // splitting the date into an array and storing the hour in a variable
    let date = fulldate.toString().split(' ');
    const hour = parseInt(date[4].substring(0, 2));
    // checking if the hour is beyond 12 for AM/PM purposes
    const time = hour > 12 ? true : false;

    // function to truncate text to a specified number of words
    function truncateText(text, maxWords) {
        const wordsArray = text.split(' ');
        if (wordsArray.length > maxWords) {
            return wordsArray.slice(0, maxWords).join(' ');
        }
        return text;
    }

    // using the context API to get the theme that the user has selected
    let theme=useContext(Theme);

    return (
        <>
            {/* using ternary operator to check whether the theme is light or dark and rendering the the appropriate elements */}
            {theme === 'light' ? (<div className='newscard'>
                {/* if the image is present in the array then display it, else display the placeholder img */}
                <img className='newsimg' alt={props.newsItem.title} src={props.newsItem.urlToImage
                    ? props.newsItem.urlToImage
                    : "https://i0.wp.com/sunrisedaycamp.org/wp-content/uploads/2020/10/placeholder.png?ssl=1"} />
                <div className='newstext'>
                    <div>
                        {/* displaying the news title and the author */}
                        <span className='title'>
                            {props.newsItem.title}
                        </span><br></br>
                        <span className='author'>
                            <a href={props.newsItem.url} target='_blank'>
                                <b>short </b>
                            </a>
                            <span className='muted'>
                                by {props.newsItem.author ? props.newsItem.author : "unknown"} / {" "}
                                {
                                    // if hour is more than 12, then display PM, else display AM
                                    time ? `${hour - 12}:${date[4].substring(3, 5)} PM` : `${hour}:${date[4].substring(3, 5)} AM`
                                }{" "} on {date[0]} {date[2]} {date[1]}, {date[3]}
                            </span>
                        </span>
                    </div>
                    {/* displaying the news article description */}
                    <div className='lowernewstext'>
                        <div className='description'>
                            {props.newsItem.description
                                ? truncateText(props.newsItem.description, 39)
                                : truncateText(props.newsItem.title, 39)}
                        </div>
                        {/* read more button to fetch more articles */}
                        <span className='readmore'>
                            read more at <a href={props.newsItem.url} target='_blank'>
                                <b>{props.newsItem.source.name}</b>
                            </a>
                        </span>
                    </div>
                </div>
            </div>) :
                (<div className='newscard'>
                    {/* if the image is present in the array then display it, else display the placeholder img */}
                    <img className='newsimg' alt={props.newsItem.title} src={props.newsItem.urlToImage
                        ? props.newsItem.urlToImage
                        : "https://i0.wp.com/sunrisedaycamp.org/wp-content/uploads/2020/10/placeholder.png?ssl=1"} />
                    <div className='newstext'>
                        <div>
                            {/* displaying the news title and the author */}
                            <span className='title'>
                                {props.newsItem.title}
                            </span><br></br>
                            <span className='author'>
                                <a href={props.newsItem.url} target='_blank'>
                                    <b style={{color:"white"}}>short </b>
                                </a>
                                <span className='muted-dark'>
                                    by {props.newsItem.author ? props.newsItem.author : "unknown"} / {" "}
                                    {
                                        // if hour is more than 12, then display PM, else display AM
                                        time ? `${hour - 12}:${date[4].substring(3, 5)} PM` : `${hour}:${date[4].substring(3, 5)} AM`
                                    }{" "} on {date[0]} {date[2]} {date[1]}, {date[3]}
                                </span>
                            </span>
                        </div>
                        {/* displaying the news article description */}
                        <div className='lowernewstext'>
                            <div className='description-dark'>
                                {props.newsItem.description
                                    ? truncateText(props.newsItem.description, 39)
                                    : truncateText(props.newsItem.title, 39)}
                            </div>
                            {/* read more button to fetch more articles */}
                            <span className='readmore'>
                                read more at <a href={props.newsItem.url} target='_blank'>
                                    <b style={{color:"white"}}>{props.newsItem.source.name}</b>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>)}

        </>
    )
}

export default NewsCard