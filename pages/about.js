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
        <div className={styles.container} id="animated">
            <header>
                <MDBNavbar expand='md' light bgColor='white'>
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
                                <MDBNavbarItem active>
                                    <MDBNavbarLink aria-current='page' href='/about'>About</MDBNavbarLink>
                                </MDBNavbarItem>
                                <MDBNavbarItem>
                                    <MDBNavbarLink href='/faqs'>FAQs</MDBNavbarLink>
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
                <meta name="Description"
                      content="Author: Isaac Noel, Malachi Noel, Maryanne Xu, Megan Lu, Atharva Metkar"/>
            </Head>

            <main className={styles.main}>

                <h1 className={styles.pressBig}>
                    <b>About Us</b>
                </h1>

                <p className={styles.pressSub}>
                    BinaryHeart is an after-school nonprofit that aims to <code className={styles.code}>spread Digital
                    Access</code>. We collect broken or
                    used electronic devices and repair them afterschool. Through
                    Northwestern Settlement and other partner charities,
                  we re-donate those devices to low-income schools. Check out the <Link href="/press">
                    press page</Link> to see what we&lsquo;ve done!
                </p>
            <div className={styles.mobilehide}>
                <div className ={styles.static_card}>
                    <h1>
                        <b><center>Student Leaders</center></b>
                    </h1>

                    <p className={styles.description}>
                        <table>
                            <tr>
                                <td width="25%">
                                    <img className={styles.scalingimage} src="/maryanne.jpg" alt="Maryanne" />
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
                                    <img className={styles.scalingimage} src="/nicholas.jpg" alt="Nicholas" />
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
                                    <img className={styles.scalingimage} src="/rom.png" alt="rom" />
                                </td>
                                <td>
                                    <b> Rom Fradkin </b>
                                    <p>Rom Fradkin (5’ 9’’, 150lbs) is a senior at New Trier High School.
                                        He&lsquo;s volunteered for BinaryHeart since freshman year. He owns four cows.</p>
                                </td>
                            </tr>
                            <tr>
                                <td width="25%">
                                    <img className={styles.scalingimage} src="/julia.png" alt="julia" />
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
                                    <img className={styles.scalingimage} src="/andrew.jpg" alt="Andrew" />
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
            </div>
                <div className={styles.mobileshow}>
                    <div className ={styles.static_card}>
                        <h1>
                            <b><center>Student Leaders</center></b>
                        </h1>

                        <p className={styles.description}>

                                        <img className={styles.scalingimage} src="/maryanne.jpg" alt="Maryanne" />

                                        <b> Maryanne Xu </b>
                                        <p> Hi everyone! I&lsquo;m a senior at New Trier High School.
                                            I volunteered for BinaryHeart for four years.
                                            During club meetings, I allocate tasks, run club logistics, and work on this website!
                                            I can hold my breath for 2 hours.</p>

                                        <img className={styles.scalingimage} src="/nicholas.jpg" alt="Nicholas" />

                                        <b> Nicholas Sutherland </b>
                                        <p>Howdy! I&lsquo;m Nicholas, a senior at New Trier High School,
                                            and this is my third year at BinaryHeart. I usually end up building shelves,
                                            organizing screwdrivers, and working on our workspace during club.
                                            Oh yeah, and I invented the microwave burrito.</p>

                                        <img className={styles.scalingimage} src="/rom.png" alt="rom" />

                                        <b> Rom Fradkin </b>
                                        <p>Rom Fradkin (5’ 9’’, 150lbs) is a senior at New Trier High School.
                                            He&lsquo;s volunteered for BinaryHeart since freshman year. He owns four cows.</p>

                                        <p> <img className={styles.scalingimage} src="/julia.png" alt="julia"/> </p>

                                        <b> Julia Hudson  </b>
                                        <p>Hey! I&lsquo;m Julia, a sophomore at New Trier High School.
                                            I&lsquo;ve volunteered for BinaryHeart for two years now.
                                            When not fixing computers, I work on our website,
                                            manage our inventory system, and have plans for chapter expansion.
                                            .</p>

                                        <img className={styles.scalingimage} src="/andrew.jpg" alt="Andrew" />

                                        <b> Andrew Gill </b>
                                        <p>Hello, I&lsquo;m Andrew! :) I&lsquo;m a senior at New Trier High School,
                                            and I&lsquo;ve been in the club since my sophomore year.
                                            I&lsquo;m usually in charge of organization, whether on the task sheet or
                                            in the closet I spent an entire year setting up.
                                            By the way, I&lsquo;ve been to the North Pole!
                                            .</p>

                        </p>
                    </div>
                </div>

                <div
                    className ={styles.static_card}
                    style={{
                        border: "1px solid dodger blue",
                        "background-color": "dodger blue"
                    }}
                >
                    <h1>
                        <b><center>Club Sponsors</center></b>
                    </h1>

                    <p className={styles.description}>
                        Mrs. Pritchard, Ms. Caruthers, and Mr. Catalano.
                    </p>

                </div>

                <Link href="/">
                    <a className={styles.card}>
                        <h2>Back to the launch page &rarr;</h2>
                    </a>
                </Link>
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
