import React from 'react'

const Input = ({ name, type, placeholder, value, onchangeInput, errorValue, children, inputName }) => {
    return (
        <>
            <fieldset className='flex flex-col w-full border border-blue-600 bg-neutral-900 rounded-md text-white'>
                <legend className='flex w-fit ml-3 text-sm'>{name}</legend>
                {children}
                <input
                    name={inputName}
                    type={type}
                    value={value}
                    onChange={onchangeInput}
                    placeholder={placeholder}
                    className='flex w-full text-sm h-8 bg-transparent outline-none pl-3'
                />
                <span className='text-xs'>{errorValue}</span>
            </fieldset>
        </>
    )
}

export default Input
