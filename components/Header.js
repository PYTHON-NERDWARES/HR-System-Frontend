// import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import headerLogo from '../assets/finallogo1.png';
import cookie from 'react-cookies';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';


const Header = () => {

    const LogOut = () =>{
        cookie.remove('token', { path: '/' })
        window.location.reload(false);
    }
    return (
        <div >
            <Head>
                <title>HR System</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Navbar collapseOnSelect expand='false' className='flex bg-violet-800 w-full justify-between rounded-b-3xl z-0' >

                <Navbar.Brand href='/'>
                    <div className="bg-[length:50px_50px] ml-10">
                        <Image src={headerLogo} alt="logo" className="bg-cover bg-center" width={100} height={120} />
                    </div>
                </Navbar.Brand>

                <div className='w-2/5'>
                    <div className='flex justify-evenly'>
                        {/* <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <button className='-ml-10 px-2 bg-yellow-400 rounded-md mr-6 hover:bg-yellow-300'>Search</button>
                        </Form> */}
                        <Navbar className='p-0 w-3/4' id="responsive-navbar-nav">
                            <Nav className="ml-40 flex justify-evenly w-full">
                                <div>

                                <Link  href="/contact" ><Nav.Link className="text-xl font-bold text-white bg-yellow-400 hover:bg-yellow-500 rounded-md">Home</Nav.Link></Link>
                                </div>
                                <div>

                                <Link href="/about" ><Nav.Link className="text-xl font-bold text-white bg-yellow-400 hover:bg-yellow-500 rounded-md">About Us</Nav.Link></Link>
                                </div>
                                <div>

                                <button onClick={LogOut} ><Nav.Link className="text-xl font-bold text-white bg-yellow-400 hover:bg-yellow-500 rounded-md">Logout</Nav.Link></button>
                                </div>

                            </Nav>

                        </Navbar>
                    </div>
                </div>

            </Navbar>
        </div>
    )
}

export default Header;