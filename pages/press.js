import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {
    MDBNavbar,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBContainer,
    MDBIcon
} from 'mdb-react-ui-kit';
import Link from "next/link";

export default function Home() {
    return (

        <div className={styles.container}>

            <header>
                <MDBNavbar expand='md' light bgColor="white">
                    <MDBContainer fluid>
                        <MDBNavbarToggler
                            aria-controls='navbarExample01'
                            aria-expanded='false'
                            aria-label='Toggle navigation'
                        >
                            <MDBIcon fas icon='bars' />
                        </MDBNavbarToggler>
                        <div className='collapse navbar-collapse headerdiv' id='navbarExample01'>
                            <MDBNavbarNav right className='mb-2 mb-lg-0'>
                                <MDBNavbarItem active>
                                    <MDBNavbarLink aria-current='page' href='/'>
                                        Home
                                    </MDBNavbarLink>
                                </MDBNavbarItem>
                                <MDBNavbarItem>
                                    <MDBNavbarLink href='/press'>Press</MDBNavbarLink>
                                </MDBNavbarItem>
                                <MDBNavbarItem>
                                    <MDBNavbarLink href='/donate'>Donate</MDBNavbarLink>
                                </MDBNavbarItem>
                                <MDBNavbarItem>
                                    <MDBNavbarLink href='/contact'>Contact Us</MDBNavbarLink>
                                </MDBNavbarItem>
                                <MDBNavbarItem>
                                    <MDBNavbarLink href='/about'>About</MDBNavbarLink>
                                </MDBNavbarItem>
                            </MDBNavbarNav>
                        </div>
                    </MDBContainer>
                </MDBNavbar>
            </header>
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


                <h2 className={styles.semititle}>
                    BinaryHeart in the News!
                </h2>



                <p className={styles.description}>
                    Follow along our journey to<code className={styles.code}>spread digital
                    access</code>. Check out our latest news updates here!
                </p>

                <div
                    className ={styles.static_card}
                    style={{
                        border: "1px solid #f57192",
                        "background-color": "rgb(255, 240, 243)"
                    }}
                >
                    <h3>
                        <center>Press Inquiries</center>
                    </h3>
                    <p className={styles.description}>
                        If you&lsquo;re a member of the press, please email us at <a href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@binaryheart.org">contact@binaryheart.org</a>.
                    </p>

                </div>

                <div className ={styles.static_card}>
                    <h1>
                        <center>Student Leaders</center>
                    </h1>

                    <p className={styles.description}>
                        <b> Maryanne Xu</b>
                        <p>Hi everyone! I&lsquo;m a senior at New Trier High School.
                            I volunteered for BinaryHeart for four years.
                            During club meetings, I allocate tasks, run club logistics, and work on this website!
                            I can hold my breath for 2 hours.</p>
                        <b> Nicholas Sutherland</b>
                        <p> Howdy! I&lsquo;m Nicholas, a senior at New Trier High School,
                            and this is my third year at BinaryHeart. I usually end up building shelves,
                            organizing screwdrivers, and working on our workspace during club.
                            Oh yeah, and I invented the microwave burrito.</p>
                        <b> Rom Fradkin</b>
                        <p> Rom Fradkin (5’ 9’’, 150lbs) is a senior at New Trier High School.
                            He&lsquo;s volunteered for BinaryHeart since freshman year. He owns four cows.
                        </p>
                        <b> Julia Hudson </b>
                        <p> Hey! I&lsquo;m Julia, a sophomore at New Trier High School.
                            I&lsquo;ve volunteered for BinaryHeart for two years now.
                            When not fixing computers, I work on our website,
                            manage our inventory system, and have plans for chapter expansion.
                        </p>
                        <b> Andrew Gill </b>
                        <p> Hello, I&lsquo;m Andrew! :) I&lsquo;m a senior at New Trier High School,
                            and I&lsquo;ve been in the club since my sophomore year.
                            I&lsquo;m usually in charge of organization, whether on the task sheet or
                            in the closet I spent an entire year setting up.
                            By the way, I&lsquo;ve been to the North Pole!
                        </p>
                    </p>
                </div>

                <Link href="/">
                    <a className={styles.card}>
                        <h2>Back to the launch page &rarr;</h2>
                    </a>
                </Link>
            </main>



        </div>
    )
}
