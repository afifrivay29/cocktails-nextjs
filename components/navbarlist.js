import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function NavbarList() {
    return(
        <div className={styles.navbar}>
            <div className='font-bold text-xl cursor-default' href="/">
                <Link href='/'><strong>Vcocktails</strong></Link>
            </div>
            <div>
                <Link href='/'>
                    <a>
                        <strong>Home</strong>
                    </a>
                </Link>
            </div>
        </div>
    )
}