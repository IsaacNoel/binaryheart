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
                            <MDBIcon fas icon='bars' />
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
                <title>About Us</title>
                <meta name="description" content="About BinaryHeart" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
                      integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4"
                      crossOrigin="anonymous"/>
            </Head>

            <main className={styles.main}>


                <h2 className={styles.semititle}>
                    About Us
                </h2>

                <p className={styles.description}>
                    BinaryHeart is a student organization whose objective
                    is to <code className={styles.code}>spread Digital
                    Access</code>. We collect donations of broken or
                    used electronic devices and repair them. Through
                    Northwestern Settlement and other partner charities,
                    the devices are donated to help our less privileged
                    peers. Our hope is that our work will lift people out
                    of poverty, make higher education a reality for more
                    students, and change lives.
                </p>

                <div
                    className ={styles.static_card}
                    style={{
                        border: "1px solid #f57192",
                        "background-color": "rgb(255, 240, 243)"
                    }}
                >
                    <h1>
                        <center>We&lsquo;ve done some cool stuff</center>
                    </h1>
                    <p className={styles.description}>
                        We have... donated to some cool places, including Kenya. Check out these pictures!
                        For our contributions, we won some cool awards too.
                    </p>
                    <p className={styles.description}>
                        <table>
                            <tr>
                                <td width="50%">
                                    <img className={styles.scalingimage} src="/656348main_ToV_transit_diag_full.jpg" />
                                </td>
                                <td>
                                    <p><center>descriptions</center></p>
                                </td>
                            </tr>
                            <tr>
                                <td width="50%">
                                    <p><center>descriptions</center></p>
                                </td>
                                <td width="50%">
                                    <img className={styles.scalingimage} src="/656348main_ToV_transit_diag_full.jpg" />
                                </td>

                            </tr>
                            <tr>
                                <td width="50%">
                                    <img className={styles.scalingimage} src="/656348main_ToV_transit_diag_full.jpg" />
                                </td>
                                <td>
                                    <p><center>descriptions</center></p>
                                </td>
                            </tr>
                            <tr>
                                <td width="50%">
                                    <p><center>descriptions</center></p>
                                </td>
                                <td width="50%">
                                    <img className={styles.scalingimage} src="/656348main_ToV_transit_diag_full.jpg" />
                                </td>
                            </tr>
                        </table>
                    </p>
                </div>

                <div className ={styles.static_card}>
                    <h1>
                        <center>Student Leaders</center>
                    </h1>

                    <p className={styles.description}>
                        <table>
                            <tr>
                                <td width="25%">
                                    <p> photo </p>
                                </td>
                                <td>
                                    <b> Maryanne Xu </b>
                                    <p> Hi everyone! I&lsquo;m a senior at New Trier High School.
                                        I volunteered for BinaryHeart for four years.
                                        During club meetings, I allocate tasks, run club logistics, and work on this website!
                                        I can hold my breath for 2 hours.</p>
                                </td>
                            </tr>
                            <tr>
                                <td width="25%">
                                    <p> photo </p>
                                </td>
                                <td>
                                    <b> Nicholas Sutherland </b>
                                    <p>Howdy! I&lsquo;m Nicholas, a senior at New Trier High School,
                                        and this is my third year at BinaryHeart. I usually end up building shelves,
                                        organizing screwdrivers, and working on our workspace during club.
                                        Oh yeah, and I invented the microwave burrito.</p>
                                </td>
                            </tr>
                            <tr>
                                <td width="25%">
                                    <p> photo </p>
                                </td>
                                <td>
                                    <b> Rom Fradkin </b>
                                    <p>Rom Fradkin (5’ 9’’, 150lbs) is a senior at New Trier High School.
                                        He&lsquo;s volunteered for BinaryHeart since freshman year. He owns four cows.</p>
                                </td>
                            </tr>
                            <tr>
                                <td width="25%">
                                    <p> photo </p>
                                </td>
                                <td>
                                    <b> Julia Hudson  </b>
                                    <p>Hey! I&lsquo;m Julia, a sophomore at New Trier High School.
                                        I&lsquo;ve volunteered for BinaryHeart for two years now.
                                        When not fixing computers, I work on our website,
                                        manage our inventory system, and have plans for chapter expansion.
                                        .</p>
                                </td>
                            </tr>
                            <tr>
                                <td width="25%">
                                    <p> photo </p>
                                </td>
                                <td>
                                    <b> Andrew Gill </b>
                                    <p>Hello, I&lsquo;m Andrew! :) I&lsquo;m a senior at New Trier High School,
                                        and I&lsquo;ve been in the club since my sophomore year.
                                        I&lsquo;m usually in charge of organization, whether on the task sheet or
                                        in the closet I spent an entire year setting up.
                                        By the way, I&lsquo;ve been to the North Pole!
                                        .</p>
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
