import React from 'react'
import { Route } from 'react-router-dom'
import { debounce } from 'throttle-debounce'
import * as Books API from '../utils/BooksAPI'
// import ListBooks from './ListBooks'
// import SearchBooks from './SearchBooks'


const bookshelves = [
  { key: 'currentlyReading', name: 'Currently Reading' },
  { key: 'wantToRead', name: 'Want to Read' },
  { key: 'read', name: 'Read' }
]

export default function Bookit () {
  const [myBooks, setMyBooks ] = React.useState([]),
  const [searchBooks, setSearchBooks] = React.useState([])
  const [error, setError] = React.useState(false)

  React.useEffect(() => {
    BooksAPI.getAll()
      .then(books => setMyBooks(books))
      .catch(err => {
        console.log(err)
        setState(true)
      })
  }, [myBooks, error])

  React.useEffect(() => {

  }, [searchBooks])

  React.useEffect(() => {

  }, [setSearchBooks, error])


  return (
    <div className="app">
        <Route
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
        />
    </div>
  )
}