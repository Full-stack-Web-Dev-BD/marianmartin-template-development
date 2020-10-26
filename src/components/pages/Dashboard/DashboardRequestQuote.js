import React from 'react'

const DashboardRequestQuote = () => {
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
                                                <a className="nav-link" href="/dashboardOverview"><i className="fas fa-fw fa-tachometer-alt" />Dashboard</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="/dashboardListing"><i className="fas fa-fw fa-list" />Listing</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link active" href="/dashboardRequestQuote"><i className="fas fa-fw fa-receipt" />Request Quote</a>
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
                                            <div className>
                                                <h2 className="db-pageheader-title">Request Quote </h2>
                                                <p className="db-pageheader-text"> In commodo lorem ut erat sagittis variusm euismod lectus vehicula cursus est.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="db-card">
                                            <div className="table-responsive request-quote-table">
                                                <table className="table second">
                                                    <thead>
                                                        <tr>
                                                            <th>
                                                                Name
                          </th>
                                                            <th>Email</th>
                                                            <th>Phone</th>
                                                            <th>Date for availability</th>
                                                            <th>Message</th>
                                                            <th data-orderable="false">Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <p className="request-quote-name">Nishtha Rama</p>
                                                            </td>
                                                            <td>
                                                                <a href="#" className="request-quote-email">nishtharama@gmail.com </a>
                                                            </td>
                                                            <td>
                                                                <p className="request-quote-phone"> 010 59303753</p>
                                                            </td>
                                                            <td>
                                                                <p className="request-quote-date">19 July,2020</p>
                                                            </td>
                                                            <td>
                                                                <a href="#" className="request-quote-message" data-toggle="modal" data-target="#exampleModalLong">
                                                                    <i className="fas fa-envelope-open" />
                                                                </a>
                                                            </td>
                                                            <td>
                                                                <div className="request-quote-action">
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
                                                                <p className="request-quote-name">Lata Ajeet Dial</p>
                                                            </td>
                                                            <td>
                                                                <a href="#" className="request-quote-email">lataajeetdial@gmail.com </a>
                                                            </td>
                                                            <td>
                                                                <p className="request-quote-phone"> 010 59303753</p>
                                                            </td>
                                                            <td>
                                                                <p className="request-quote-date">19 July,2020</p>
                                                            </td>
                                                            <td>
                                                                <a href="#" className="request-quote-message" data-toggle="modal" data-target="#exampleModalLong">
                                                                    <i className="fas fa-envelope-open" />
                                                                </a>
                                                            </td>
                                                            <td>
                                                                <div className="request-quote-action">
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
                                                                <p className="request-quote-name">Akhil Mahadeo</p>
                                                            </td>
                                                            <td>
                                                                <a href="#" className="request-quote-email">akhilmahadeo@gmail.com </a>
                                                            </td>
                                                            <td>
                                                                <p className="request-quote-phone"> 010 59303753</p>
                                                            </td>
                                                            <td>
                                                                <p className="request-quote-date">19 July,2020</p>
                                                            </td>
                                                            <td>
                                                                <a href="#" className="request-quote-message" data-toggle="modal" data-target="#exampleModalLong">
                                                                    <i className="fas fa-envelope-open" />
                                                                </a>
                                                            </td>
                                                            <td>
                                                                <div className="request-quote-action">
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
                                                                <p className="request-quote-name">Jasmine Rowley</p>
                                                            </td>
                                                            <td>
                                                                <a href="#" className="request-quote-email">jasminerowley@gmail.com </a>
                                                            </td>
                                                            <td>
                                                                <p className="request-quote-phone">010 59303753</p>
                                                            </td>
                                                            <td>
                                                                <p className="request-quote-date">19 July,2020</p>
                                                            </td>
                                                            <td>
                                                                <a href="#" className="request-quote-message" data-toggle="modal" data-target="#exampleModalLong">
                                                                    <i className="fas fa-envelope-open" />
                                                                </a>
                                                            </td>
                                                            <td>
                                                                <div className="request-quote-action">
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
                                                                <p className="request-quote-name">Harrison McLean</p>
                                                            </td>
                                                            <td>
                                                                <a href="#" className="request-quote-email">harrison mclean@gmail.com </a>
                                                            </td>
                                                            <td>
                                                                <p className="request-quote-phone">010 59303753</p>
                                                            </td>
                                                            <td>
                                                                <p className="request-quote-date">19 July,2020</p>
                                                            </td>
                                                            <td>
                                                                <a href="#" className="request-quote-message" data-toggle="modal" data-target="#exampleModalLong">
                                                                    <i className="fas fa-envelope-open" />
                                                                </a>
                                                            </td>
                                                            <td>
                                                                <div className="request-quote-action">
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
                                                                <p className="request-quote-name">Khush Darji</p>
                                                            </td>
                                                            <td>
                                                                <a href="#" className="request-quote-email">khushdarji@gmail.com </a>
                                                            </td>
                                                            <td>
                                                                <p className="request-quote-phone">010 59405753</p>
                                                            </td>
                                                            <td>
                                                                <p className="request-quote-date">19 July,2020</p>
                                                            </td>
                                                            <td>
                                                                <a href="#" className="request-quote-message" data-toggle="modal" data-target="#exampleModalLong">
                                                                    <i className="fas fa-envelope-open" />
                                                                </a>
                                                            </td>
                                                            <td>
                                                                <div className="request-quote-action">
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
                                                                <p className="request-quote-name">Meera singh</p>
                                                            </td>
                                                            <td>
                                                                <a href="#" className="request-quote-email">meerasingh@gmail.com </a>
                                                            </td>
                                                            <td>
                                                                <p className="request-quote-phone">010 59303753</p>
                                                            </td>
                                                            <td>
                                                                <p className="request-quote-date">19 July,2020</p>
                                                            </td>
                                                            <td>
                                                                <a href="#" className="request-quote-message" data-toggle="modal" data-target="#exampleModalLong">
                                                                    <i className="fas fa-envelope-open" />
                                                                </a>
                                                            </td>
                                                            <td>
                                                                <div className="request-quote-action">
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
            {/* Button trigger modal */}
            {/* Modal */}
            <div className="modal request-quote-modal fade" id="exampleModalLong" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <div className="modal-dialog modal-xl" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                            <h4 className="modal-body-name">Nishtha Rama</h4>
                            <p className="modal-body-contact"><span className="modal-body-contact-email">nishtharama@gmail.com</span><span className="modal-body-contact-number">010 59303753</span></p>
                            <div className="modal-body-message">
                                <h5 className="modal-body-message-title">Message</h5>
                                <p className="modal-body-message-text">Cras feugiat ligula mi, ut blandit odio lobortis quis. Maecenas dignissim luctus nulla, nec pulvinar augue vehicula non. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                            </div>
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

export default DashboardRequestQuote
