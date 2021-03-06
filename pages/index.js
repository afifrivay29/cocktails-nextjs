import Head from 'next/head'

import DrinkList from './drinklist'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Banner from '../components/banner'

export default function Home() {
  return (
    <div className='drinks'>
      <Head>
        <title>Vercel Cocktails</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/cocktail.png" />
      </Head>

      <Navbar/>
      <Banner/>
      <DrinkList/>
      <Footer/>
    </div>
  )
}
