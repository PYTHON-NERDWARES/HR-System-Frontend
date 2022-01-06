import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import headerLogo from '../assets/finallogo1.png';
import cookie from 'react-cookies';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { aboutUs } from '../store/states'



const Header = () => {

    let dispatch = useDispatch()

    const state = useSelector((state) => {
        return {
            aboutus: state.stateReducer.aboutus,
        }
    });

    const LogOut = () => {
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

                        <Navbar className='p-0 w-3/4' id="responsive-navbar-nav">
                            <Nav className="ml-40 flex justify-evenly w-full">
                                <div>
                                    <button onClick={() => dispatch(aboutUs(false))}  ><Nav.Link className="text-xl font-bold text-white bg-yellow-400 hover:bg-yellow-500 rounded-md">Home</Nav.Link></button>

                                </div>
                                <div>
                                    <button onClick={() => dispatch(aboutUs(true))} ><Nav.Link className="text-xl font-bold text-white bg-yellow-400 hover:bg-yellow-500 rounded-md">About Us</Nav.Link></button>

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