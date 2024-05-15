import React, { useState, useEffect } from 'react';
import Input from '../components/Input';
import { getAuth, updateProfile } from 'firebase/auth';
import { doc, setDoc, getFirestore } from 'firebase/firestore';

const Dashboard = () => {
    const [name, setName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const auth = getAuth();
    const db = getFirestore();

    console.log(auth.user);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
            console.log(user);
            setLoading(false);
        });

        return () => unsubscribe();
    }, [auth]);


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (!user) {
                console.error('User is not authenticated');
                return;
            }
            await updateProfile(user, {
                displayName: name,
                phoneNumber: mobileNumber
            });

            const userRef = doc(db, 'users', user.uid);
            await setDoc(userRef, {
                displayName: name,
                phoneNumber: mobileNumber,
            }, { merge: true });

            console.log('Profile updated successfully!');
        } catch (error) {
            console.error('Error updating profile:', error.message);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className='flex w-full h-full'>
            <div className="flex flex-col w-full max-w-7xl mx-auto gap-5 px-5 py-5">
                <div className="flex w-full">
                    <h2 className='flex text-2xl font-bold text-white'>DashBoard</h2>
                </div>
                <div className="flex flex-grow w-full text-white">
                    <div className="flex flex-col gap-5 h-fit my-auto w-full max-w-sm md:max-w-lg mx-auto px-5 py-10 rounded-xl backdrop-blur-sm bg-[rgba(246,244,244,0.09)]">
                        <h2 className='flex text-2xl text-center font-bold w-fit mx-auto'>Enter your Profile Details</h2>

                        <div className="flex w-full ">
                            <form className='flex flex-col w-full  gap-8' onSubmit={handleSubmit}>
                                <div className="flex flex-col w-full gap-3">
                                    <Input
                                        value={name}
                                        onchangeInput={(e) => setName(e.target.value)}
                                        name="Full Name"
                                        type="text"
                                        placeholder="Enter Your Full Name"
                                    />
                                    <Input
                                        value={mobileNumber}
                                        onchangeInput={(e) => setMobileNumber(e.target.value)}
                                        name="Mobile Number"
                                        type="tel"
                                        placeholder="Enter Your Mobile Number"
                                    />
                                </div>
                                <button type='submit' className='flex w-full text-center items-center justify-center px-8 py-2 rounded-md text-white bg-blue-600'>
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
