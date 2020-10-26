import React from 'react'
import { Link } from 'react-router-dom'

const DashboardOverview = () => {
    return (
        <div>
            <div className="db-wrapper">
                <div className="db-header">
                    {/* header start */}
                    {/* navigation start */}
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <nav className="navbar navbar-expand-lg db-navbar">
                                    <div className="db-navbar-brand"><a className="navbar-brand" href="/"> <img src="./assets/images/db-logo.png" alt="" /></a></div>
                                    <div className="db-navbar-toggler"><button className="db-sidenav-toggler navbar-toggler collapsed" type="button" data-toggle="offcanvas" data-target="#db-sidenav" aria-controls="db-sidenav" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="icon-bar top-bar mt-0" />
                                        <span className="icon-bar middle-bar" />
                                        <span className="icon-bar bottom-bar" />
                                    </button>
                                        <button className=" db-header-toggler navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#db-navbar" aria-controls="db-navbar" aria-expanded="false" aria-label="Toggle navigation">
                                            <i className="fas fa-ellipsis-v" />
                                        </button>
                                    </div>
                                    <div className="collapse navbar-collapse" id="db-navbar">
                                        <ul className="navbar-nav ml-auto mt-2 mt-lg-0 mr-3">
                                            <li className="nav-item dropdown dropleft notification">
                                                <a className="nav-link dropdown-toggle" href="#" id="menu-1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i className="fas fa-bell bell-icon" />
                                                    <span className="badge badge-primary">23</span>
                                                </a>
                                                <ul className="dropdown-menu" aria-labelledby="menu-1">
                                                    <span className="with-arrow"><span className /></span>
                                                    <div className="notification-list">
                                                        <li className="dropdown-item">
                                                            <a href="#">
                                                                <p className="dropdown-item-text">You have got a new request quote for your office.</p>
                                                                <p className="dropdown-item-time">1 days ago</p>
                                                            </a>
                                                        </li>
                                                        <li className="dropdown-item">
                                                            <a href="#">
                                                                <p className="dropdown-item-text">Welcome to Spacely! Click here it understand better.</p>
                                                                <p className="dropdown-item-time">23 days ago</p>
                                                            </a>
                                                        </li>
                                                        <li className="dropdown-item">
                                                            <a href="#">
                                                                <p className="dropdown-item-text">You have got a new request quote for your office.</p>
                                                                <p className="dropdown-item-time">1 days ago</p>
                                                            </a>
                                                        </li>
                                                        <li className="dropdown-item">
                                                            <a href="#">
                                                                <p className="dropdown-item-text">Welcome to Spacely! Click here it understand better.</p>
                                                                <p className="dropdown-item-time">23 days ago</p>
                                                            </a>
                                                        </li>
                                                        <li className="dropdown-item">
                                                            <a href="#">
                                                                <p className="dropdown-item-text">You have got a new request quote for your office.</p>
                                                                <p className="dropdown-item-time">1 days ago</p>
                                                            </a>
                                                        </li>
                                                        <li className="dropdown-item">
                                                            <a href="#">
                                                                <p className="dropdown-item-text">Welcome to Spacely! Click here it understand better.</p>
                                                                <p className="dropdown-item-time">23 days ago</p>
                                                            </a>
                                                        </li>
                                                    </div>
                                                    <div className="notification-footer">
                                                        <a href="#" className="notification-footer-show">Show all</a>
                                                        <a href="#" className="notification-footer-mark"> Mark all as read</a>
                                                    </div>
                                                </ul>
                                            </li>
                                            <li className="nav-item dropdown dropleft user">
                                                <span className="with-arrow"><span className /></span>
                                                <a className="nav-link dropdown-toggle" href="#" id="menu-2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <img src="assets/images/avatar-1.jpg" alt="" className="rounded-circle user-profile" />
                                                </a>
                                                <ul className="dropdown-menu" aria-labelledby="menu-2">
                                                    <li className="dropdown-item">
                                                        <a className="dropdown-link" href="/dashboardOverview"><i className="fas fa-fw fa-tachometer-alt" />Dashboard</a>
                                                    </li>
                                                    <li className="dropdown-item">
                                                        <a className="dropdown-link" href="/dashboardListing"><i className="fas fa-fw fa-list" />Listing</a>
                                                    </li>
                                                    <li className="dropdown-item">
                                                        <a className="dropdown-link" href="/dashboardRequestQuote"><i className="fas fa-fw fa-receipt" />Request Quote</a>
                                                    </li>
                                                    <li className="dropdown-item">
                                                        <a className="dropdown-link active" href="/dashboardListingReviews"><i className="fas fa-fw fa-star" />Reviews</a>
                                                    </li>
                                                    <li className="dropdown-item">
                                                        <a className="dropdown-link" href="/dashboardInvoice"><i className="fas fa-fw fa-file-invoice" />Invoice</a>
                                                    </li>
                                                    <li className="dropdown-item">
                                                        <a className="dropdown-link" href="/dashboardPricingPlan"><i className="fas fa-fw fa-gem" />My Plan</a>
                                                    </li>
                                                    <li className="dropdown-item">
                                                        <a className="dropdown-link " href="/dashboardListingProfile"><i className="fas fa-fw fa-user-circle" />Profile</a>
                                                    </li>
                                                    <li className="dropdown-item">
                                                        <a className="dropdown-link" href="/"><i className="fas fa-fw fa-sign-out-alt" />Logout</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                    {/* navigation close */}
                    {/* header close */}
                </div>
                {/* content start */}
                <div className="db-content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-2 col-lg-3 col-md-12 col-sm-12 col-12">
                                <nav className="navbar navbar-expand-lg db-sidenav">
                                    <div className="offcanvas-collapse" id="db-sidenav">
                                        <ul className="nav flex-column">
                                            <li className="nav-item">
                                                <a className="nav-link active" href="/dashboardOverview"><i className="fas fa-fw fa-tachometer-alt" />Dashboard</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="/dashboardListing"><i className="fas fa-fw fa-list" />Listing</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="/dashboardRequestQuote"><i className="fas fa-fw fa-receipt" />Request Quote</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="/dashboardListingReviews"><i className="fas fa-fw fa-star" />Reviews</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="/dashboardInvoice"><i className="fas fa-fw fa-file-invoice" />Invoice</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="/dashboardPricingPlan"><i className="fas fa-fw fa-gem" />My Plan</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="/dashboardListingProfile"><i className="fas fa-fw fa-user-circle" />Profile</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="/"><i className="fas fa-fw fa-sign-out-alt" />Logout</a>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                            <div className="col-xl-10 col-lg-9 col-md-12 col-sm-12 col-12">
                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="db-pageheader">
                                            <h2 className="db-pageheader-title">Dashboard</h2>
                                            <p className="db-pageheader-text"> In commodo lorem ut erat sagittis variusm euismod lectus vehicula cursus est.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="db-card db-overview-widget">
                                            <div className="db-card-body">
                                                <h3 className="db-card-body-title">Listings</h3>
                                                <div className="db-overview-widget-body">
                                                    <h3 className="db-overview-widget-body-label">12</h3>
                                                    <span className="db-overview-widget-body-icon">
                                                        <i className="fas fa-list" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="db-card db-overview-widget">
                                            <div className="db-card-body">
                                                <h3 className="db-card-body-title">Reviews</h3>
                                                <div className="db-overview-widget-body">
                                                    <h3 className="db-overview-widget-body-label">5</h3>
                                                    <span className="db-overview-widget-body-icon">
                                                        <i className="fas fa-star" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="db-card db-overview-widget">
                                            <div className="db-card-body">
                                                <h3 className="db-card-body-title">Request Quote</h3>
                                                <div className="db-overview-widget-body">
                                                    <h3 className="db-overview-widget-body-label">23</h3>
                                                    <span className="db-overview-widget-body-icon">
                                                        <i className="fas fa-file-invoice" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="db-card db-overview-widget">
                                            <div className="db-card-body">
                                                <h3 className="db-card-body-title">Listing Active Plan </h3>
                                                <div className="db-overview-widget-body">
                                                    <h3 className="db-overview-widget-body-label">Free</h3>
                                                    <span className="db-overview-widget-body-icon">
                                                        <i className="fas fa-paper-plane" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-6 col-lg-12 col-md-6 col-sm-12 col-12">
                                        <div className="db-card db-overview-reviews">
                                            <div className="db-card-header">
                                                <h3 className="db-card-header-title">Recent Reviews</h3>
                                            </div>
                                            <div className="db-card-body">
                                                <table className="table table-responsive">
                                                    <tbody>
                                                        <tr>
                                                            <td scope="row">
                                                                <div className="db-overview-reviews-img">
                                                                    <img src="assets/images/avatar-3.jpg" alt="" className="rounded-circle" />
                                                                </div>
                                                            </td>
                                                            <td className="db-overview-reviews-text">Charandeep Sastry</td>
                                                            <td className="db-overview-reviews-text">Listing Title Here</td>
                                                            <td className="db-overview-reviews-text">8 June 2020</td>
                                                            <td>
                                                                <div className="review-content-rating">
                                                                    <span className="star" />
                                                                    <span className="star" />
                                                                    <span className="star" />
                                                                    <span className="star" />
                                                                    <span className="star empty" />
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td scope="row">
                                                                <div className="db-overview-reviews-img">
                                                                    <img src="assets/images/avatar-1.jpg" alt="" className="rounded-circle" />
                                                                </div>
                                                            </td>
                                                            <td className="db-overview-reviews-text">Winona Jaskolski</td>
                                                            <td className="db-overview-reviews-text">Office Listing Here</td>
                                                            <td className="db-overview-reviews-text">12 June 2020</td>
                                                            <td>
                                                                <div className="review-content-rating">
                                                                    <span className="star" />
                                                                    <span className="star" />
                                                                    <span className="star" />
                                                                    <span className="star" />
                                                                    <span className="star empty" />
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td scope="row">
                                                                <div className="db-overview-reviews-img">
                                                                    <img src="assets/images/avatar-2.jpg" alt="" className="rounded-circle" />
                                                                </div>
                                                            </td>
                                                            <td className="db-overview-reviews-text">Jewell Bailey</td>
                                                            <td className="db-overview-reviews-text">Listing Title Here</td>
                                                            <td className="db-overview-reviews-text">30 June 2020</td>
                                                            <td>
                                                                <div className="review-content-rating">
                                                                    <span className="star" />
                                                                    <span className="star" />
                                                                    <span className="star" />
                                                                    <span className="star" />
                                                                    <span className="star empty" />
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <div className="db-card-body-btn">
                                                    <a href="/dashboardListingReviews" className="btn btn-primary btn-sm">See All Reviews</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-12 col-md-6 col-sm-12 col-12">
                                        <div className="db-card db-overview-quote">
                                            <div className="db-card-header">
                                                <h3 className="db-card-header-title">Recent Request Quote</h3>
                                            </div>
                                            <div className="db-card-body">
                                                <table className="table table-responsive">
                                                    <tbody>
                                                        <tr>
                                                            <td className="db-overview-quote-text">Nishtha Rama</td>
                                                            <td className="db-overview-quote-text">nishtharama@gmail.com</td>
                                                            <td className="db-overview-quote-text">12 June 2020</td>
                                                            <td className="db-overview-quote-text">
                                                                010 59303753
                          </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="db-overview-quote-text">Lata Ajeet Dial</td>
                                                            <td className="db-overview-quote-text">lataajeetdial@gmail.com</td>
                                                            <td className="db-overview-quote-text">23 June 2020</td>
                                                            <td className="db-overview-quote-text">
                                                                010 59303850
                          </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="db-overview-quote-text">Akhil Mahadeo</td>
                                                            <td className="db-overview-quote-text">akhilmahadeo@gmail.com</td>
                                                            <td className="db-overview-quote-text">28 June 2020</td>
                                                            <td className="db-overview-quote-text">
                                                                010 59303753
                          </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <div className="db-card-body-btn">
                                                    <a href="/dashboardRequestQuote" className="btn btn-primary btn-sm">See Quotes</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* content close */}
                {/* footer start */}
                <div className="db-footer">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="db-footer-copyright">
                                    <p className="db-footer-copyright-text">2020 &nbsp;©&nbsp; <a href="/"> Spacely</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* footer close */}
            </div>
            {/* ============================================================== */}
            {/* end main wrapper */}
            {/* ============================================================== */}
        </div>

    )
}

export default DashboardOverview
