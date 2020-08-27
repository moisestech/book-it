import React from 'react'
import PropTypes from 'prop-types'

export default function SearchResults ({ searchBooks, myBooks, onMove }) {
  const updatedBooks = (searchBooks.map(book => {
    myBooks.map(b => {
      if (b.id === book.id) {
        book.shelf = b.shelf
      }
      return b
    })
    return book
  }))

  return (
    <div className='search-books-results'>
      <ol className='books-grid'>
        {updatedBooks.map(book => (
          <Book
            key={book.id}
            book={book}
            shelf={book.shelf ? book.shelf : 'none'}
            onMove={onMove}
          />
        ))}
      </ol>
    </div>
  )
}

SearchResults.propTypes = {
  searchBooks: PropTypes.array.isRequired,
  myBooks: PropTypes.array.isRequired,
  onMove: PropTypes.func.isRequired
}