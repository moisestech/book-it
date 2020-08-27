import React from 'react'
import { Route } from 'react-router-dom'
import { debounce } from 'throttle-debounce'
import * as BooksAPI from '../utils/BooksAPI'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'


const bookshelves = [
  { key: 'currentlyReading', name: 'Currently Reading' },
  { key: 'wantToRead', name: 'Want to Read' },
  { key: 'read', name: 'Read' }
]

function myBooksReducer (state, action) {
  if (action.type === 'success') {
    return {
      ...state,
      myBooks: action.books,
      error: false
    }
  } else if (action.type === 'error') {
    return {
      ...state,
      error: true
    }
  } else {
      throw new Error(`'That action type isn't supported.`)
  }
}

export default function Bookit () {
  const [myBooks, setMyBooks] = React.useState([])
  const [searchBooks, setSearchBooks] = React.useState([])
  const [error, setError] = React.useState(false)

  const [state, dispatch] = React.useReducer(
    myBooksReducer,
    { error: null}
  )

  // React.useEffect(() => {
  //   BooksAPI.getAll()
  //     .then((books) => dispatch({ type: 'success', books}))
  //     .catch((error) => dispatch({ type: 'error', error }))
  // }, [myBooks])

  React.useEffect(() => {
    BooksAPI.getAll()
      .then((books) => setMyBooks(books))
      .catch((error) => setError(error))
  }, [myBooks, error])

  const moveBook = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .catch((error) => {
        console.log(error)
        setError(error)
      })

    console.log({ "book": book, "shelf": shelf })
  }

  return (
    <>
      {error && <div>Network error. Please try again later.</div>}
      <div className="app">

          <div>List Books</div>
          <ListBooks
            bookshelves={bookshelves}
            books={myBooks}
            onMove={(moveBook) => null}
          />

          <div>Search Books</div>

          {/*<Route
            path="/search"
            component={
              <SearchBooks
                searchBooks={searchBooks}
                myBooks={myBooks}
                onSearch={(searchForBooks) => null}
                onMove={(moveBook) => null}
                onResetSearch={(resetSearch) => null}
              />
            }
          />*/}
      </div>
    </>
  )
}