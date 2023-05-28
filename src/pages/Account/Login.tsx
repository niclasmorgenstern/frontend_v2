import { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { apiURL } from '../../utils/apiURL';

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        axios.post(apiURL.auth.login, {
            'email': email,
            'password': password
        }).then(response => {
            console.log(response)
        }).catch(error => {
            console.log(error)
        });
    };

    return (
        <div className="container mx-auto h-screen flex justify-center items-center bg-slate-200">
            <div className='w-full sm:w-[500px] bg-white rounded-lg p-8'>
                <h1 className='text-4xl font-bold text-center mb-8'>Welcome back</h1>
                <button type="button" className="w-full block mb-4 bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300">
                    <div className="flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="w-6 h-6" viewBox="0 0 48 48">
                            <defs><path id="a" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"/></defs><clipPath id="b"><use xlinkHref="#a" overflow="visible"/></clipPath><path clip-path="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z"/><path clip-path="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z"/><path clip-path="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z"/><path clip-path="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z"/>
                        </svg>
                        <span className='ml-4'>
                            Continue with Google
                        </span>
                    </div>
                </button>
                <button type="button" className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300">
                    <div className="flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 bi bi-apple" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z"/>
                            <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z"/>
                        </svg>
                        <span className='ml-4'>
                            Continue with Apple ID
                        </span>
                    </div>
                </button>
                <div className='flex items-center w-full my-6'>
                    <hr className="grow border-gray-300" />
                    <span className='text-gray-300 px-2 text-sm'>OR</span>
                    <hr className="grow border-gray-300" />
                </div>
                <form onSubmit={handleLogin}>
                    <div className='mb-4'>
                        <label className='font-semibold'>Email*</label>
                        <input value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Enter your email" type="text" id='email' className='w-full border-2 border-gray-200 bg-transparent rounded-lg py-2 px-4 mt-1 focus:border-blue-500 focus:outline-none' autoFocus required/>
                    </div>
                    <div className='mb-4'>
                        <div className='flex justify-between'>
                            <label className='font-semibold'>Password*</label>
                            <Link to="#" className="text-blue-500 hover:text-blue-700">Forgot password?</Link>
                        </div>
                        <input value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Enter your password" type="password" id='password' className='w-full border-2 border-gray-200 bg-transparent rounded-lg py-2 px-4 mt-1 focus:border-blue-500 focus:outline-none' required/>
                    </div>
                    <button type='submit' className='w-full mt-10 block bg-blue-500 hover:bg-blue-700 focus:bg-blue-700 text-white font-semibold rounded-lg p-2'>Log in</button>
                </form>
                <p className="mt-6 text-center">
                    <span className='pr-2'>Need an account?</span>                
                    <Link to="/register" className="text-blue-500 hover:text-blue-700 font-semibold">Sign up for free</Link>
                </p>            
            </div>
        </div>
    )
}

export default Login