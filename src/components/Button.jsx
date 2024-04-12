import React from 'react'

const Button = ({ buttonText, className = '', onclickHandler, children }) => {
    return (
        <button onClick={onclickHandler} className={`flex w-fit px-8 py-2 rounded-md text-white bg-blue-600 ${className}`}>
            {buttonText}{children}
        </button>
    )
}

export default Button
