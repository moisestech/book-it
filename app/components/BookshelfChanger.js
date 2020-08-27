import React from 'react'
import PropTypes from 'prop-types'

export default function BookshelfChanger ({ book, shelf, onMove }) {
  const [shelfState, setShelfState] = React.useState('')

  const handleChange = (event) => {
    const { value } = event.target
    setShelfState(value)
    console.log(book, value)
  }

  return (
    <div className='book-shelf-changer'>
      <select
        value={shelfState.shelf}
        onChange={(event) => handleChange(event)}
      >
        <option value='move' disabled>
          Move to...
        </option>
        <option value='currentlyReading'>Currently Reading</option>
        <option value='wantToRead'>Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  )
}

BookshelfChanger.propTypes = {
  book: PropTypes.object.isRequired,
  shelf: PropTypes.string.isRequired,
  onMove: PropTypes.func.isRequired
}