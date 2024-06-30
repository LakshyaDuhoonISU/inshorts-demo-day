import { useContext } from 'react';
import MenuNav from './MenuNav'
import './NavBar.css';
import { Theme } from '../App';

function NavBar(props) {

    let theme = useContext(Theme);
    return (
        <>
            {/* setting the menu bar on the left hand side and the inshorts logo on the middle of the navigation bar */}
            {/* using ternary operator to check whether the theme is light or dark and rendering the the appropriate elements */}
            {theme === 'light' ? (<div className='container'>
                <div><MenuNav setCategory={props.setCategory} /></div>
                <img src='https://assets.inshorts.com/website_assets/images/logo_inshorts.png'
                    alt='logo' className='img'
                />
                <button className='btn' onClick={props.toggleTheme}><i className="fa-solid fa-moon"></i></button>
            </div>) : (<div className='container-dark'>
                <div><MenuNav setCategory={props.setCategory} /></div>
                <img src='https://assets.inshorts.com/website_assets/images/logo_inshorts.png'
                    alt='logo' className='img'
                />
                <button className='btn' onClick={props.toggleTheme}><i className="fa-regular fa-sun"></i></button>
            </div>)}
        </>
    )
}

export default NavBar