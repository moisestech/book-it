[![Netlify Status](https://api.netlify.com/api/v1/badges/ed7154ae-3298-48ca-9a2d-568f3091fc35/deploy-status)](https://app.netlify.com/sites/github-battle-js/deploys)

# book-it
BookIt - search from a catalog of books and save choices to various books shelves.
- Currently Reading
- Want to Read
- Read

# Stack
- React v16
- React Hooks
- React Context
- React Router v5
- Functional Components
- ES6 Class Definitions

## Application Tree
```bash
├── CONTRIBUTING.md
├── README.md - # This file.
├── package.json # npm package manager file.
└── app
    ├── components
    │   ├── Books.js #
    │   ├── Bookshelf.js #
    │   ├── BookshelfChanger.js #
    │   ├── ListBooks.js #
    │   ├── SearchBooks.js #
    │   ├── SearchBookInputs.js #
    │   ├── SearchResults.js #
    │   └── index.html #
    ├── hooks
    ├── contexts
    │   └── theme.js #
    ├── utils
    │   ├── BooksAPI.js #
    ├── ├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use BookIT app.
    │   └── data.js #
    ├── icons # icon images.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.html #
    ├── favicon.ico #
    ├── index.css # Global styles.
    └── index.js # Webpack enters to start the main root of our app.
```

## Roadmap
[CSS3 Bookshelf](https://fribly.com/2014/11/17/pure-css3-bookshelf-concept/)

## Npm install
- npm install --save-dev @babel/core @babel/preset-env @babel/preset-react webpack webpack-cli webpack-dev-server babel-loader css-loader style-loader html-webpack-plugin


## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend.

