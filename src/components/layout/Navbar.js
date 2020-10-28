import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <div className="header-classic">
                {/* navigation start */}
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <nav className="navbar navbar-expand-lg navbar-classic">
                                <a className="navbar-brand" href="/"> <img src="./assets/images/logo.png" alt="" /></a>
                                <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbar-classic" aria-controls="navbar-classic" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="icon-bar top-bar mt-0" />
                                    <span className="icon-bar middle-bar" />
                                    <span className="icon-bar bottom-bar" />
                                </button>
                                <div className="collapse navbar-collapse" id="navbar-classic">
                                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0 mr-3">
                                        {/* <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="/" id="menu-1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Homepage</a>
                                            <ul className="dropdown-menu" aria-labelledby="menu-1">
                                                <li className="dropdown-item">
                                                    <a className="dropdown-link" href="/">
                                                        Homepage One</a>
                                                </li>
                                                <li className="dropdown-item"><a className="dropdown-link" href="/">
                                                    Homepage Two</a>
                                                </li>
                                            </ul>
                                        </li>
                                         */}
                                        <li className="nav-item">
                                            <a className="nav-link" href="/">Homepage</a>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" to="#" id="menu-2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Listing</a>
                                            <ul className="dropdown-menu" aria-labelledby="menu-2">
                                                <li className="dropdown-item">
                                                    <a className="dropdown-link" href="/listingGridView">Listing List + Grid</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a className="dropdown-link" href="/listingListView">Listing List View</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a className="dropdown-link" href="/listingMapView">
                                                        Listing Map View</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a className="dropdown-link" href="/lisgingWithMap">
                                                        Listing with half Map</a>
                                                </li>
                                                <li className="dropdown-item"><a className="dropdown-link" href="/listingLocation">
                                                    Listing Location</a>
                                                </li>
                                                <li className="dropdown-item"><a className="dropdown-link" href="/listingCategories">
                                                    Listing Category</a>
                                                </li>
                                                <li className="dropdown-item"><a className="dropdown-link" href="/ListingSingle">
                                                    Listing Single</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" to="#" id="menu-3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</a>
                                            <ul className="dropdown-menu" aria-labelledby="menu-3">
                                                <li className="dropdown-item">
                                                    <a className="dropdown-link" href="/about">
                                                        About us</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a className="dropdown-link" href="/pricing">
                                                        Pricing</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a className="dropdown-link" href="/register">
                                                        Register</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a className="dropdown-link" href="/login">
                                                        Login</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a className="dropdown-link" href="/inquiryForm">
                                                        Inquiry Form</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a className="dropdown-link" href="/forgetPassword">
                                                        Forgot Password</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a className="dropdown-link" href="/resetPassword">
                                                        Reset Password</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a className="dropdown-link" href="/error">
                                                        404 Error</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a className="dropdown-link" href="/contact">
                                                        Contact</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" to="#" id="menu-4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Blog</a>
                                            <ul className="dropdown-menu" aria-labelledby="menu-4">
                                                <li className="dropdown-item">
                                                    <a className="dropdown-link" href="/blog">
                                                        Blog List</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a className="dropdown-link" href="/blogThumbnail">Blog Thumbnail</a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a className="dropdown-link" href="/blogSingle">Blog Single</a>
                                                </li>
                                            </ul>
                                        </li>
                                        {/* <li className="nav-item">
                                            <a className="nav-link" to="./docs/index.html">Docs</a>
                                        </li> */}
                                        <li className="nav-item">
                                            <a className="nav-link" href="/dashboardOverview">Dashboard</a>
                                        </li>
                                    </ul>
                                    <div className="header-btn d-xl-block d-lg-none">
                                        <a href="/login" className="btn btn-outline-primary" data-toggle="modal" data-target="#loginmodal" style={{marginRight:'10px'}}>Login</a>
                                        <a href="/inquiryForm" className="btn btn-primary"><i className="fas fa-plus" />List a space</a>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
                {/* navigation close */}
            </div>


        </div>
    )
}

export default Navbar
