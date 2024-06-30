import categories from '../data/categories'
import Footer from './Footer'
import styles from './SelectCategory.module.css'

function SelectCategory(props) {
    return (
        <div className={styles.container}>
            <div className={styles.category}>
                <h1>Select your preferred category</h1>
                {categories.map((text, index) => (
                    <button className={styles.btn} onClick={() => { props.setIsSelected(true); props.setCategory(text) }} key={index}>{text}</button>))}
            </div>
            <Footer />
        </div>
    )
}

export default SelectCategory