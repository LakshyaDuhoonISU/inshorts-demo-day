import './NewsCard.css'

function NewsCard(props) {
    // console.log(props.newsItem)

    const fulldate = new Date(props.newsItem.publishedAt);
    let date = fulldate.toString().split(' ');
    const hour = parseInt(date[4].substring(0, 2));
    const time = hour > 12 ? true : false;


    return (
        <div className='newscard'>
            <img className='newsimg' alt={props.newsItem.title} src={props.newsItem.urlToImage
                ? props.newsItem.urlToImage
                : "https://i0.wp.com/sunrisedaycamp.org/wp-content/uploads/2020/10/placeholder.png?ssl=1"} />
            <div className='newstext'>
                <div>
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
                                time ? `${hour - 12}:${date[4].substring(3, 5)} PM` : `${hour}:${date[4].substring(3, 5)} AM`
                            }{" "} on {date[0]} {date[2]} {date[1]}, {date[3]}
                        </span>
                    </span>
                </div>
                <div className='lowernewstext'>
                    <div className='description'>
                        {props.newsItem.description}
                    </div>
                    <span className='readmore'>
                        read more at <a href={props.newsItem.url} target='_blank'>
                            <b>{props.newsItem.source.name}</b>
                        </a>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default NewsCard