import React from 'react'
import Preloader from './components/layout/Preloader'
import Home from './components/pages/Home'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import LoginModal from './components/pages/LoginModal'
import About from './components/pages/About'
import ListingGridView from './components/pages/ListingGridView'
import ListingListView from './components/pages/ListingListView'
import ListingMapView from './components/pages/ListingMapView'
import ListingWithMap from './components/pages/ListingWithMap'
import ListingLocation from './components/pages/ListingLocation'
import ListingCategories from './components/pages/ListingCategories'
import ListingSingle from './components/pages/ListingSingle'
import Priching from './components/pages/Priching'
import RegisterPage from './components/pages/RegisterPage'
import Login from './components/pages/Login'
import InquiryForm from './components/pages/InquiryForm'
import ForgetPassword from './components/pages/ForgetPassword'
import ResetPassword from './components/pages/ResetPassword'
import Error from './components/pages/Error'
import Contact from './components/pages/Contact'
import Blog from './components/pages/Blog'
import BlogSingle from './components/pages/BlogSingle'
import BlogThumbnail from './components/pages/BlogThumbnail'
import DashboardOverview from './components/pages/Dashboard/DashboardOverview'
import DashboardListing from './components/pages/Dashboard/DashboardListing'
import DashboardRequestQuote from './components/pages/Dashboard/DashboardRequestQuote'
import DashboardListingReviews from './components/pages/Dashboard/DashboardListingReviews'
import DashboardInvoice from './components/pages/Dashboard/DashboardInvoice'
import DashboardPricingPlan from './components/pages/Dashboard/DashboardPricingPlan'
import DashboardListingProfile from './components/pages/Dashboard/DashboardListingProfile'
import DashboardAddListing from './components/pages/Dashboard/DashboardAddListing'

const App = () => {
  return (
    <div>
      <Preloader />
      {/* Main Wrapper */}
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/listingGridView' exact component={ListingGridView} />
          <Route path='/listingListView' component={ListingListView} />
          <Route path='/listingMapView' component={ListingMapView} />
          <Route path='/lisgingWithMap' component={ListingWithMap} />
          <Route path='/listingLocation' component={ListingLocation} />
          <Route path='/listingCategories' component={ListingCategories} />
          <Route path='/ListingSingle' component={ListingSingle} />
          <Route path='/pricing' component={Priching} />
          <Route path='/register' component={RegisterPage} />
          <Route path='/login' component={Login} />
          <Route path='/inquiryForm' component={InquiryForm} />
          <Route path='/forgetPassword' component={ForgetPassword} />
          <Route path='/resetPassword' component={ResetPassword} />
          <Route path='/error' component={Error} />
          <Route path='/contact' component={Contact} />
          <Route path='/blog' component={Blog} />
          <Route path='/blogSingle' component={BlogSingle} />
          <Route path='/blogThumbnail' component={BlogThumbnail} />



          <Route path='/dashboardOverview' component={DashboardOverview} />
          <Route path='/dashboardListing' component={DashboardListing} />
          <Route path='/dashboardRequestQuote' component={DashboardRequestQuote} />
          <Route path='/dashboardListingReviews' component={DashboardListingReviews} />
          <Route path='/dashboardInvoice' component={DashboardInvoice} />
          <Route path='/dashboardPricingPlan' component={DashboardPricingPlan} />
          <Route path='/dashboardListingProfile' component={DashboardListingProfile} />
          <Route path='/dashboardAddListing' component={DashboardAddListing} />
        </Switch>
      </BrowserRouter>
      {/* Main Wrapper */}
      <LoginModal />
      {/* Modal */}
    </div>
  )
}

export default App
