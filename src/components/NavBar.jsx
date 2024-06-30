import { useContext } from 'react';
import MenuNav from './MenuNav'
import './NavBar.css';
import { Theme } from '../App';

function NavBar(props) {

    let theme=useContext(Theme);
    return (
        // setting the menu bar on the left hand side and the inshorts logo on the middle of the navigation bar
        <div className='container'>
            <div><MenuNav setCategory={props.setCategory} /></div>
            <img src='https://assets.inshorts.com/website_assets/images/logo_inshorts.png'
                alt='logo' className='img'
            />
            {theme==='light'?(<button className='btn' onClick={props.toggleTheme}><i class="fa-regular fa-sun"></i></button>):(<button className='btn' onClick={props.toggleTheme}><i class="fa-solid fa-moon"></i></button>)}
        </div>
    )
}

export default NavBar