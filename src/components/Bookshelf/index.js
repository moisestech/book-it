import React from 'react'
import PropTypes from 'prop-types'
import Book from '../Book'

export default function Bookshelf ({ shelf, books, onMove }) {

  const bookOnThisShelf = books.filter(book => book.shelf === shelf.key)

  return (
    <div className='bookshelf'>
      <h2 className='bookshelf-title'>
        {shelf.name}
      </h2>
      <div className='bookshelf-books'>
        <ol className='books-grid'>
          {bookOnThisShelf.map(book => (
            <Book
              key={book.id}
              book={book}
              shelf={shelf.key}
              onMove={onMove}
            />
          ))}
        </ol>
      </div>
    </div>
  )
}

Bookshelf.propTypes = {
  shelf: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired,
  onMove: PropTypes.func.isRequired
}