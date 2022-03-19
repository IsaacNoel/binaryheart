import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

import {
    MDBNavbar,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBContainer,
    MDBIcon
} from 'mdb-react-ui-kit';

function Home(){
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
            <Title>Frequently Asked Questions</Title>
            <div
                className={styles.static_card}
            >
                <h1>
                    <center>Donations</center>
                </h1>
                <p className={styles.description}>
                    <table>
                        <tr>
                            <td>
                                <b> What kind of donations are accepted?</b>
                                <p> We accept computers (any brand), keyboards, iPads, tablets, monitors, mice, and
                                    more.</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b>How do I donate?</b>
                                <p>Send us an email if you want to donate!</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b>Where do I donate?</b>
                                <p>Drop off donations at New Trier High School Winnetka Campus. Please contact us first prior to donating.</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b>What do I have to do before donating?</b>
                                <p>We recommended that you factory reset your device and remove all stickers, post-its, etc.</p>
                            </td>
                        </tr>
                    </table>
                </p>
            </div>
            <div
                className={styles.static_card}
            >
                <h1>
                    <center>Student Involvement</center>
                </h1>
                <p className={styles.description}>
                    <table>
                        <tr>
                            <td>
                                <b>How do I get involved?</b>
                                <p>Visit our New Members page for information</p> //I wanted to add the new members link but it didn't work the way I tried so I'll do it later.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b>When does BinaryHeart meet?</b>
                                <p>We meet every Wednesday and Thursday.</p>
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
        </div>
    )
}