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
import Link from "next/link"

export default function Home(){
    return (

        <div className={styles.container}>

            <header>
                <MDBNavbar expand='lg' light bgColor='white'>
                    <MDBContainer fluid>
                        <MDBNavbarToggler
                            aria-controls='navbarExample01'
                            aria-expanded='false'
                            aria-label='Toggle navigation'
                        >
                            <MDBIcon fas icon='bars'/>
                        </MDBNavbarToggler>
                        <div className='collapse navbar-collapse' id='navbarExample01'>
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
                                    <MDBNavbarLink href='/contact'>Contact us</MDBNavbarLink>
                                </MDBNavbarItem>
                                <MDBNavbarItem>
                                    <MDBNavbarLink href='/products'>Products</MDBNavbarLink>
                                </MDBNavbarItem>
                                <MDBNavbarItem>
                                    <MDBNavbarLink href='/donate'>Donate</MDBNavbarLink>
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
                <div
                    className={styles.static_card_red}
                >
                    <h2>
                        <center>Student Involvement</center>
                    </h2>
                    <p className={styles.description}>
                        <table>

                            <tr>
                                <td>
                                    <b>When does BinaryHeart meet?</b>
                                    <p>We meet every Wednesday and Thursday from 3:30 pm to 5 pm.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <b>Where does BinaryHeart meet?</b>
                                    <p>We meet in room 504 of the Winnetka campus building.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <b>How do I get involved?</b>
                                    <p>Come visit us! We will show you around. </p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <b>Who are the BinaryHeart sponsors?</b>
                                    <p>Our sponsors are Mrs. Pritchard, Ms. Caruthers, and Mr. Catalano.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <b>Is it required to come everyday?</b>
                                    <p>No. We understand that you may have other commitments, so come only as often as you can.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <b>What experience do I need?</b>
                                    <p>None! We welcome all levels of technical experience.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <b>New Trier has a fifth floor?</b>
                                    <p>Yes! It is the old WNTH radio station. The room is on the old (east) side of the building. It faces the front of the campus out to Winnetka Avenue.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <b>Can I join as a freshman?</b>
                                    <p>Yes! You will need to go to the Winnetka campus, but you are welcome to join.</p>
                                </td>
                            </tr>
                        </table>
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