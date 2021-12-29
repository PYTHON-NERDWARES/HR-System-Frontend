import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import Image from 'next/image'
import Link from 'next/link';
import headerLogo from '../assets/logo.jpg';

import { Navbar, Nav, NavDropdown, Form , FormControl, Button } from 'react-bootstrap';


const Header = () => {
    return (
        <div>
            <Head>
                <title>HR System</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Navbar collapseOnSelect expand="lg" bg="light" style={{ maxWidth: '1440px' }} >
                <Navbar.Brand href='/'>
                    <div className="bg-[length:50px_50px]">
                    <Image src={headerLogo} alt="logo" className = "bg-cover bg-center"  />
                    </div>
                </Navbar.Brand>
            <Navbar.Brand >HR System</Navbar.Brand>
               <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Toggle aria-controls="responsive-nabar-nav" />
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link href="/contact"><Nav.Link>Home</Nav.Link></Link>
                        <Link href="/about"><Nav.Link>About Us</Nav.Link></Link>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </div >
    )
}

export default Header;