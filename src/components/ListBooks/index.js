import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Bookshelf from '../Bookshelf'

export default function ListBooks ({ bookshelves, books, onMove }) {
  return (
    <div className='list-books'>
      <div className='list-books-title'>
        <h1>BookIT</h1>
      </div>
      <div className='list-books-content' >
        {/*bookshelves && <pre>{JSON.stringify(bookshelves, null, 2)}</pre>*/}
        {bookshelves.map((shelf, key) => (
          //shelf && <pre key={key}>{JSON.stringify(shelf, null, 2)}</pre>
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

ListBooks.propTypes = {
  bookshelves: PropTypes.array.isRequired,
  books: PropTypes.array.isRequired,
  onMove: PropTypes.func.isRequired
}