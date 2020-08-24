import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Bookshelf from './Bookshelf'

export default function ListBooks ({ bookshelves, books, onMove }) {
  return (
    <div className='list-books'>
      <div className='list-books-title'>
        <h1>BookIT</h1>
      </div>
      <div className='list-books-content' >
        {bookshelves.map(shelf => (
          <Bookshelf
            key={shelf.key}
            shelf={shelf}
            books={books}
            onMove={onMove}
          />
        ))}
      </div>
      <div className='open-search'>
        <Link to="search">
          <button>Add a Book</button>
        </Link>
      </div>
    </div>
  )
}

ListBooks.PropTypes = {
  bookshelves: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired,
  onMove: PropsTypes.function.isRequired
}