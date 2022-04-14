import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>BinaryHeart</title>
        <meta name="description" content="Bridging the digital divide" />
        <link rel="icon" href="/images/favicon.ico" />
        <link rel="apple-touch-icon" href="/favpng.png" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
              integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4"
              crossOrigin="anonymous"/>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <font color = "#ff0040">Binary</font><font color = "#193961">Heart</font>!
        </h1>
      
        <p className={styles.description}>
          BinaryHeart is an after-school nonprofit that repairs donated technology and re-donates those devices to low-income schools.
          If you are a New Trier student, <Link href="/newmembers"> get involved here</Link>!
          
          
        </p>

        <div className={styles.grid}>
          <Link href="/products">
            <a className={styles.card}>
              <h2>Availabe Pruducts &rarr;</h2>
              <p>See the solutions we have to offer</p>
            </a>
          </Link>

          <Link href="/press">
          <a className={styles.card}>
            <h2>Press &rarr;</h2>
            <p>See our press coverage in the news</p>
          </a>
          </Link>

          <Link href="/about">
          <a className={styles.card}>
            <h2>About Us &rarr;</h2>
            <p>See our mission, what we&lsquo;ve done, and who we are</p>
          </a>
        </Link>

        <Link href="/contact">
          <a
            className={styles.card}
          >
            <h2>Contact Us &rarr;</h2>
            <p>
              Want to donate or receive old tech? Get in contact!
            </p>
          </a>
        </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <Link href="https://www.instagram.com/binaryheartnt/"><img className={styles.scalingimageicon} src="/instagram.png" /></Link>
        <p>    </p>
        <Link href="https://www.linkedin.com/company/binaryheart/"><img className={styles.scalingimageicon} src="/linkedin icon.png" /></Link>
      </footer>
    </div>
  )
}
