import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link"
import {
    MDBContainer,
    MDBIcon,
    MDBNavbar,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarNav,
    MDBNavbarToggler
} from "mdb-react-ui-kit";

export default function Home() {
    return (
        <div className={styles.container} id="animated">
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
                        <div className='collapse navbar-collapse headerdiv' id='navbarExample01'>
                            <MDBNavbarNav right className='mb-2 mb-lg-0'>
                                <MDBNavbarItem>
                                    <MDBNavbarLink href='/'>Home</MDBNavbarLink>
                                </MDBNavbarItem>
                                <MDBNavbarItem>
                                    <MDBNavbarLink href='/press'>Press</MDBNavbarLink>
                                </MDBNavbarItem>
                                <MDBNavbarItem>
                                    <MDBNavbarLink href='/contact'>Contact Us</MDBNavbarLink>
                                </MDBNavbarItem>
                                <MDBNavbarItem>
                                    <MDBNavbarLink href='/about'>About</MDBNavbarLink>
                                </MDBNavbarItem>
                                <MDBNavbarItem>
                                    <MDBNavbarLink href='/faqs'>FAQs</MDBNavbarLink>
                                </MDBNavbarItem>
                                <MDBNavbarItem active>
                                    <MDBNavbarLink aria-current='page' href='/products'>Products</MDBNavbarLink>
                                </MDBNavbarItem>
                                <MDBNavbarItem>
                                    <MDBNavbarLink href='/newmembers'>New Members</MDBNavbarLink>
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
                <h2 className={styles.title}>
                    Our solutions
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
                <h1 className = {styles.title}>
                    We&apos;ve done some cool stuff
                </h1>
                <p className={styles.description}>
                    We have... donated to some cool places, including Kenya. Check out these pictures!
                    For our contributions, we won some cool awards too.
                </p>

               

                <h1 className={styles.title}>
                    Student leaders
                </h1>

                

                <p className={styles.description}>
                    We lead our team, securing donations and reaching out to those in need. We own seventeen cats, 4 of whom are named Cindy.
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
