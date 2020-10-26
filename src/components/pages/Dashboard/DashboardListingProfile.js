import React from 'react'

const DashboardListingProfile = () => {
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
                                    <div className="db-navbar-toggler">
                                        <button className="db-sidenav-toggler navbar-toggler collapsed" type="button" data-toggle="offcanvas" data-target="#db-sidenav" aria-controls="db-sidenav" aria-expanded="false" aria-label="Toggle navigation">
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
                                                        <a className="dropdown-link" href="/dashboardListingReviews"><i className="fas fa-fw fa-star" />Reviews</a>
                                                    </li>
                                                    <li className="dropdown-item">
                                                        <a className="dropdown-link" href="/dashboardInvoice"><i className="fas fa-fw fa-file-invoice" />Invoice</a>
                                                    </li>
                                                    <li className="dropdown-item">
                                                        <a className="dropdown-link" href="/dashboardPricingPlan"><i className="fas fa-fw fa-gem" />My Plan</a>
                                                    </li>
                                                    <li className="dropdown-item">
                                                        <a className="dropdown-link active " href="/dashboardListingProfile"><i className="fas fa-fw fa-user-circle" />Profile</a>
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
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-2 col-lg-3 col-md-12 col-sm-12 col-12">
                                {/* navigation start */}
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
                                                <a className="nav-link active" href="/dashboardListingProfile"><i className="fas fa-fw fa-user-circle" />Profile</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="/"><i className="fas fa-fw fa-sign-out-alt" />Logout</a>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                                {/* navigation close */}
                            </div>
                            <div className="col-xl-10 col-lg-9 col-md-12 col-sm-12 col-12">
                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        {/* pageheader start */}
                                        <div className="db-pageheader">
                                            <h2 className="db-pageheader-title">Profile</h2>
                                            <p className="db-pageheader-text"> In commodo lorem ut erat sagittis variusm euismod lectus vehicula cursus est.</p>
                                        </div>
                                        {/* pageheader close */}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        {/* card line tab start */}
                                        <div className="card-lines-tab">
                                            <ul className="nav nav-pills card-lines-tab-header" id="pills-tab" role="tablist">
                                                <li className="nav-item">
                                                    <a className="nav-link active" id="pills-editprofile-tab" data-toggle="pill" href="#pills-editprofile" role="tab" aria-controls="pills-editprofile" aria-selected="true">Edit profile</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" id="pills-updatephoto-tab" data-toggle="pill" href="#pills-updatephoto" role="tab" aria-controls="pills-updatephoto" aria-selected="false">Update photo</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" id="pills-password-tab" data-toggle="pill" href="#pills-password" role="tab" aria-controls="pills-password" aria-selected="false">Change password</a>
                                                </li>
                                            </ul>
                                            <div className="tab-content card-lines-tab-body" id="pills-tabContent">
                                                <div className="tab-pane fade show active" id="pills-editprofile" role="tabpanel" aria-labelledby="pills-editprofile-tab">
                                                    <form className="form-row">
                                                        <div className="form-group col-md-6">
                                                            <label htmlFor="profilefname">First Name</label>
                                                            <input type="text" className="form-control" id="profilefname" placeholder required />
                                                        </div>
                                                        <div className="form-group col-md-6">
                                                            <label htmlFor="profilelname">Last Name</label>
                                                            <input type="text" className="form-control" id="profilelname" placeholder required />
                                                        </div>
                                                        <div className="form-group col-md-6">
                                                            <label htmlFor="profileemail">Email Address</label>
                                                            <input type="email" className="form-control" id="profileemail" placeholder required />
                                                        </div>
                                                        <div className="form-group col-md-6">
                                                            <label htmlFor="profilenumber">Phone</label>
                                                            <div className="form-row">
                                                                <div className="col-md-2">
                                                                    <select className="select2 custom-select" required id="search-hide">
                                                                        <option selected>+91</option>
                                                                        <option value={1}>+1</option>
                                                                        <option value={2}>+44</option>
                                                                        <option value={3}>+52</option>
                                                                    </select>
                                                                </div>
                                                                <div className="col-md-10">
                                                                    <input type="tel" className="form-control" id="profilenumber" placeholder required />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <button type="submit" className="btn btn-primary btn-sm">Save</button>
                                                    </form>
                                                </div>
                                                <div className="tab-pane fade" id="pills-updatephoto" role="tabpanel" aria-labelledby="pills-updatephoto-tab">
                                                    <div className="dropzone" action="/file-upload">
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="pills-password" role="tabpanel" aria-labelledby="pills-password-tab">
                                                    <form>
                                                        <div className="form-group">
                                                            <label htmlFor="oldpassword">Old Password</label>
                                                            <input type="password" className="form-control" id="oldpassword" placeholder="Password" />
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="newpassword">New Password</label>
                                                            <input type="password" className="form-control" id="newpassword" placeholder="Password" />
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="rewritenewpassword">Rewrite New Password</label>
                                                            <input type="password" className="form-control" id="rewritenewpassword" placeholder="Password" />
                                                        </div>
                                                        <button type="submit" className="btn btn-primary btn-sm">Save</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        {/* card line tab close */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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

export default DashboardListingProfile
