import styles from '../styles/Home.module.css'
import imageNavbar from '../public/cocktails-png.png'
import Image from 'next/image'

export default function Banner() {
    return(
        <div className={styles.banner}>
            <h1 className='text-center mt-2 mb-4 font-bold text-3xl'>Vercel <br/> 🍹Cocktail🍹</h1>
            <Image 
                src={imageNavbar} 
                alt="image-navbar"
                width={1340}
                height={200}
            />
        </div>
    )
}