import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {
    MDBContainer,
    MDBIcon,
    MDBNavbar,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarNav,
    MDBNavbarToggler
} from "mdb-react-ui-kit";
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
                <meta name="Description"
                      content="Author: Malachi Noel, Maryanne Xu, Artharva Metkar, Megan Lu, Isaac Noel"/>
            </Head>
            <main className={styles.main}>
                <p className={styles.centereddesc}>
                    Email us about questions and donations at <a href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@binaryheart.org">contact@binaryheart.org (Gmail Link)</a><br/>
                    Also see: <Link href="/faqs">Frequently asked questions</Link>
                </p>
                <p className={styles.container}>
                    If you have any questions about the website itself, you can also find the developers at our <a href={"https://github.com/IsaacNoel/binaryheart"}>GitHub page</a>
                </p>
                <Link href="/">
                    <a className={styles.card}>
                        <h2>Back to the launch page &rarr;</h2>
                    </a>
                </Link>
            </main>
        </div>



    )
}