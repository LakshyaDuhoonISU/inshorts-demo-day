import MenuNav from './MenuNav'
import './NavBar.css';

function NavBar(props) {
    return (
        // setting the menu bar on the left hand side and the inshorts logo on the middle of the navigation bar
        <div className='container'>
            <div className='icon'><MenuNav setCategory={props.setCategory} /></div>
            <img src='https://assets.inshorts.com/website_assets/images/logo_inshorts.png'
                alt='logo' className='img'
            />
        </div>
    )
}

export default NavBar