import styles from '../styles/Home.module.css'
import linkedin from '../public/Linkedin.png'
import instagram from '../public/instagram.png'
import github from '../public/github.png'
import Image from 'next/image'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>Vcocktails</p>
            <h2>BUY 1 BOTTLE <br/> FREE 1 GLASS.</h2>
            <div className={styles.social}>
                <a href="https://www.linkedin.com/in/afif-rivaykusnanto-a197991a5/">
                    <Image 
                        src={linkedin} 
                        alt="linkedin-icon"
                        width={25}
                        height={25}
                    />
                </a>
                <a href="https://www.instagram.com/">
                    <Image 
                        src={instagram} 
                        alt="instagram-icon"
                        width={25}
                        height={25}
                    />
                </a>
                <a href="https://github.com/afifrivay29">
                    <Image 
                        src={github} 
                        alt="github-icon"
                        width={25}
                        height={25}
                    />
                </a>
            </div>
            <p className={styles.end}>Vcocktails Tangerang &#169; 2022, Afif Rivaykusnanto</p>
        </footer>
    )
}