import React from 'react'

const Input = ({ name, type, placeholder, value, onchangeInput, errorValue }) => {
    return (
        <div>
            <fieldset className='flex flex-col w-full border border-blue-600 rounded-md text-white'>
                <legend className='flex w-fit ml-3 text-sm'>{name}</legend>
                <input
                    type={type}
                    value={value}
                    onChange={onchangeInput}
                    placeholder={placeholder}
                    className='flex w-full text-sm h-8 bg-transparent outline-none pl-3'
                />
                <span className='text-xs'>{errorValue}</span>
            </fieldset>
        </div>
    )
}

export default Input
