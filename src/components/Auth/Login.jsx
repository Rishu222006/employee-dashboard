import React, { useState } from 'react'

const Login = ({ onLogin }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin(email, password);
        setEmail("");
        setPassword("");
    }


    return (
        <div className='flex items-center justify-center h-screen w-screen'>
            <div className='border-2 border-emerald-600 p-20'>
                <form onSubmit={handleSubmit}
                    className='flex flex-col items-center justify-center'>
                    <input
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        required placeholder='enter your email' className='border-2 border-emerald-600 rounded-full py-3 px-5 text-xl text-white outline-none bg-transparent placeholder:text-white' />
                    <input
                        type='password'
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        required placeholder='enter your password' className='mt-10 border-2 border-emerald-600 rounded-full py-3 px-5 text-xl text-white outline-none bg-transparent placeholder:text-white' />
                    <button type='submit' className='mt-7 border-2 bg-emerald-600 rounded-full py-3 px-5 text-xl text-white outline-none placeholder:text-white' >Log In</button>
                </form>
            </div>
        </div>
    )
}

export default Login;
