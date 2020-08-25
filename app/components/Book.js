import React from 'react'
import PropTypes from 'prop-types'

export default function Book ({ book, shelf, onMove }) {

  return (
    <li>
      <div className='book'>
        <div className='book-top'>
          <div
            className='book-cover'
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${
                book.imageLinks
                  ? book.imageLinks.thumbnail
                  : 'icons/book-placeholder.svg'
              })`
            }}
          />
        </div>
        <div className='book-title'>
          {book.title}
        </div>
        <div className='book-authors'>
          {book.authors ? book.authors.join(', '): 'Unknown Author'}
        </div>
      </div>
    </li>
  )
}

Book.propTypes = {
  book: PropTypes.object,
  shelf: PropTypes.string,
  // onMove: PropTypes.function
}