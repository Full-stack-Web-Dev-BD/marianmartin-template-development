import React from 'react'
import Navbar from './components/layout/Navbar'
import Preloader from './components/layout/Preloader'
import Home from './components/pages/Home'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import LoginModal from './components/pages/LoginModal'
import About from './components/pages/About'
import ListingGridView from './components/pages/ListingGridView'
import ListingListView from './components/pages/ListingListView'

const App = () => {
  return (
    <div>
      <Preloader/>
      {/* Main Wrapper */}
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/listingGridView' exact component={ListingGridView} />
          <Route path='/listingListView' exact component={ListingListView} />

        </Switch>
      </BrowserRouter>
      {/* Main Wrapper */}
        <LoginModal/>
      {/* Modal */}
    </div>
  )
}

export default App
