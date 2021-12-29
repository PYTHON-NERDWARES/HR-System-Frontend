
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image'
import headerLogo from '../assets/logo.jpg';
import Link from 'next/link';
import Navbar from 'react-bootstrap/Navbar';

const Footer = () => {
    return (
        <div>

            {/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand>&copy;</Navbar.Brand>
            </Navbar> */}

            <Navbar>
                <section class="coninfo">
                    <h2>Contact Information:</h2>
                    <h4><Link href=""> Telephone: +962 7948 7207</Link></h4>
                    <h4><Link href=""> WhatsApp: +962 2648 9385 </Link></h4>
                    <h4><Link href=""> Zahrat Al Madaen st, Amman, Jordan</Link></h4>
                </section>

                <Image src={headerLogo} alt="logo" className="bg-cover bg-center" />

                <div class="social">
                    {/* <Link href="https://www.facebook.com"><Image src="images/fb-icon.png" alt=""/></Link>
            <Link href="https://www.instagram.com"><Image src="images/insta-icon.png" alt=""/></Link> */}
                    {/* <a href="https://flickr.com/"><img src="images/flic-icon.png" alt=""></a>
            <a href="https://www.pinterest.com/"><img src="images/pint-icon.png" alt=""></a>
            <a href="mailto:jon@example.org"><img src="images/mail-icon.png" alt=""></a> */}
                </div>

                <p>&copy; created by Flawless 2021</p>

            </Navbar>


        </div>
    )
}

export default Footer;