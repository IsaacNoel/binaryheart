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
                                <MDBNavbarItem active>
                                    <MDBNavbarLink aria-current='page' href='/donate'>Donate</MDBNavbarLink>
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
                                <MDBNavbarItem>
                                    <MDBNavbarLink href='/products'>Products</MDBNavbarLink>
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
                <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLScG1w-t5g9lkYdlXtxsyYcazWpu8GuuzkHM_GtQO9th8WVjPQ/viewform?embedded=true"
                    className = {styles.googleform} height = "1200" frameBorder="0" marginHeight="0" marginWidth="0">Loading…
                </iframe>
                <Link href="/contact">
                    <a className={styles.card}>
                        <h2>Back to the contact page &rarr;</h2>
                    </a>
                </Link>
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
            </main>


        </div>
    )
}
