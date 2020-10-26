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
                                <Link className="navbar-brand" to="/"> <img src="./assets/images/logo.png" alt="" /></Link>
                                <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbar-classic" aria-controls="navbar-classic" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="icon-bar top-bar mt-0" />
                                    <span className="icon-bar middle-bar" />
                                    <span className="icon-bar bottom-bar" />
                                </button>
                                <div className="collapse navbar-collapse" id="navbar-classic">
                                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0 mr-3">
                                        <li className="nav-item dropdown">
                                            <Link className="nav-link dropdown-toggle" to="/" id="menu-1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Homepage</Link>
                                            <ul className="dropdown-menu" aria-labelledby="menu-1">
                                                <li className="dropdown-item">
                                                    <Link className="dropdown-link" to="/">
                                                        Homepage One</Link>
                                                </li>
                                                <li className="dropdown-item"><Link className="dropdown-link" to="/">
                                                    Homepage Two</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <Link className="nav-link dropdown-toggle" to="#" id="menu-2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Listing</Link>
                                            <ul className="dropdown-menu" aria-labelledby="menu-2">
                                                <li className="dropdown-item">
                                                    <Link className="dropdown-link" to="/listingGridView">Listing List + Grid</Link>
                                                </li>
                                                <li className="dropdown-item">
                                                    <Link className="dropdown-link" to="/listingListView">Listing List View</Link>
                                                </li>
                                                <li className="dropdown-item">
                                                    <Link className="dropdown-link" to="/listingMapView">
                                                        Listing Map View</Link>
                                                </li>
                                                <li className="dropdown-item">
                                                    <Link className="dropdown-link" to="/lisgingWithMap">
                                                        Listing with half Map</Link>
                                                </li>
                                                <li className="dropdown-item"><Link className="dropdown-link" to="/listingLocation">
                                                    Listing Location</Link>
                                                </li>
                                                <li className="dropdown-item"><Link className="dropdown-link" to="/listingCategories">
                                                    Listing Category</Link>
                                                </li>
                                                <li className="dropdown-item"><Link className="dropdown-link" to="/ListingSingle">
                                                    Listing Single</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <Link className="nav-link dropdown-toggle" to="#" id="menu-3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</Link>
                                            <ul className="dropdown-menu" aria-labelledby="menu-3">
                                                <li className="dropdown-item">
                                                    <Link className="dropdown-link" to="/about">
                                                        About us</Link>
                                                </li>
                                                <li className="dropdown-item">
                                                    <Link className="dropdown-link" to="/pricing">
                                                        Pricing</Link>
                                                </li>
                                                <li className="dropdown-item">
                                                    <Link className="dropdown-link" to="/register">
                                                        Register</Link>
                                                </li>
                                                <li className="dropdown-item">
                                                    <Link className="dropdown-link" to="/login">
                                                        Login</Link>
                                                </li>
                                                <li className="dropdown-item">
                                                    <Link className="dropdown-link" to="/inquiryForm">
                                                        Inquiry Form</Link>
                                                </li>
                                                <li className="dropdown-item">
                                                    <Link className="dropdown-link" to="/forgetPassword">
                                                        Forgot Password</Link>
                                                </li>
                                                <li className="dropdown-item">
                                                    <Link className="dropdown-link" to="/resetPassword">
                                                        Reset Password</Link>
                                                </li>
                                                <li className="dropdown-item">
                                                    <Link className="dropdown-link" to="/error">
                                                        404 Error</Link>
                                                </li>
                                                <li className="dropdown-item">
                                                    <Link className="dropdown-link" to="/contact">
                                                        Contact</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <Link className="nav-link dropdown-toggle" to="#" id="menu-4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Blog</Link>
                                            <ul className="dropdown-menu" aria-labelledby="menu-4">
                                                <li className="dropdown-item">
                                                    <Link className="dropdown-link" to="/blog">
                                                        Blog List</Link>
                                                </li>
                                                <li className="dropdown-item">
                                                    <Link className="dropdown-link" to="/blogThumbnail">Blog Thumbnail</Link>
                                                </li>
                                                <li className="dropdown-item">
                                                    <Link className="dropdown-link" to="/blogSingle">Blog Single</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        {/* <li className="nav-item">
                                            <Link className="nav-link" to="./docs/index.html">Docs</Link>
                                        </li> */}
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/dashboardOverview">Dashboard</Link>
                                        </li>
                                    </ul>
                                    <div className="header-btn d-xl-block d-lg-none">
                                        <Link to="/login" className="btn btn-outline-primary" data-toggle="modal" data-target="#loginmodal">Login</Link>
                                        <Link to="/inquiryForm" className="btn btn-primary"><i className="fas fa-plus" />List a space</Link>
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
