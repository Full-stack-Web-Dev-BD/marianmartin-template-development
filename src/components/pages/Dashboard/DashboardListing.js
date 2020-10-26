import React from 'react'

const DashboardListing = () => {
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
                                <nav className="navbar db-sidenav">
                                    <div className="offcanvas-collapse" id="db-sidenav">
                                        <ul className="nav flex-column">
                                            <li className="nav-item">
                                                <a className="nav-link" href="/dashboardOverview"><i className="fas fa-fw fa-tachometer-alt" />Dashboard</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link active" href="/dashboardListing"><i className="fas fa-fw fa-list" />Listing</a>
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
                                        <div className="db-pageheader d-xl-flex justify-content-between">
                                            <div className>
                                                <h2 className="db-pageheader-title">Listing Management</h2>
                                                <p className="db-pageheader-text"> Manage your office space listing in one single dashboard. Its has features Pending, Approved and Removed listing.</p>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <a href="/dashboardAddListing" className="btn btn-primary"> Add new listing</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="card-lines-tab">
                                            <ul className="nav nav-pills card-lines-tab-header" id="pills-tab" role="tablist">
                                                <li className="nav-item">
                                                    <a className="nav-link active" id="pills-listing-tab" data-toggle="pill" href="#pills-listing" role="tab" aria-controls="pills-listing" aria-selected="true">All Listing</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" id="pills-pending-tab" data-toggle="pill" href="#pills-pending" role="tab" aria-controls="pills-pending" aria-selected="false">Pending</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" id="pills-approved-tab" data-toggle="pill" href="#pills-approved" role="tab" aria-controls="pills-approved" aria-selected="false">Approved</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" id="pills-removed-tab" data-toggle="pill" href="#pills-removed" role="tab" aria-controls="pills-removed" aria-selected="false">Removed</a>
                                                </li>
                                            </ul>
                                            <div className="tab-content card-listing-tab-body" id="pills-tabContent">
                                                <div className="tab-pane fade show active" id="pills-listing" role="tabpanel" aria-labelledby="pills-listing-tab">
                                                    <div className="table-responsive listing-table">
                                                        <table className="table first">
                                                            <thead>
                                                                <tr>
                                                                    <th>Image</th>
                                                                    <th>Title</th>
                                                                    <th>Date</th>
                                                                    <th>Reviews</th>
                                                                    <th>Request Quote</th>
                                                                    <th>Status</th>
                                                                    <th data-orderable="false">Action</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <div className="listing-table-img"><a href="#">
                                                                            <img src="assets/images/db-listing-img-1.jpg" /></a>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-head">
                                                                            <h4 className="listing-table-head-title"><a href="#" className="anchor-title">Heading Title Office Space Title</a></h4>
                                                                            <p className="listing-table-head-text">Ahmedabad, Gujarat, India</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-date">
                                                                            <p>19 June, 2019</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-review" />
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-quote" />
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-status">
                                                                            <span className="badge badge-warning">Pending</span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-action">
                                                                            <div className="dropdown">
                                                                                <a href="#" className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                    <i className="fas fa-ellipsis-v" />
                                                                                </a>
                                                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                                    <a className="dropdown-item" href="#">Edit Details</a>
                                                                                    <a className="dropdown-item" href="#">Delete</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="listing-table-img"><a href="#">
                                                                            <img src="assets/images/db-listing-img-2.jpg" /></a>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-head">
                                                                            <h4 className="listing-table-head-title"><a href="#" className="anchor-title">Heading Title Office Space Title</a></h4>
                                                                            <p className="listing-table-head-text">Ahmedabad, Gujarat, India</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-date">
                                                                            <p>19 June, 2019</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-review">2</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-quote">3</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-status">
                                                                            <span className="badge badge-success">Approved</span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-action">
                                                                            <div className="dropdown">
                                                                                <a href="#" className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                    <i className="fas fa-ellipsis-v" />
                                                                                </a>
                                                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                                    <a className="dropdown-item" href="#">Edit Details</a>
                                                                                    <a className="dropdown-item" href="#">Delete</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="listing-table-img"><a href="#">
                                                                            <img src="assets/images/db-listing-img-3.jpg" /></a>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-head">
                                                                            <h4 className="listing-table-head-title"><a href="#" className="anchor-title">Heading Title Office Space Title</a></h4>
                                                                            <p className="listing-table-head-text">Ahmedabad, Gujarat, India</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-date">
                                                                            <p>19 June, 2019</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-review">2</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-quote">3</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-status">
                                                                            <span className="badge badge-success">Approved</span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-action">
                                                                            <div className="dropdown">
                                                                                <a href="#" className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                    <i className="fas fa-ellipsis-v" />
                                                                                </a>
                                                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                                    <a className="dropdown-item" href="#">Edit Details</a>
                                                                                    <a className="dropdown-item" href="#">Delete</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="listing-table-img"><a href="#">
                                                                            <img src="assets/images/db-listing-img-2.jpg" /></a>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-head">
                                                                            <h4 className="listing-table-head-title"><a href="#" className="anchor-title">Heading Title Office Space Title</a></h4>
                                                                            <p className="listing-table-head-text">Ahmedabad, Gujarat, India</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-date">
                                                                            <p>19 June, 2019</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-review" />
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-quote" />
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-status">
                                                                            <span className="badge badge-danger">Removed</span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-action">
                                                                            <div className="dropdown">
                                                                                <a href="#" className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                    <i className="fas fa-ellipsis-v" />
                                                                                </a>
                                                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                                    <a className="dropdown-item" href="#">Edit Details</a>
                                                                                    <a className="dropdown-item" href="#">Delete</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="listing-table-img"><a href="#">
                                                                            <img src="assets/images/db-listing-img-3.jpg" /></a>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-head">
                                                                            <h4 className="listing-table-head-title"><a href="#" className="anchor-title">Heading Title Office Space Title</a></h4>
                                                                            <p className="listing-table-head-text">Ahmedabad, Gujarat, India</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-date">
                                                                            <p>19 June, 2019</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-review">2</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-quote">3</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-status">
                                                                            <span className="badge badge-success">Approved</span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-action">
                                                                            <div className="dropdown">
                                                                                <a href="#" className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                    <i className="fas fa-ellipsis-v" />
                                                                                </a>
                                                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                                    <a className="dropdown-item" href="#">Edit Details</a>
                                                                                    <a className="dropdown-item" href="#">Delete</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="listing-table-img"><a href="#">
                                                                            <img src="assets/images/db-listing-img-1.jpg" /></a>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-head">
                                                                            <h4 className="listing-table-head-title"><a href="#" className="anchor-title">Heading Title Office Space Title</a></h4>
                                                                            <p className="listing-table-head-text">Ahmedabad, Gujarat, India</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-date">
                                                                            <p>19 June, 2019</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-review">2</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-quote">3</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-status">
                                                                            <span className="badge badge-success">Approved</span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-action">
                                                                            <div className="dropdown">
                                                                                <a href="#" className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                    <i className="fas fa-ellipsis-v" />
                                                                                </a>
                                                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                                    <a className="dropdown-item" href="#">Edit Details</a>
                                                                                    <a className="dropdown-item" href="#">Delete</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="listing-table-img"><a href="#">
                                                                            <img src="assets/images/db-listing-img-2.jpg" /></a>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-head">
                                                                            <h4 className="listing-table-head-title"><a href="#" className="anchor-title">Heading Title Office Space Title</a></h4>
                                                                            <p className="listing-table-head-text">Ahmedabad, Gujarat, India</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-date">
                                                                            <p>19 June, 2019</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-review">2</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-quote">3</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-status">
                                                                            <span className="badge badge-danger">Removed</span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-action">
                                                                            <div className="dropdown">
                                                                                <a href="#" className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                    <i className="fas fa-ellipsis-v" />
                                                                                </a>
                                                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                                    <a className="dropdown-item" href="#">Edit Details</a>
                                                                                    <a className="dropdown-item" href="#">Delete</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="listing-table-img"><a href="#">
                                                                            <img src="assets/images/db-listing-img-3.jpg" /></a>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-head">
                                                                            <h4 className="listing-table-head-title"><a href="#" className="anchor-title">Heading Title Office Space Title</a></h4>
                                                                            <p className="listing-table-head-text">Ahmedabad, Gujarat, India</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-date">
                                                                            <p>19 June, 2019</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-review">2</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-quote">3</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-status">
                                                                            <span className="badge badge-success">Approved</span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-action">
                                                                            <div className="dropdown">
                                                                                <a href="#" className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                    <i className="fas fa-ellipsis-v" />
                                                                                </a>
                                                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                                    <a className="dropdown-item" href="#">Edit Details</a>
                                                                                    <a className="dropdown-item" href="#">Delete</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="listing-table-img"><a href="#">
                                                                            <img src="assets/images/db-listing-img-2.jpg" /></a>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-head">
                                                                            <h4 className="listing-table-head-title"><a href="#" className="anchor-title">Heading Title Office Space Title</a></h4>
                                                                            <p className="listing-table-head-text">Ahmedabad, Gujarat, India</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-date">
                                                                            <p>19 June, 2019</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-review">2</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-quote">3</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-status">
                                                                            <span className="badge badge-warning">pending</span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-action">
                                                                            <div className="dropdown">
                                                                                <a href="#" className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                    <i className="fas fa-ellipsis-v" />
                                                                                </a>
                                                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                                    <a className="dropdown-item" href="#">Edit Details</a>
                                                                                    <a className="dropdown-item" href="#">Delete</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="listing-table-img"><a href="#">
                                                                            <img src="assets/images/db-listing-img-1.jpg" /></a>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-head">
                                                                            <h4 className="listing-table-head-title"><a href="#" className="anchor-title">Heading Title Office Space Title</a></h4>
                                                                            <p className="listing-table-head-text">Ahmedabad, Gujarat, India</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-date">
                                                                            <p>19 June, 2019</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-review">2</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-quote">3</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-status">
                                                                            <span className="badge badge-success">Approved</span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-action">
                                                                            <div className="dropdown">
                                                                                <a href="#" className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                    <i className="fas fa-ellipsis-v" />
                                                                                </a>
                                                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                                    <a className="dropdown-item" href="#">Edit Details</a>
                                                                                    <a className="dropdown-item" href="#">Delete</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="listing-table-img"><a href="#">
                                                                            <img src="assets/images/db-listing-img-3.jpg" /></a>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-head">
                                                                            <h4 className="listing-table-head-title"><a href="#" className="anchor-title">Heading Title Office Space Title</a></h4>
                                                                            <p className="listing-table-head-text">Ahmedabad, Gujarat, India</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-date">
                                                                            <p>19 June, 2019</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-review">2</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-quote">3</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-status">
                                                                            <span className="badge badge-success">Approved</span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-action">
                                                                            <div className="dropdown">
                                                                                <a href="#" className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                    <i className="fas fa-ellipsis-v" />
                                                                                </a>
                                                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                                    <a className="dropdown-item" href="#">Edit Details</a>
                                                                                    <a className="dropdown-item" href="#">Delete</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="listing-table-img"><a href="#">
                                                                            <img src="assets/images/db-listing-img-2.jpg" /></a>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-head">
                                                                            <h4 className="listing-table-head-title"><a href="#" className="anchor-title">Heading Title Office Space Title</a></h4>
                                                                            <p className="listing-table-head-text">Ahmedabad, Gujarat, India</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-date">
                                                                            <p>19 June, 2019</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-review">2</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-quote">3</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-status">
                                                                            <span className="badge badge-success">Approved</span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-action">
                                                                            <div className="dropdown">
                                                                                <a href="#" className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                    <i className="fas fa-ellipsis-v" />
                                                                                </a>
                                                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                                    <a className="dropdown-item" href="#">Edit Details</a>
                                                                                    <a className="dropdown-item" href="#">Delete</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="listing-table-img"><a href="#">
                                                                            <img src="assets/images/db-listing-img-1.jpg" /></a>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-head">
                                                                            <h4 className="listing-table-head-title"><a href="#" className="anchor-title">Heading Title Office Space Title</a></h4>
                                                                            <p className="listing-table-head-text">Ahmedabad, Gujarat, India</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-date">
                                                                            <p>19 June, 2019</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-review">2</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-quote">3</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-status">
                                                                            <span className="badge badge-success">Approved</span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-action">
                                                                            <div className="dropdown">
                                                                                <a href="#" className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                    <i className="fas fa-ellipsis-v" />
                                                                                </a>
                                                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                                    <a className="dropdown-item" href="#">Edit Details</a>
                                                                                    <a className="dropdown-item" href="#">Delete</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="pills-pending" role="tabpanel" aria-labelledby="pills-pending-tab">
                                                    <div className="table-responsive listing-table">
                                                        <table className="table first">
                                                            <thead>
                                                                <tr>
                                                                    <th>Image</th>
                                                                    <th>Title</th>
                                                                    <th>Date</th>
                                                                    <th>Reviews</th>
                                                                    <th>Request Quote</th>
                                                                    <th>Status</th>
                                                                    <th data-orderable="false">Action</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <div className="listing-table-img"><a href="#">
                                                                            <img src="assets/images/db-listing-img-1.jpg" /></a>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-head">
                                                                            <h4 className="listing-table-head-title"><a href="#" className="anchor-title">Heading Title Office Space Title</a></h4>
                                                                            <p className="listing-table-head-text">Ahmedabad, Gujarat, India</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-date">
                                                                            <p>19 June, 2019</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-review" />
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-quote" />
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-status">
                                                                            <span className="badge badge-warning">Pending</span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-action">
                                                                            <div className="dropdown">
                                                                                <a href="#" className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                    <i className="fas fa-ellipsis-v" />
                                                                                </a>
                                                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                                    <a className="dropdown-item" href="#">Edit Details</a>
                                                                                    <a className="dropdown-item" href="#">Delete</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="listing-table-img"><a href="#">
                                                                            <img src="assets/images/db-listing-img-2.jpg" /></a>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-head">
                                                                            <h4 className="listing-table-head-title"><a href="#" className="anchor-title">Heading Title Office Space Title</a></h4>
                                                                            <p className="listing-table-head-text">Ahmedabad, Gujarat, India</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-date">
                                                                            <p>19 June, 2019</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-review">2</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-quote">3</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-status">
                                                                            <span className="badge badge-warning">pending</span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-action">
                                                                            <div className="dropdown">
                                                                                <a href="#" className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                    <i className="fas fa-ellipsis-v" />
                                                                                </a>
                                                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                                    <a className="dropdown-item" href="#">Edit Details</a>
                                                                                    <a className="dropdown-item" href="#">Delete</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="listing-table-img"><a href="#">
                                                                            <img src="assets/images/db-listing-img-3.jpg" /></a>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-head">
                                                                            <h4 className="listing-table-head-title"><a href="#" className="anchor-title">Heading Title Office Space Title</a></h4>
                                                                            <p className="listing-table-head-text">Ahmedabad, Gujarat, India</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-date">
                                                                            <p>19 June, 2019</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-review">2</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-quote">3</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-status">
                                                                            <span className="badge badge-warning">pending</span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-action">
                                                                            <div className="dropdown">
                                                                                <a href="#" className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                    <i className="fas fa-ellipsis-v" />
                                                                                </a>
                                                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                                    <a className="dropdown-item" href="#">Edit Details</a>
                                                                                    <a className="dropdown-item" href="#">Delete</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="listing-table-img"><a href="#">
                                                                            <img src="assets/images/db-listing-img-2.jpg" /></a>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-head">
                                                                            <h4 className="listing-table-head-title"><a href="#" className="anchor-title">Heading Title Office Space Title</a></h4>
                                                                            <p className="listing-table-head-text">Ahmedabad, Gujarat, India</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-date">
                                                                            <p>19 June, 2019</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-review" />
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-quote" />
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-status">
                                                                            <span className="badge badge-warning">pending</span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-action">
                                                                            <div className="dropdown">
                                                                                <a href="#" className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                    <i className="fas fa-ellipsis-v" />
                                                                                </a>
                                                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                                    <a className="dropdown-item" href="#">Edit Details</a>
                                                                                    <a className="dropdown-item" href="#">Delete</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="listing-table-img"><a href="#">
                                                                            <img src="assets/images/db-listing-img-3.jpg" /></a>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-head">
                                                                            <h4 className="listing-table-head-title"><a href="#" className="anchor-title">Heading Title Office Space Title</a></h4>
                                                                            <p className="listing-table-head-text">Ahmedabad, Gujarat, India</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-date">
                                                                            <p>19 June, 2019</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-review">2</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-quote">3</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-status">
                                                                            <span className="badge badge-warning">pending</span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-action">
                                                                            <div className="dropdown">
                                                                                <a href="#" className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                    <i className="fas fa-ellipsis-v" />
                                                                                </a>
                                                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                                    <a className="dropdown-item" href="#">Edit Details</a>
                                                                                    <a className="dropdown-item" href="#">Delete</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="listing-table-img"><a href="#">
                                                                            <img src="assets/images/db-listing-img-1.jpg" /></a>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-head">
                                                                            <h4 className="listing-table-head-title"><a href="#" className="anchor-title">Heading Title Office Space Title</a></h4>
                                                                            <p className="listing-table-head-text">Ahmedabad, Gujarat, India</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-date">
                                                                            <p>19 June, 2019</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-review">2</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-quote">3</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-status">
                                                                            <span className="badge badge-warning">pending</span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-action">
                                                                            <div className="dropdown">
                                                                                <a href="#" className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                    <i className="fas fa-ellipsis-v" />
                                                                                </a>
                                                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                                    <a className="dropdown-item" href="#">Edit Details</a>
                                                                                    <a className="dropdown-item" href="#">Delete</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="listing-table-img"><a href="#">
                                                                            <img src="assets/images/db-listing-img-2.jpg" /></a>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-head">
                                                                            <h4 className="listing-table-head-title"><a href="#" className="anchor-title">Heading Title Office Space Title</a></h4>
                                                                            <p className="listing-table-head-text">Ahmedabad, Gujarat, India</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-date">
                                                                            <p>19 June, 2019</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-review">2</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-quote">3</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-status">
                                                                            <span className="badge badge-warning">pending</span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-action">
                                                                            <div className="dropdown">
                                                                                <a href="#" className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                    <i className="fas fa-ellipsis-v" />
                                                                                </a>
                                                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                                    <a className="dropdown-item" href="#">Edit Details</a>
                                                                                    <a className="dropdown-item" href="#">Delete</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="listing-table-img"><a href="#">
                                                                            <img src="assets/images/db-listing-img-3.jpg" /></a>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-head">
                                                                            <h4 className="listing-table-head-title"><a href="#" className="anchor-title">Heading Title Office Space Title</a></h4>
                                                                            <p className="listing-table-head-text">Ahmedabad, Gujarat, India</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-date">
                                                                            <p>19 June, 2019</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-review">2</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-quote">3</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-status">
                                                                            <span className="badge badge-warning">pending</span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-action">
                                                                            <div className="dropdown">
                                                                                <a href="#" className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                    <i className="fas fa-ellipsis-v" />
                                                                                </a>
                                                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                                    <a className="dropdown-item" href="#">Edit Details</a>
                                                                                    <a className="dropdown-item" href="#">Delete</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="listing-table-img"><a href="#">
                                                                            <img src="assets/images/db-listing-img-2.jpg" /></a>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-head">
                                                                            <h4 className="listing-table-head-title"><a href="#" className="anchor-title">Heading Title Office Space Title</a></h4>
                                                                            <p className="listing-table-head-text">Ahmedabad, Gujarat, India</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-date">
                                                                            <p>19 June, 2019</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-review">2</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-quote">3</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-status">
                                                                            <span className="badge badge-warning">pending</span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-action">
                                                                            <div className="dropdown">
                                                                                <a href="#" className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                    <i className="fas fa-ellipsis-v" />
                                                                                </a>
                                                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                                    <a className="dropdown-item" href="#">Edit Details</a>
                                                                                    <a className="dropdown-item" href="#">Delete</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="listing-table-img"><a href="#">
                                                                            <img src="assets/images/db-listing-img-1.jpg" /></a>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-head">
                                                                            <h4 className="listing-table-head-title"><a href="#" className="anchor-title">Heading Title Office Space Title</a></h4>
                                                                            <p className="listing-table-head-text">Ahmedabad, Gujarat, India</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-date">
                                                                            <p>19 June, 2019</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-review">2</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-quote">3</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-status">
                                                                            <span className="badge badge-warning">pending</span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-action">
                                                                            <div className="dropdown">
                                                                                <a href="#" className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                    <i className="fas fa-ellipsis-v" />
                                                                                </a>
                                                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                                    <a className="dropdown-item" href="#">Edit Details</a>
                                                                                    <a className="dropdown-item" href="#">Delete</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="listing-table-img"><a href="#">
                                                                            <img src="assets/images/db-listing-img-3.jpg" /></a>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-head">
                                                                            <h4 className="listing-table-head-title"><a href="#" className="anchor-title">Heading Title Office Space Title</a></h4>
                                                                            <p className="listing-table-head-text">Ahmedabad, Gujarat, India</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-date">
                                                                            <p>19 June, 2019</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-review">2</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-quote">3</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-status">
                                                                            <span className="badge badge-warning">pending</span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-action">
                                                                            <div className="dropdown">
                                                                                <a href="#" className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                    <i className="fas fa-ellipsis-v" />
                                                                                </a>
                                                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                                    <a className="dropdown-item" href="#">Edit Details</a>
                                                                                    <a className="dropdown-item" href="#">Delete</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="listing-table-img"><a href="#">
                                                                            <img src="assets/images/db-listing-img-2.jpg" /></a>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-head">
                                                                            <h4 className="listing-table-head-title"><a href="#" className="anchor-title">Heading Title Office Space Title</a></h4>
                                                                            <p className="listing-table-head-text">Ahmedabad, Gujarat, India</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-date">
                                                                            <p>19 June, 2019</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-review">2</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-quote">3</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-status">
                                                                            <span className="badge badge-warning">pending</span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-action">
                                                                            <div className="dropdown">
                                                                                <a href="#" className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                    <i className="fas fa-ellipsis-v" />
                                                                                </a>
                                                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                                    <a className="dropdown-item" href="#">Edit Details</a>
                                                                                    <a className="dropdown-item" href="#">Delete</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="listing-table-img"><a href="#">
                                                                            <img src="assets/images/db-listing-img-1.jpg" /></a>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-head">
                                                                            <h4 className="listing-table-head-title"><a href="#" className="anchor-title">Heading Title Office Space Title</a></h4>
                                                                            <p className="listing-table-head-text">Ahmedabad, Gujarat, India</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-date">
                                                                            <p>19 June, 2019</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-review">2</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-quote">3</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-status">
                                                                            <span className="badge badge-warning">pending</span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-action">
                                                                            <div className="dropdown">
                                                                                <a href="#" className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                    <i className="fas fa-ellipsis-v" />
                                                                                </a>
                                                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                                    <a className="dropdown-item" href="#">Edit Details</a>
                                                                                    <a className="dropdown-item" href="#">Delete</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="pills-approved" role="tabpanel" aria-labelledby="pills-approved-tab">
                                                    <div className="table-responsive listing-table">
                                                        <table className="table first">
                                                            <thead>
                                                                <tr>
                                                                    <th>Image</th>
                                                                    <th>Title</th>
                                                                    <th>Date</th>
                                                                    <th>Reviews</th>
                                                                    <th>Request Quote</th>
                                                                    <th>Status</th>
                                                                    <th data-orderable="false">Action</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <div className="listing-table-img"><a href="#">
                                                                            <img src="assets/images/db-listing-img-1.jpg" /></a>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-head">
                                                                            <h4 className="listing-table-head-title"><a href="#" className="anchor-title">Heading Title Office Space Title</a></h4>
                                                                            <p className="listing-table-head-text">Ahmedabad, Gujarat, India</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-date">
                                                                            <p>19 June, 2019</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-review" />
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-quote" />
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-status">
                                                                            <span className="badge badge-success">Approved</span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-action">
                                                                            <div className="dropdown">
                                                                                <a href="#" className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                    <i className="fas fa-ellipsis-v" />
                                                                                </a>
                                                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                                    <a className="dropdown-item" href="#">Edit Details</a>
                                                                                    <a className="dropdown-item" href="#">Delete</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="listing-table-img"><a href="#">
                                                                            <img src="assets/images/db-listing-img-2.jpg" /></a>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-head">
                                                                            <h4 className="listing-table-head-title"><a href="#" className="anchor-title">Heading Title Office Space Title</a></h4>
                                                                            <p className="listing-table-head-text">Ahmedabad, Gujarat, India</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-date">
                                                                            <p>19 June, 2019</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-review">2</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-quote">3</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-status">
                                                                            <span className="badge badge-success">Approved</span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-action">
                                                                            <div className="dropdown">
                                                                                <a href="#" className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                    <i className="fas fa-ellipsis-v" />
                                                                                </a>
                                                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                                    <a className="dropdown-item" href="#">Edit Details</a>
                                                                                    <a className="dropdown-item" href="#">Delete</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="listing-table-img"><a href="#">
                                                                            <img src="assets/images/db-listing-img-3.jpg" /></a>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-head">
                                                                            <h4 className="listing-table-head-title"><a href="#" className="anchor-title">Heading Title Office Space Title</a></h4>
                                                                            <p className="listing-table-head-text">Ahmedabad, Gujarat, India</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-date">
                                                                            <p>19 June, 2019</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-review">2</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-quote">3</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-status">
                                                                            <span className="badge badge-success">Approved</span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-action">
                                                                            <div className="dropdown">
                                                                                <a href="#" className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                    <i className="fas fa-ellipsis-v" />
                                                                                </a>
                                                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                                    <a className="dropdown-item" href="#">Edit Details</a>
                                                                                    <a className="dropdown-item" href="#">Delete</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="listing-table-img"><a href="#">
                                                                            <img src="assets/images/db-listing-img-2.jpg" /></a>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-head">
                                                                            <h4 className="listing-table-head-title"><a href="#" className="anchor-title">Heading Title Office Space Title</a></h4>
                                                                            <p className="listing-table-head-text">Ahmedabad, Gujarat, India</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-date">
                                                                            <p>19 June, 2019</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-review" />
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-quote" />
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-status">
                                                                            <span className="badge badge-success">Approved</span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-action">
                                                                            <div className="dropdown">
                                                                                <a href="#" className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                    <i className="fas fa-ellipsis-v" />
                                                                                </a>
                                                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                                    <a className="dropdown-item" href="#">Edit Details</a>
                                                                                    <a className="dropdown-item" href="#">Delete</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="listing-table-img"><a href="#">
                                                                            <img src="assets/images/db-listing-img-3.jpg" /></a>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-head">
                                                                            <h4 className="listing-table-head-title"><a href="#" className="anchor-title">Heading Title Office Space Title</a></h4>
                                                                            <p className="listing-table-head-text">Ahmedabad, Gujarat, India</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-date">
                                                                            <p>19 June, 2019</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-review">2</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-quote">3</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-status">
                                                                            <span className="badge badge-success">Approved</span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-action">
                                                                            <div className="dropdown">
                                                                                <a href="#" className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                    <i className="fas fa-ellipsis-v" />
                                                                                </a>
                                                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                                    <a className="dropdown-item" href="#">Edit Details</a>
                                                                                    <a className="dropdown-item" href="#">Delete</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="listing-table-img"><a href="#">
                                                                            <img src="assets/images/db-listing-img-1.jpg" /></a>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-head">
                                                                            <h4 className="listing-table-head-title"><a href="#" className="anchor-title">Heading Title Office Space Title</a></h4>
                                                                            <p className="listing-table-head-text">Ahmedabad, Gujarat, India</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-date">
                                                                            <p>19 June, 2019</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-review">2</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-quote">3</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-status">
                                                                            <span className="badge badge-success">Approved</span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-action">
                                                                            <div className="dropdown">
                                                                                <a href="#" className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                    <i className="fas fa-ellipsis-v" />
                                                                                </a>
                                                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                                    <a className="dropdown-item" href="#">Edit Details</a>
                                                                                    <a className="dropdown-item" href="#">Delete</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="listing-table-img"><a href="#">
                                                                            <img src="assets/images/db-listing-img-2.jpg" /></a>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-head">
                                                                            <h4 className="listing-table-head-title"><a href="#" className="anchor-title">Heading Title Office Space Title</a></h4>
                                                                            <p className="listing-table-head-text">Ahmedabad, Gujarat, India</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-date">
                                                                            <p>19 June, 2019</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-review">2</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-quote">3</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-status">
                                                                            <span className="badge badge-success">Approved</span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-action">
                                                                            <div className="dropdown">
                                                                                <a href="#" className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                    <i className="fas fa-ellipsis-v" />
                                                                                </a>
                                                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                                    <a className="dropdown-item" href="#">Edit Details</a>
                                                                                    <a className="dropdown-item" href="#">Delete</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="listing-table-img"><a href="#">
                                                                            <img src="assets/images/db-listing-img-3.jpg" /></a>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-head">
                                                                            <h4 className="listing-table-head-title"><a href="#" className="anchor-title">Heading Title Office Space Title</a></h4>
                                                                            <p className="listing-table-head-text">Ahmedabad, Gujarat, India</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-date">
                                                                            <p>19 June, 2019</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-review">2</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-quote">3</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-status">
                                                                            <span className="badge badge-success">Approved</span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-action">
                                                                            <div className="dropdown">
                                                                                <a href="#" className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                    <i className="fas fa-ellipsis-v" />
                                                                                </a>
                                                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                                    <a className="dropdown-item" href="#">Edit Details</a>
                                                                                    <a className="dropdown-item" href="#">Delete</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="listing-table-img"><a href="#">
                                                                            <img src="assets/images/db-listing-img-2.jpg" /></a>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-head">
                                                                            <h4 className="listing-table-head-title"><a href="#" className="anchor-title">Heading Title Office Space Title</a></h4>
                                                                            <p className="listing-table-head-text">Ahmedabad, Gujarat, India</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-date">
                                                                            <p>19 June, 2019</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-review">2</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-quote">3</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-status">
                                                                            <span className="badge badge-success">Approved</span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-action">
                                                                            <div className="dropdown">
                                                                                <a href="#" className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                    <i className="fas fa-ellipsis-v" />
                                                                                </a>
                                                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                                    <a className="dropdown-item" href="#">Edit Details</a>
                                                                                    <a className="dropdown-item" href="#">Delete</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="listing-table-img"><a href="#">
                                                                            <img src="assets/images/db-listing-img-1.jpg" /></a>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-head">
                                                                            <h4 className="listing-table-head-title"><a href="#" className="anchor-title">Heading Title Office Space Title</a></h4>
                                                                            <p className="listing-table-head-text">Ahmedabad, Gujarat, India</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-date">
                                                                            <p>19 June, 2019</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-review">2</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-quote">3</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-status">
                                                                            <span className="badge badge-success">Approved</span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-action">
                                                                            <div className="dropdown">
                                                                                <a href="#" className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                    <i className="fas fa-ellipsis-v" />
                                                                                </a>
                                                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                                    <a className="dropdown-item" href="#">Edit Details</a>
                                                                                    <a className="dropdown-item" href="#">Delete</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="listing-table-img"><a href="#">
                                                                            <img src="assets/images/db-listing-img-3.jpg" /></a>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-head">
                                                                            <h4 className="listing-table-head-title"><a href="#" className="anchor-title">Heading Title Office Space Title</a></h4>
                                                                            <p className="listing-table-head-text">Ahmedabad, Gujarat, India</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-date">
                                                                            <p>19 June, 2019</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-review">2</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-quote">3</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-status">
                                                                            <span className="badge badge-success">Approved</span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-action">
                                                                            <div className="dropdown">
                                                                                <a href="#" className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                    <i className="fas fa-ellipsis-v" />
                                                                                </a>
                                                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                                    <a className="dropdown-item" href="#">Edit Details</a>
                                                                                    <a className="dropdown-item" href="#">Delete</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="listing-table-img"><a href="#">
                                                                            <img src="assets/images/db-listing-img-2.jpg" /></a>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-head">
                                                                            <h4 className="listing-table-head-title"><a href="#" className="anchor-title">Heading Title Office Space Title</a></h4>
                                                                            <p className="listing-table-head-text">Ahmedabad, Gujarat, India</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-date">
                                                                            <p>19 June, 2019</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-review">2</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-quote">3</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-status">
                                                                            <span className="badge badge-success">Approved</span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-action">
                                                                            <div className="dropdown">
                                                                                <a href="#" className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                    <i className="fas fa-ellipsis-v" />
                                                                                </a>
                                                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                                    <a className="dropdown-item" href="#">Edit Details</a>
                                                                                    <a className="dropdown-item" href="#">Delete</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="listing-table-img"><a href="#">
                                                                            <img src="assets/images/db-listing-img-1.jpg" /></a>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-head">
                                                                            <h4 className="listing-table-head-title"><a href="#" className="anchor-title">Heading Title Office Space Title</a></h4>
                                                                            <p className="listing-table-head-text">Ahmedabad, Gujarat, India</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-date">
                                                                            <p>19 June, 2019</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-review">2</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-quote">3</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-status">
                                                                            <span className="badge badge-success">Approved</span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-action">
                                                                            <div className="dropdown">
                                                                                <a href="#" className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                    <i className="fas fa-ellipsis-v" />
                                                                                </a>
                                                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                                    <a className="dropdown-item" href="#">Edit Details</a>
                                                                                    <a className="dropdown-item" href="#">Delete</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="pills-removed" role="tabpanel" aria-labelledby="pills-removed-tab">
                                                    <div className="table-responsive listing-table">
                                                        <table className="table first">
                                                            <thead>
                                                                <tr>
                                                                    <th>Image</th>
                                                                    <th>Title</th>
                                                                    <th>Date</th>
                                                                    <th>Reviews</th>
                                                                    <th>Request Quote</th>
                                                                    <th>Status</th>
                                                                    <th data-orderable="false">Action</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <div className="listing-table-img"><a href="#">
                                                                            <img src="assets/images/db-listing-img-1.jpg" /></a>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-head">
                                                                            <h4 className="listing-table-head-title"><a href="#" className="anchor-title">Heading Title Office Space Title</a></h4>
                                                                            <p className="listing-table-head-text">Ahmedabad, Gujarat, India</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-date">
                                                                            <p>19 June, 2019</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-review" />
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-quote" />
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-status">
                                                                            <span className="badge badge-danger">Removed</span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-action">
                                                                            <div className="dropdown">
                                                                                <a href="#" className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                    <i className="fas fa-ellipsis-v" />
                                                                                </a>
                                                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                                    <a className="dropdown-item" href="#">Edit Details</a>
                                                                                    <a className="dropdown-item" href="#">Delete</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="listing-table-img"><a href="#">
                                                                            <img src="assets/images/db-listing-img-2.jpg" /></a>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-head">
                                                                            <h4 className="listing-table-head-title"><a href="#" className="anchor-title">Heading Title Office Space Title</a></h4>
                                                                            <p className="listing-table-head-text">Ahmedabad, Gujarat, India</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-date">
                                                                            <p>19 June, 2019</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-review">2</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-quote">3</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-status">
                                                                            <span className="badge badge-danger">Removed</span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-action">
                                                                            <div className="dropdown">
                                                                                <a href="#" className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                    <i className="fas fa-ellipsis-v" />
                                                                                </a>
                                                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                                    <a className="dropdown-item" href="#">Edit Details</a>
                                                                                    <a className="dropdown-item" href="#">Delete</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="listing-table-img"><a href="#">
                                                                            <img src="assets/images/db-listing-img-3.jpg" /></a>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-head">
                                                                            <h4 className="listing-table-head-title"><a href="#" className="anchor-title">Heading Title Office Space Title</a></h4>
                                                                            <p className="listing-table-head-text">Ahmedabad, Gujarat, India</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-date">
                                                                            <p>19 June, 2019</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-review">2</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-quote">3</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-status">
                                                                            <span className="badge badge-danger">Removed</span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-action">
                                                                            <div className="dropdown">
                                                                                <a href="#" className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                    <i className="fas fa-ellipsis-v" />
                                                                                </a>
                                                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                                    <a className="dropdown-item" href="#">Edit Details</a>
                                                                                    <a className="dropdown-item" href="#">Delete</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="listing-table-img"><a href="#">
                                                                            <img src="assets/images/db-listing-img-2.jpg" /></a>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-head">
                                                                            <h4 className="listing-table-head-title"><a href="#" className="anchor-title">Heading Title Office Space Title</a></h4>
                                                                            <p className="listing-table-head-text">Ahmedabad, Gujarat, India</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-date">
                                                                            <p>19 June, 2019</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-review" />
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-quote" />
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-status">
                                                                            <span className="badge badge-danger">Removed</span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-action">
                                                                            <div className="dropdown">
                                                                                <a href="#" className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                    <i className="fas fa-ellipsis-v" />
                                                                                </a>
                                                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                                    <a className="dropdown-item" href="#">Edit Details</a>
                                                                                    <a className="dropdown-item" href="#">Delete</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="listing-table-img"><a href="#">
                                                                            <img src="assets/images/db-listing-img-3.jpg" /></a>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-head">
                                                                            <h4 className="listing-table-head-title"><a href="#" className="anchor-title">Heading Title Office Space Title</a></h4>
                                                                            <p className="listing-table-head-text">Ahmedabad, Gujarat, India</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-date">
                                                                            <p>19 June, 2019</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-review">2</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-quote">3</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-status">
                                                                            <span className="badge badge-danger">Removed</span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-action">
                                                                            <div className="dropdown">
                                                                                <a href="#" className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                    <i className="fas fa-ellipsis-v" />
                                                                                </a>
                                                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                                    <a className="dropdown-item" href="#">Edit Details</a>
                                                                                    <a className="dropdown-item" href="#">Delete</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="listing-table-img"><a href="#">
                                                                            <img src="assets/images/db-listing-img-1.jpg" /></a>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-head">
                                                                            <h4 className="listing-table-head-title"><a href="#" className="anchor-title">Heading Title Office Space Title</a></h4>
                                                                            <p className="listing-table-head-text">Ahmedabad, Gujarat, India</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-date">
                                                                            <p>19 June, 2019</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-review">2</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-quote">3</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-status">
                                                                            <span className="badge badge-danger">Removed</span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-action">
                                                                            <div className="dropdown">
                                                                                <a href="#" className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                    <i className="fas fa-ellipsis-v" />
                                                                                </a>
                                                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                                    <a className="dropdown-item" href="#">Edit Details</a>
                                                                                    <a className="dropdown-item" href="#">Delete</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="listing-table-img"><a href="#">
                                                                            <img src="assets/images/db-listing-img-2.jpg" /></a>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-head">
                                                                            <h4 className="listing-table-head-title"><a href="#" className="anchor-title">Heading Title Office Space Title</a></h4>
                                                                            <p className="listing-table-head-text">Ahmedabad, Gujarat, India</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-date">
                                                                            <p>19 June, 2019</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-review">2</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-quote">3</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-status">
                                                                            <span className="badge badge-danger">Removed</span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-action">
                                                                            <div className="dropdown">
                                                                                <a href="#" className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                    <i className="fas fa-ellipsis-v" />
                                                                                </a>
                                                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                                    <a className="dropdown-item" href="#">Edit Details</a>
                                                                                    <a className="dropdown-item" href="#">Delete</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="listing-table-img"><a href="#">
                                                                            <img src="assets/images/db-listing-img-3.jpg" /></a>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-head">
                                                                            <h4 className="listing-table-head-title"><a href="#" className="anchor-title">Heading Title Office Space Title</a></h4>
                                                                            <p className="listing-table-head-text">Ahmedabad, Gujarat, India</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-date">
                                                                            <p>19 June, 2019</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-review">2</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-quote">3</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-status">
                                                                            <span className="badge badge-danger">Removed</span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-action">
                                                                            <div className="dropdown">
                                                                                <a href="#" className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                    <i className="fas fa-ellipsis-v" />
                                                                                </a>
                                                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                                    <a className="dropdown-item" href="#">Edit Details</a>
                                                                                    <a className="dropdown-item" href="#">Delete</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="listing-table-img"><a href="#">
                                                                            <img src="assets/images/db-listing-img-2.jpg" /></a>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-head">
                                                                            <h4 className="listing-table-head-title"><a href="#" className="anchor-title">Heading Title Office Space Title</a></h4>
                                                                            <p className="listing-table-head-text">Ahmedabad, Gujarat, India</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-date">
                                                                            <p>19 June, 2019</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-review">2</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-quote">3</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-status">
                                                                            <span className="badge badge-danger">Removed</span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-action">
                                                                            <div className="dropdown">
                                                                                <a href="#" className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                    <i className="fas fa-ellipsis-v" />
                                                                                </a>
                                                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                                    <a className="dropdown-item" href="#">Edit Details</a>
                                                                                    <a className="dropdown-item" href="#">Delete</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="listing-table-img"><a href="#">
                                                                            <img src="assets/images/db-listing-img-1.jpg" /></a>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-head">
                                                                            <h4 className="listing-table-head-title"><a href="#" className="anchor-title">Heading Title Office Space Title</a></h4>
                                                                            <p className="listing-table-head-text">Ahmedabad, Gujarat, India</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-date">
                                                                            <p>19 June, 2019</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-review">2</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-quote">3</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-status">
                                                                            <span className="badge badge-danger">Removed</span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-action">
                                                                            <div className="dropdown">
                                                                                <a href="#" className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                    <i className="fas fa-ellipsis-v" />
                                                                                </a>
                                                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                                    <a className="dropdown-item" href="#">Edit Details</a>
                                                                                    <a className="dropdown-item" href="#">Delete</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="listing-table-img"><a href="#">
                                                                            <img src="assets/images/db-listing-img-3.jpg" /></a>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-head">
                                                                            <h4 className="listing-table-head-title"><a href="#" className="anchor-title">Heading Title Office Space Title</a></h4>
                                                                            <p className="listing-table-head-text">Ahmedabad, Gujarat, India</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-date">
                                                                            <p>19 June, 2019</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-review">2</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-quote">3</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-status">
                                                                            <span className="badge badge-danger">Removed</span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-action">
                                                                            <div className="dropdown">
                                                                                <a href="#" className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                    <i className="fas fa-ellipsis-v" />
                                                                                </a>
                                                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                                    <a className="dropdown-item" href="#">Edit Details</a>
                                                                                    <a className="dropdown-item" href="#">Delete</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="listing-table-img"><a href="#">
                                                                            <img src="assets/images/db-listing-img-2.jpg" /></a>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-head">
                                                                            <h4 className="listing-table-head-title"><a href="#" className="anchor-title">Heading Title Office Space Title</a></h4>
                                                                            <p className="listing-table-head-text">Ahmedabad, Gujarat, India</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-date">
                                                                            <p>19 June, 2019</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-review">2</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-quote">3</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-status">
                                                                            <span className="badge badge-danger">Removed</span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-action">
                                                                            <div className="dropdown">
                                                                                <a href="#" className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                    <i className="fas fa-ellipsis-v" />
                                                                                </a>
                                                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                                    <a className="dropdown-item" href="#">Edit Details</a>
                                                                                    <a className="dropdown-item" href="#">Delete</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="listing-table-img"><a href="#">
                                                                            <img src="assets/images/db-listing-img-1.jpg" /></a>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-head">
                                                                            <h4 className="listing-table-head-title"><a href="#" className="anchor-title">Heading Title Office Space Title</a></h4>
                                                                            <p className="listing-table-head-text">Ahmedabad, Gujarat, India</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-date">
                                                                            <p>19 June, 2019</p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-review">2</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-quote">3</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-status">
                                                                            <span className="badge badge-danger">Removed</span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="listing-table-action">
                                                                            <div className="dropdown">
                                                                                <a href="#" className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                    <i className="fas fa-ellipsis-v" />
                                                                                </a>
                                                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                                    <a className="dropdown-item" href="#">Edit Details</a>
                                                                                    <a className="dropdown-item" href="#">Delete</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
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

export default DashboardListing
