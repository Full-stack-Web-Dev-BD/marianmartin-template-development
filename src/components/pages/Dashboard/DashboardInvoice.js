import React from 'react'

const DashboardInvoice = () => {
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
                                                        <a className="dropdown-link active" href="/dashboardInvoice"><i className="fas fa-fw fa-file-invoice" />Invoice</a>
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
                <div className="db-content">
                    {/* content start  */}
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
                                                <a className="nav-link active" href="/dashboardInvoice"><i className="fas fa-fw fa-file-invoice" />Invoice</a>
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
                                            <div className>
                                                <h2 className="db-pageheader-title">Invoice </h2>
                                                <p className="db-pageheader-text"> In commodo lorem ut erat sagittis variusm euismod lectus vehicula cursus est.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="db-card">
                                            <div className="table-responsive invoice-table">
                                                <table className="table second">
                                                    <thead>
                                                        <tr>
                                                            <th>
                                                                <div className="custom-control custom-checkbox invoice-table-checkbox">
                                                                    <input className="custom-control-input chk_all" type="checkbox" name="chk_all" id="customCheck1" />
                                                                    <label className="custom-control-label" htmlFor="customCheck1" />
                                                                </div>
                                                            </th>
                                                            <th>No.</th>
                                                            <th>Plan</th>
                                                            <th>Amount</th>
                                                            <th>Date</th>
                                                            <th data-orderable="false">Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <div className="custom-control custom-checkbox">
                                                                    <input type="checkbox" className="custom-control-input checkboxes" id="customCheck2" />
                                                                    <label className="custom-control-label" htmlFor="customCheck2" />
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <p className="invoice-table-index">1 </p>
                                                            </td>
                                                            <td>
                                                                <p className="invoice-table-heading"> Standard Pricing Plan</p>
                                                            </td>
                                                            <td>
                                                                <p className="invoice-table-price">$120</p>
                                                            </td>
                                                            <td>
                                                                <p className="invoice-table-date">21 August, 2020</p>
                                                            </td>
                                                            <td>
                                                                <div className="invoice-table-action">
                                                                    <div className="dropdown">
                                                                        <a href="#" className="dropdown-toggle" id="dropdownMenuButton1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                            <i className="fas fa-ellipsis-v" />
                                                                        </a>
                                                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                                            <a className="dropdown-item" href="#">Edit Details</a>
                                                                            <a className="dropdown-item" href="#">Delete</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="custom-control custom-checkbox">
                                                                    <input type="checkbox" className="custom-control-input checkboxes" id="customCheck3" />
                                                                    <label className="custom-control-label" htmlFor="customCheck3" />
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <p className="invoice-table-index">2</p>
                                                            </td>
                                                            <td>
                                                                <p className="invoice-table-heading"> Free Plan</p>
                                                            </td>
                                                            <td>
                                                                <p className="invoice-table-price">$0</p>
                                                            </td>
                                                            <td>
                                                                <p className="invoice-table-date">20 June, 2020</p>
                                                            </td>
                                                            <td>
                                                                <div className="invoice-table-action">
                                                                    <div className="dropdown">
                                                                        <a href="#" className="dropdown-toggle" id="dropdownMenuButton3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                            <i className="fas fa-ellipsis-v" />
                                                                        </a>
                                                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton3">
                                                                            <a className="dropdown-item" href="#">Edit Details</a>
                                                                            <a className="dropdown-item" href="#">Delete</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="custom-control custom-checkbox">
                                                                    <input type="checkbox" className="custom-control-input checkboxes" id="customCheck4" />
                                                                    <label className="custom-control-label" htmlFor="customCheck4" />
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <p className="invoice-table-index">3</p>
                                                            </td>
                                                            <td>
                                                                <p className="invoice-table-heading"> Premium Pricing Plan</p>
                                                            </td>
                                                            <td>
                                                                <p className="invoice-table-price">$160</p>
                                                            </td>
                                                            <td>
                                                                <p className="invoice-table-date">10 July, 2020</p>
                                                            </td>
                                                            <td>
                                                                <div className="invoice-table-action">
                                                                    <div className="dropdown">
                                                                        <a href="#" className="dropdown-toggle" id="dropdownMenuButton2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                            <i className="fas fa-ellipsis-v" />
                                                                        </a>
                                                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
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
                    {/* content close  */}
                </div>
                {/* footer start  */}
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
                {/* footer close  */}
            </div>
            {/* ============================================================== */}
            {/* end main wrapper */}
            {/* ============================================================== */}
        </div>

    )
}

export default DashboardInvoice
