import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'

const App = () => {
    return (
        <div className='flex w-full h-screen flex-col'>

            <Header />

            <main className='flex flex-grow w-full flex-col'>
                <Outlet />
            </main>

        </div>
    )
}

export default App
