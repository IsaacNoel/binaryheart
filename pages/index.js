import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
    return (
        <div className={styles.container} id="animated">
            <Head>
                <title>BinaryHeart</title>
                <meta name="description" content="Bridging the digital divide" />
                <link rel="icon" href="/images/favicon.ico" />
                <link rel="apple-touch-icon" href="/favpng.png" />
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
                      integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4"
                      crossOrigin="anonymous"/>
                <meta name="Description"
                      content="Author: Isaac Noel, Malachi Noel, Maryanne Xu, Megan Lu, Atharva Metkar"/>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Welcome to <font color = "#ff0040">Binary</font><font color = "#2F4A70">Heart</font>!
                </h1>

                <p className={styles.description}>
                    BinaryHeart is an after-school nonprofit that repairs donated technology and re-donates those devices to low-income schools.
                    If you are a New Trier student, <Link href="/newmembers"> get involved here</Link>!


                </p>

                <div className={styles.grid}>
                    <Link href="/press">
                        <a className={styles.card}>
                            <h2>Press &rarr;</h2>
                            <p>See our press coverage in the news</p>
                        </a>
                    </Link>



                    <Link href="/contact">
                        <a
                            className={styles.card}
                        >
                            <h2>Contact &rarr;</h2>
                            <p>
                                Want to donate or receive old tech? Get in contact!
                            </p>
                        </a>
                    </Link>

                    <Link href="/faqs">
                        <a className={styles.card}>
                            <h2>FAQs &rarr;</h2>
                            <p>Let us answer some of your questions</p>
                        </a>
                    </Link>

                    <Link href="/about">
                        <a className={styles.card}>
                            <h2>About &rarr;</h2>
                            <p>See our mission, what we&lsquo;ve done, and who we are</p>
                        </a>
                    </Link>

                </div>
            </main>
            <footer className={styles.footer}>
                <div className={styles.footertext}>
                    <h2><font color = "#ff0040">Binary</font><font color = "#2F4A70">Heart</font></h2>
                    <p><a href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@binaryheart.org" target="_blank" rel="noreferrer noopener">contact@binaryheart.org</a></p>
                    <p><a href="tel:+1-847-784-2363">847.784.2363</a></p>
                </div>
                <div className={styles.footericons}>
                    <Link href="https://www.instagram.com/binaryheartnt/" target="_blank" rel="noreferrer noopener"><img title="Instagram" className={styles.scalingimageicon} src="/instagram.png" /></Link>
                    <img className={styles.scalingimageicon} src={"/blank space.png"} />
                    <Link href="https://www.linkedin.com/company/binaryheart/" target="_blank" rel="noreferrer noopener"><img title="LinkedIn" className={styles.scalingimageicon} src="/linkedin icon.png" /></Link>
                    <img className={styles.scalingimageicon} src={"/blank space.png"} />
                    <Link href="https://github.com/IsaacNoel/binaryheart" target="_blank" rel="noreferrer noopener"><img title="GitHub" className={styles.scalingimageicon} src="/github.png" /></Link>
                    <img className={styles.scalingimageicon} src={"/blank space.png"} />
                    <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@binaryheart.org" target="_blank" rel="noreferrer noopener"><img title="Email" className={styles.scalingimageicon} src="/email (1).png" /></Link>
                    <img className={styles.scalingimageicon} src={"/blank space.png"} />
                    <Link href="tel:+1-847-784-2363"><img title="Phone" className={styles.scalingimageicon} src="/phone.png" /></Link>
                </div>
            </footer>
        </div>
    )
}
