import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import SearchResults from './SearchResults'
import SearchBooksInput from './SearchBooksInput'

export default function SearchBooks (
  { searchBooks,
    myBooks,
    onSearch,
    onResetSearch,
    onMove }) {

  return (
    <div className='search-books'>
      <div className='search-books-bar'>
        <Link to="/">
          <button
            className='close-search'
            onClick={onResetSearch}
          >
            Close
          </button>
        </Link>
        <SearchBooksInput
          onSearch={onSearch} />
      </div>
      <SearchResults
        searchBooks={searchBooks}
        myBooks={myBooks}
        onMove={(onMove) => null}
      />
    </div>
  )
}

SearchBooks.propTypes = {
  searchBooks: PropTypes.array.isRequired,
  myBooks: PropTypes.array.isRequired,
  onSearch: PropTypes.func.isRequired,
  onResetSearch: PropTypes.func.isRequired,
  onMove: PropTypes.func.isRequired
}