import React from 'react'
import { Route } from 'react-router-dom'
import { debounce } from 'throttle-debounce'
import * as BooksAPI from '../utils/BooksAPI'
// import ListBooks from './ListBooks'
// import SearchBooks from './SearchBooks'


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
  const [state, dispatch] = React.useReducer(
    myBooksReducer,
    { error: null}
  )

  React.useEffect(() => {
    BooksAPI.getAll()
      .then((books) => dispatch({ type: 'success', books}))
      .catch((error) => dispatch({ type: 'error', error }))
  }, [myBooks])



  // React.useEffect(() => {

  // }, [setSearchBooks])


  return (
    <>
      {state.error && <div>Network error. Please try again later.</div>}
      <div className="app">

          <div>List Books</div>
          <div>Search Books</div>

          {/*<Route
            exact path="/"
            component={
              <ListBooks
                bookshelves={bookshelves}
                books={myBooks}
                onMove={this.moveBook}
              />
            }
          />
          <Route
            path="/search"
            component={
              <SearchBooks
                searchBooks={searchBooks}
                myBooks={myBooks}
                onSearch={this.searchForBooks}
                onMove={this.moveBook}
                onResetSearch={this.resetSearch}
              />
            }
          />*/}
      </div>
    </>
  )
}