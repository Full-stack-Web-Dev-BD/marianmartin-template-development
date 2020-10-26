import React from 'react'

const DashboardAddListing = () => {
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
                                                        <a className="dropdown-link active" href="/dashboardListing"><i className="fas fa-fw fa-list" />Listing</a>
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
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-2 col-lg-3 col-md-12 col-sm-12 col-12">
                                {/* navbar sidebar start  */}
                                <nav className="navbar navbar-expand-lg db-sidenav">
                                    <div className="offcanvas-collapse" id="db-sidenav">
                                        <ul className="nav flex-column">
                                            <li className="nav-item">
                                                <a className="nav-link " href="/dashboardOverview"><i className="fas fa-fw fa-tachometer-alt" />Dashboard</a>
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
                                {/* navbar sidebar close  */}
                            </div>
                            <div className="col-xl-10 col-lg-9 col-md-12 col-sm-12 col-12">
                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        {/* pageheader start  */}
                                        <div className="db-pageheader d-flex justify-content-between">
                                            <div className>
                                                <h2 className="db-pageheader-title">Add New Listing</h2>
                                                <p className="db-pageheader-text"> Add your new listing for office space.</p>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <a href="/dashboardListing" className="btn btn-primary">Back to listing</a>
                                            </div>
                                        </div>
                                        {/* pageheader close  */}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        {/* card header  */}
                                        <div className="db-card listing-category">
                                            <div className="db-card-header">
                                                <h3 className="db-card-header-title">Select Category</h3>
                                            </div>
                                            <div className="db-card-body">
                                                <select className="select2 form-control" id="category">
                                                    <option selected>Select Your Category</option>
                                                    <option value={1}>Office Space </option>
                                                    <option value={2}>Retail Space</option>
                                                    <option value={3}>Meeting Space</option>
                                                </select>
                                            </div>
                                        </div>
                                        {/* card header  */}
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="db-card listing-details">
                                            <div className="db-card-header">
                                                <h3 className="db-card-header-title">Listing Details</h3>
                                            </div>
                                            <div className="db-card-body">
                                                {/* listing form start */}
                                                <form>
                                                    <div className="form-group">
                                                        <label htmlFor="title">Title</label>
                                                        <input type="text" className="form-control" id="title" placeholder="Your Office Space title" required />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="address">Address</label>
                                                        <input type="text" className="form-control" id="address" placeholder="Space Address" required />
                                                    </div>
                                                    <div className="form-row">
                                                        <div className="form-group col-md-4">
                                                            <label htmlFor="country">Country</label>
                                                            <select className="select2 form-control" id="country">
                                                                <option selected>Select Your Country</option>
                                                                <option value={1}>India</option>
                                                                <option value={2}>UK</option>
                                                                <option value={3}>US</option>
                                                            </select>
                                                        </div>
                                                        <div className="form-group col-md-4">
                                                            <label htmlFor="state">State</label>
                                                            <select className="select2 form-control" id="state">
                                                                <option selected>Select Your State</option>
                                                                <option value={1}>Gujarat</option>
                                                                <option value={2}>London</option>
                                                                <option value={3}>California</option>
                                                            </select>
                                                        </div>
                                                        <div className="form-group col-md-4">
                                                            <label htmlFor="city">City</label>
                                                            <select className="select2 form-control" id="city">
                                                                <option selected>Select Your City</option>
                                                                <option value={1}>Ahmedabad</option>
                                                                <option value={2}>Chester</option>
                                                                <option value={3}>Adelanto</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </form>
                                                {/* listing form close  */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        {/* listing form price start  */}
                                        <div className="db-card listing-price">
                                            <div className="db-card-header">
                                                <h3 className="db-card-header-title">Listing Price</h3>
                                                <div className="db-card-body">
                                                    <form>
                                                        <div className="form-group ">
                                                            <label htmlFor="type">Select Type</label>
                                                            <select className="select form-control" id="type">
                                                                <option selected>Hourly</option>
                                                                <option value={1}>Monthly</option>
                                                                <option value={2}>Daily</option>
                                                                <option value={3}>Yearly</option>
                                                            </select>
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="address">Price</label>
                                                            <input type="text" className="form-control" id="address" placeholder="$20" required />
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                            {/* listing form price close  */}
                                        </div>
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        {/* listing form desc start  */}
                                        <div className="db-card listing-description">
                                            <div className="db-card-header">
                                                <h3 className="db-card-header-title">Listing Descriptions</h3>
                                            </div>
                                            <div className="db-card-body">
                                                <textarea className="editor-textarea" defaultValue={"Next, use our Get Started docs to setup Tiny!"} />
                                            </div>
                                        </div>
                                        {/* listing form desc close  */}
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="db-card listing-amenities">
                                            <div className="db-card-header">
                                                <h3 className="db-card-header-title">Listing Amenities</h3>
                                            </div>
                                            {/* listing amenitiers start  */}
                                            <div className="db-card-body">
                                                <div className="row">
                                                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="customCheck19" />
                                                            <label className="custom-control-label" htmlFor="customCheck19">Furnished</label>
                                                        </div>
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="customCheck20" />
                                                            <label className="custom-control-label" htmlFor="customCheck20">24/7 Access</label>
                                                        </div>
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="customCheck21" />
                                                            <label className="custom-control-label" htmlFor="customCheck21">Accessibility</label>
                                                        </div>
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="customCheck22" />
                                                            <label className="custom-control-label" htmlFor="customCheck22">Bike Rack</label>
                                                        </div>
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="customCheck36" />
                                                            <label className="custom-control-label" htmlFor="customCheck36">Storage</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="customCheck23" />
                                                            <label className="custom-control-label" htmlFor="customCheck23">Coffee/Tea</label>
                                                        </div>
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="customCheck24" />
                                                            <label className="custom-control-label" htmlFor="customCheck24">Door w/Lock</label>
                                                        </div>
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="customCheck25" />
                                                            <label className="custom-control-label" htmlFor="customCheck25">Kitchen</label>
                                                        </div>
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="customCheck26" />
                                                            <label className="custom-control-label" htmlFor="customCheck26">Mailbox Services</label>
                                                        </div>
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="customCheck37" />
                                                            <label className="custom-control-label" htmlFor="customCheck37">Window View</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="customCheck27" />
                                                            <label className="custom-control-label" htmlFor="customCheck27">Meeting Rooms</label>
                                                        </div>
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="customCheck28" />
                                                            <label className="custom-control-label" htmlFor="customCheck28">Print/Scan/Copy</label>
                                                        </div>
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="customCheck29" />
                                                            <label className="custom-control-label" htmlFor="customCheck29">WiFi Phone</label>
                                                        </div>
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="customCheck30" />
                                                            <label className="custom-control-label" htmlFor="customCheck30">Parking</label>
                                                        </div>
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="customCheck31" />
                                                            <label className="custom-control-label" htmlFor="customCheck31">Catering</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="customCheck32" />
                                                            <label className="custom-control-label" htmlFor="customCheck32">Hosted Reception</label>
                                                        </div>
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="customCheck34" />
                                                            <label className="custom-control-label" htmlFor="customCheck34">On-site Restaurant</label>
                                                        </div>
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="customCheck35" />
                                                            <label className="custom-control-label" htmlFor="customCheck35">Pet Friendly</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* listing amenities close  */}
                                        </div>
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="db-card listing-photo">
                                            <div className="db-card-header">
                                                <h3 className="db-card-header-title">Photos</h3>
                                            </div>
                                            <div className="db-card-body">
                                                {/* listing dropzone start  */}
                                                <div className="row">
                                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                        <div className="dropzone dz-clickable " action="/file-upload">
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* listing dropzone close  */}
                                                {/* listing photo start  */}
                                                <div className="row">
                                                    <div className="col-xl-2 col-lg-3 col-md-6 col-sm-12 col-12">
                                                        <div className="listing-photo-upload">
                                                            <img src="assets/images/listing-photo-1.jpg" alt="" className="img-fluid" />
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-2 col-lg-3 col-md-6 col-sm-12 col-12">
                                                        <div className="listing-photo-upload">
                                                            <img src="assets/images/listing-photo-1.jpg" alt="" className="img-fluid" />
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-2 col-lg-3 col-md-6 col-sm-12 col-12">
                                                        <div className="listing-photo-upload">
                                                            <img src="assets/images/listing-photo-1.jpg" alt="" className="img-fluid" />
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-2 col-lg-3 col-md-6 col-sm-12 col-12">
                                                        <div className="listing-photo-upload">
                                                            <img src="assets/images/listing-photo-1.jpg" alt="" className="img-fluid" />
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-2 col-lg-3 col-md-6 col-sm-12 col-12">
                                                        <div className="listing-photo-upload">
                                                            <img src="assets/images/listing-photo-1.jpg" alt="" className="img-fluid" />
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-2 col-lg-3 col-md-6 col-sm-12 col-12">
                                                        <div className="listing-photo-upload">
                                                            <img src="assets/images/listing-photo-1.jpg" alt="" className="img-fluid" />
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-2 col-lg-3 col-md-6 col-sm-12 col-12">
                                                        <div className="listing-photo-upload">
                                                            <img src="assets/images/listing-photo-1.jpg" alt="" className="img-fluid" />
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-2 col-lg-3 col-md-6 col-sm-12 col-12">
                                                        <div className="listing-photo-upload">
                                                            <img src="assets/images/listing-photo-1.jpg" alt="" className="img-fluid" />
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-2 col-lg-3 col-md-6 col-sm-12 col-12">
                                                        <div className="listing-photo-upload">
                                                            <img src="assets/images/listing-photo-1.jpg" alt="" className="img-fluid" />
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-2 col-lg-3 col-md-6 col-sm-12 col-12">
                                                        <div className="listing-photo-upload">
                                                            <img src="assets/images/listing-photo-1.jpg" alt="" className="img-fluid" />
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-2 col-lg-3 col-md-6 col-sm-12 col-12">
                                                        <div className="listing-photo-upload">
                                                            <img src="assets/images/listing-photo-1.jpg" alt="" className="img-fluid" />
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-2 col-lg-3 col-md-6 col-sm-12 col-12">
                                                        <div className="listing-photo-upload">
                                                            <img src="assets/images/listing-photo-1.jpg" alt="" className="img-fluid" />
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* listing photo close  */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="db-card listing-video">
                                            {/* listing video start  */}
                                            <div className="db-card-header">
                                                <h3 className="db-card-header-title">Listing Video</h3>
                                            </div>
                                            <div className="db-card-body">
                                                <form>
                                                    <div className="form-group">
                                                        <label htmlFor="videolink">Video Link</label>
                                                        <input type="email" className="form-control" id="videolink" placeholder="Your video link here" />
                                                    </div>
                                                </form>
                                            </div>
                                            {/* listing video close  */}
                                        </div>
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <button type="submit" className="btn btn-primary">Submit Listing</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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

export default DashboardAddListing
