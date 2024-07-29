import { useContext, useState } from 'react';
import MenuNav from './MenuNav'
import './NavBar.css';
import { Theme } from '../App';

function NavBar(props) {

    let theme = useContext(Theme);
    // storing the topic that the user wants news for
    let [searchQuery, setSearchQuery] = useState('');

    // function to set the search query state variable to the topic that the user searches for
    function setSearch() {
        event.preventDefault();
        props.setUserSearch(searchQuery);
    }

    return (
        <>
            {/* setting the menu bar on the left hand side and the inshorts logo on the middle of the navigation bar */}
            {/* using ternary operator to check whether the theme is light or dark and rendering the the appropriate elements */}
            {theme === 'light' ? (<div className='container'>
                <div><MenuNav setCategory={props.setCategory} /></div>
                <h1 className='img'
                >NewsE5</h1>
                {/* using a form to get the topic that the user wants to search for */}
                <form onSubmit={() => { setSearch() }}>
                    <input
                        type="text"
                        placeholder="Search news..."
                        value={searchQuery}
                        onChange={() => setSearchQuery(event.target.value)}
                        className="search-input"
                        name='userCategory'
                    />
                    <button type='submit' value='Search' className='srcBtn' onClick={() => props.setCategory(searchQuery)} ><i class="fa-solid fa-magnifying-glass"></i></button>
                </form>
                <button className='btn' onClick={props.toggleTheme}><i className="fa-solid fa-moon"></i></button>
            </div>) : (<div className='container-dark'>
                <div><MenuNav setCategory={props.setCategory} /></div>
                <h1 className='img'
                >NewsE5</h1>
                {/* using a form to get the topic that the user wants to search for */}
                <form onSubmit={() => { setSearch() }}>
                    <input
                        type="text"
                        placeholder="Search news..."
                        value={searchQuery}
                        onChange={() => setSearchQuery(event.target.value)}
                        className="search-input-dark"
                    />
                    <button type='submit' value='Search' className='srcBtn-dark' onClick={() => props.setCategory(searchQuery)} ><i class="fa-solid fa-magnifying-glass"></i></button>
                </form>
                <button className='btn' onClick={props.toggleTheme}><i className="fa-regular fa-sun"></i></button>
            </div>)}
        </>
    )
}

export default NavBar