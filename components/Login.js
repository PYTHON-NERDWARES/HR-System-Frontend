import React from 'react'
import Head from 'next/head';
import Image from 'next/image'
import headerLogo from '../assets/finallogo1.png';
import {useDispatch} from 'react-redux';
import { getCredintials  } from '../store/states';
import {postRequest } from '../store/states'

const baseUrl = process.env.NEXT_PUBLIC_HOST;
const tokenUrl = baseUrl + 'api/token/';

function LoginForm() {

    const dispatch = useDispatch();

    
    
    const usernameChangeHandler = (e) => {
    }

    const passwordChangeHandler = (e) => {
    }

    const logInHandler = (e) =>{
        e.preventDefault()        
        let username = e.target.username.value
        let password = e.target.password.value
        dispatch(getCredintials({username,password}))
        dispatch(postRequest(tokenUrl,{username,password}))
    }

    return (
        <div className='flex w-full h-screen '>
            <Head>
                <title>Login</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <div className='flex w-1/2 h-2/3 my-auto mx-auto bg-violet-700 rounded-lg shadow shadow-violet-500 border'>
                <div className='w-2/5 h-full mt-10 '>
                    <Image src={headerLogo} alt="" className=''  width={400} height={450} />
                </div>
                <form className=" flex flex-col w-1/2 gap-4 p-8 mx-auto mt-auto mb-auto text-center bg-gray-200 border-2 border-gray-400 rounded-lg text-md" onSubmit={e => logInHandler(e)} method='post'>
                    <div className="flex flex-col ">
                        <label className="mb-2 font-bold uppercase text-grey-darkest" htmlFor="username">User Name</label>
                        <input className="px-3 py-2 border text-grey-darkest" type="text" name="username" id="username" placeholder="User Name" onChange={usernameChangeHandler} />
                    </div>

                    <div className="flex flex-col ">
                        <label className="mb-2 font-bold uppercase text-grey-darkest" htmlFor="password">Password</label>
                        <input className="px-3 py-2 border text-grey-darkest" type="password" name="password" id="password" placeholder="password" onChange={passwordChangeHandler} />
                    </div>

                    <button className="px-3 py-4 mt-8 uppercase bg-gray-500 rounded text-green hover:bg-gray-600 text-gray-50" type="submit">Sign In</button>
                </form>
            </div>

        </div>
    )
}

export default LoginForm

