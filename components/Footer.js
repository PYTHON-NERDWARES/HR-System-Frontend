import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image'
import headerLogo from '../assets/finallogo1.png';
import Link from 'next/link';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faYoutube, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <div className=''>
            <div className='bg-violet-700 rounded-t-3xl'>
                <div className='flex w-3/4 mx-auto justify-evenly'>
                    <div>
                        <a href="index.html">
                            <Image src={headerLogo} alt="logo" className="bg-cover bg-center" width={100} height={120} />
                        </a>
                    </div>
                    <div className='flex my-auto w-1/2 justify-evenly'>
                        <Link href=""><FontAwesomeIcon className='text-gray-100 hover:text-yellow-400' icon={faFacebook} style={{ width: "30px", height: '30px' }} /></Link>
                        <Link href=""><FontAwesomeIcon className='text-gray-100 hover:text-yellow-400' icon={faTwitter} style={{ width: "30px", height: '30px' }} /></Link>
                        <Link href=""><FontAwesomeIcon className='text-gray-100 hover:text-yellow-400' icon={faYoutube} style={{ width: "30px", height: '30px' }} /></Link>
                        <Link href=""><FontAwesomeIcon className='text-gray-100 hover:text-yellow-400' icon={faInstagram} style={{ width: "30px", height: '30px' }} /></Link>
                        <Link href=""><FontAwesomeIcon className='text-gray-100 hover:text-yellow-400' icon={faLinkedin} style={{ width: "30px", height: '30px' }} /></Link>
                    </div>
                </div>
                <div className='flex w-3/4 mx-auto justify-evenly'>
                    <ul>
                        <li className='text-yellow-400 font-black text-lg'>Links</li>
                        <li><a href="index.html" className='text-gray-100 no-underline hover:text-zinc-300 font-bold'>Home</a></li>
                        <li><a href="aboutUs.html" className='text-gray-100 no-underline hover:text-zinc-300 font-bold'>About Us</a></li>
                    </ul>
                    <ul>
                        <li className='text-yellow-400 font-black text-lg'>Contact</li>
                        <li><a className='text-gray-100 no-underline hover:text-zinc-300 font-bold' href="#">+962 7990894852 / +962 7854599224</a></li>
                        {/* <li><a className='text-gray-100 no-underline hover:text-zinc-300 font-bold' href="#"></a></li> */}
                        <li><a className='text-gray-100 no-underline hover:text-zinc-300 font-bold' href="#">contact@FlawlessMasters.com</a></li>
                    </ul>
                </div>
            </div>
            <div className='flex bg-violet-800 h-10 justify-items-center'>
                <div className='flex justify-between w-3/4 mx-auto my-auto'>
                    <div className='text-white font-bold'>Copyright © 2022 <a className='text-yellow-400 no-underline hover:text-white font-bold' href="#">FlawlessMasters.co</a></div>
                    <div>
                        <a className='text-yellow-400 no-underline hover:text-white font-bold' href="#">Privacy policy</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;