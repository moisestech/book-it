import React from 'react'
import PropTypes from 'prop-types'
import BookshelfChanger from '../BookshelfChanger'

function BookCover ({ imageLinks }) {
  return (
    <div
      className='book-cover'
      style={{
        width: 128,
        height: 193,
        backgroundImage: `url(${
          imageLinks
            ? imageLinks.thumbnail
            : 'icons/book-placeholder.svg'
        })`
      }}
    />
  )
}

BookCover.propType = {
  imageLinks: PropTypes.object.isRequired
}

function BookInfo ({ title, authors }) {
  return (
    <>
      <div className='book-title'>
        {title}
      </div>
      <div className='book-authors'>
        {authors ? authors.join(', '): 'Unknown Author'}
      </div>
    </>
  )
}

BookInfo.propTypes = {
  title: PropTypes.string.isRequired,
  authors: PropTypes.array.isRequired
}

export default function Book ({ book, shelf, onMove }) {

  return (
    <li>
      <div className='book'>
        <div className='book-top'>
          <BookCover imageLinks={book.imageLinks} />
          <BookshelfChanger
            book={book}
            shelf={shelf}
            onMove={onMove}
          />
        </div>
        <BookInfo
          title={book.title}
          authors={book.authors}
        />
      </div>
    </li>
  )
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  shelf: PropTypes.string.isRequired,
  onMove: PropTypes.func.isRequired
}