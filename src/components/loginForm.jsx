import React, {useState} from 'react'
import loginImg from '../assets/loginImg.png'

export default function Login({Login, error}) {
    const [details, setDetails] = useState({username:"", password:""});

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }


    return(
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
            <div className='hidden sm:block'>
                <img className='w-full h-full object-cover' src={loginImg} alt='' />
            </div>

            <div className='bg-gray-400 flex flex-col justify-center'>
                <form onSubmit={submitHandler} className='max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8'>
                    <h2 className='text-4xl dark:text-white font-bold text-center'>SIGN IN</h2>
                    {/* ERROR */}
                    <div className='flex flex-col text-gray-400 py-2'>
                        <label htmlFor='username'>Username</label>
                        <input onChange={e => setDetails({...details, username: e.target.value})} value={details.username} name='username' id='username' className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" />
                    </div>
                    <div className='flex flex-col text-gray-400 py-2'>
                        <label htmlFor='password'>Password</label>
                        <input onChange={e => setDetails({...details, password: e.target.value})} value={details.password} name='password' id='password' className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="password" />
                    </div>
                    <div className='flex justify-between text-gray-400 py-2'>
                        <p className='flex items-center'><input className='mr-2' type="checkbox" /> Remember Me</p>
                        <p>Forgot Password</p>
                    </div>
                    <button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>SIGNIN</button>
                    
                </form>
            </div>

        </div>
    )
}