import styles from '../styles/Home.module.css'

export default function Navbar() {
    return(
        <div className={styles.navbar}>
            <div className='font-bold text-xl cursor-default' href="/">
                <a href=''><strong>Vcocktails</strong></a>
            </div>
            <div>
                <a href='#searchDrink'><strong>Search Menus</strong></a>
            </div>
        </div>
    )
}