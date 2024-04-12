import React, { useState } from 'react'
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import Hero from '../components/Hero';

const Signup = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log(userCredential);
            const user = userCredential.user;
            localStorage.setItem('token', user.accessToken);
            localStorage.setItem('user', JSON.stringify(user));
            navigate("/");
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <Hero>
            <div className='flex flex-col w-full h-fit gap-5 px-5 py-10 rounded-xl backdrop-blur-sm bg-[rgba(246,244,244,0.09)] max-w-xs'>
                <div className="flex w-full items-center justify-center">
                    <h2 className='text-2xl font-bold text-white '>Sign Up</h2>
                </div>
                <form onSubmit={handleSubmit} className='flex w-full gap-8 flex-col'>
                    <div className="flex flex-col gap-2 w-full">
                        <Input
                            value={email}
                            onchangeInput={(e) => setEmail(e.target.value)}
                            name="User ID"
                            type="email"
                            placeholder="Enter Your Email ID"
                        />
                        <Input
                            value={password}
                            onchangeInput={(e) => setPassword(e.target.value)}
                            name="Password"
                            type="password"
                            placeholder="Enter Your Password"
                        />
                    </div>
                    <button type='submit' className='flex w-full text-center items-center justify-center px-8 py-2 rounded-md text-white bg-blue-600'>
                        Sign Up
                    </button>
                </form>
                <p className='text-white text-sm'>You allready have account? <Link to="/login">Login</Link></p>
            </div>
        </Hero>
    )
}

export default Signup