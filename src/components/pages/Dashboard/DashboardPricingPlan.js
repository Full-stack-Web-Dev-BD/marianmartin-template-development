import React from 'react'

const DashboardPricingPlan = () => {
    return (
        <div>
            <div className="preloader">
                <div className="lds-ripple">
                    <div className="lds-pos" />
                    <div className="lds-pos" />
                </div>
            </div>
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
                                                <a className="nav-link dropdown-toggle" href="#" id="menu-2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <img src="assets/images/avatar-1.jpg" alt="" className="rounded-circle user-profile" />
                                                </a>
                                                <ul className="dropdown-menu" aria-labelledby="menu-2">
                                                    <span className="with-arrow"><span className /></span>
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
                                                        <a className="dropdown-link " href="/dashboardListingReviews"><i className="fas fa-fw fa-star" />Reviews</a>
                                                    </li>
                                                    <li className="dropdown-item">
                                                        <a className="dropdown-link" href="/dashboardInvoice"><i className="fas fa-fw fa-file-invoice" />Invoice</a>
                                                    </li>
                                                    <li className="dropdown-item">
                                                        <a className="dropdown-link active" href="/dashboardPricingPlan"><i className="fas fa-fw fa-gem" />My Plan</a>
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
                                                <a className="nav-link" href="/dashboardOverview"><i className="fas fa-fw fa-tachometer-alt" />Dashboard</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link " href="/dashboardListing"><i className="fas fa-fw fa-list" />Listing</a>
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
                                                <a className="nav-link active" href="/dashboardPricingPlan"><i className="fas fa-fw fa-gem" />My Plan</a>
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
                                            <h2 className="db-pageheader-title">Pricing Plan</h2>
                                            <p className="db-pageheader-text"> In commodo lorem ut erat sagittis variusm euismod lectus vehicula cursus est.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                        <div className="pricing-block bg-white">
                                            <div className="pricing-active-plan">Active plan</div>
                                            <div className="pricing-head">
                                                <div className="pricing-head-icon">
                                                    <img src="./assets/images/pricing-icon-1.png" alt="" />
                                                </div>
                                                <div className="pricing-head-price">
                                                    <h3 className="pricing-head-lable">Basic</h3>
                                                    <p className="pricing-head-value"><sup className="dolor-sign">$</sup>0</p>
                                                </div>
                                                <div className="pricing-btn"><a href="#" className="btn btn-outline-primary disabled" data-toggle="modal" data-target="#exampleModal">Try it now</a></div>
                                                <div className="pricing-content">
                                                    <ul className="pricing-content-list">
                                                        <li>1 Listing Upload</li>
                                                        <li>2 Gallery Photo</li>
                                                        <li>No Video</li>
                                                        <li>No Featured Listing</li>
                                                        <li>Email Support</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                        <div className="pricing-block pricing-block-selected bg-white">
                                            <div className="pricing-badge">Popluar</div>
                                            <div className="pricing-head">
                                                <div className="pricing-head-icon">
                                                    <img src="./assets/images/pricing-icon-2.png" alt="" />
                                                </div>
                                                <div className="pricing-head-price">
                                                    <h3 className="pricing-head-lable">Professional</h3>
                                                    <p className="pricing-head-value"><sup className="dolor-sign">$</sup>20</p>
                                                </div>
                                                <div className="pricing-btn"><a href="#" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Select this plan</a></div>
                                                <div className="pricing-content">
                                                    <ul className="pricing-content-list">
                                                        <li>3 Listing Upload</li>
                                                        <li>6 Gallery Photo</li>
                                                        <li>Yes Video</li>
                                                        <li>1 Featured Listing</li>
                                                        <li>24x7 Email Support</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                        <div className="pricing-block bg-white">
                                            <div className="pricing-head">
                                                <div className="pricing-head-icon">
                                                    <img src="./assets/images/pricing-icon-3.png" alt="" />
                                                </div>
                                                <div className="pricing-head-price">
                                                    <h3 className="pricing-head-lable">Advance</h3>
                                                    <p className="pricing-head-value"><sup className="dolor-sign">$</sup>60</p>
                                                </div>
                                                <div className="pricing-btn"><a href="#" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Select this plan</a></div>
                                                <div className="pricing-content">
                                                    <ul className="pricing-content-list">
                                                        <li>8 Listing Upload</li>
                                                        <li>16 Gallery Photo</li>
                                                        <li>Yes Video</li>
                                                        <li>2 Featured Listing</li>
                                                        <li>Priority Email</li>
                                                    </ul>
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
                {/* footer start */}
            </div>
            {/* Modal */}
            <div className="modal payment-gatway fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-body ">
                            <h4 className="heading-title">Choose your payment method</h4>
                            <form>
                                <div className="form-row ">
                                    <div className="col-md-4"><input id="test0" name="same-group-name" type="radio" /><label htmlFor="test0">
                                        <div className="image"><img src="assets/images/paypal-logo.png" alt="" /></div>
                                    </label>
                                    </div>
                                    <div className="col-md-4"><input id="test1" name="same-group-name" type="radio" /><label htmlFor="test1">
                                        <div className="image"><img src="assets/images/stripe-logo.png" alt="" /></div>
                                    </label>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer stock-images">
                            <a href="#" className="close btn btn-primary" data-dismiss="modal" aria-label="Close">
                                Close
          </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* ============================================================== */}
            {/* end main wrapper */}
            {/* ============================================================== */}
        </div>

    )
}

export default DashboardPricingPlan
