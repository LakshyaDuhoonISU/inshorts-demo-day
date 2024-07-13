import { useNavigate } from 'react-router-dom'
import './NotFound.css'

function NotFound() {
    let navigate = useNavigate();
    return (
        <div className='not-found-container'>
            <h1 className='not-found-heading '>404 - Not Found</h1>
            <p className='not-found-description'>
                Oops! The page you're looking for does not exist.
            </p>
            {/* using useNavigate hook to programatically navigate from error page to categories page */}
            <button onClick={() => navigate('/')} className='go-back-button'>
                Go Back to Categories
            </button>
        </div>
    )
}

export default NotFound