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
                <title>Frequently Asked Questions</title>
                <link rel="icon" href="/favicon.ico"/>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
                      integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4"
                      crossOrigin="anonymous"/>
            </Head>
            <div
                className={styles.static_card}
                style={{
                    border: "1px solid #f57192",
                    "background-color": "rgb(255, 240, 243)"
                }}
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
                style={{
                    border: "1px solid #193961",
                    "background-color": "rgb(231, 242, 255)"
                }}
            >
                <h1>
                    <center>Student Involvement</center>
                </h1>
                <p className={styles.description}>
                    <table>
                        <tr>
                            <td>
                                <b>How do I get involved?</b>
                                <p>Visit our <a href='/newmembers'>New Members</a> page for information</p>
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
        </div>
    )
}