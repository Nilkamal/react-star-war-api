import React from 'react';

const SearchInput = ({onSearchChange}) => {
    return (
        <div>
            <input 
            type='search' 
            placeholder='Search Him/Her' 
            className='pa2 w-30 bg-light-blue' 
            onChange={onSearchChange}
            />
        </div>
    )
}

export default SearchInput;