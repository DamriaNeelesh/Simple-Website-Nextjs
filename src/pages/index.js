import Head from 'next/head'
import CodeforInterview from '../components/CodeforInterview'
import Image from 'next/image'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

// while importing any .js file from component try ../component/file.js
export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <NavBar></NavBar>
      <CodeforInterview></CodeforInterview>
      <Footer></Footer>
     
    </div>
  )
}