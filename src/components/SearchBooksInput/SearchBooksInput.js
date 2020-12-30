import React from 'react'
import PropTypes from 'prop-types'

export default function SearchBooksInput ({ onSearch }) {
  const [value, setValue] = React.useState([])

  const handleChange = (event) => setValue(event.target.value)

  return (
    <div className='search-books-input-wrapper'>
      <input
        type='text'
        value={value}
        placeholder='Search by title or author'
        onChange={handleChange}
        autoFocus
      />
    </div>
  )
}

SearchBooksInput.propTypes = {
  onSearch: PropTypes.func.isRequired
}