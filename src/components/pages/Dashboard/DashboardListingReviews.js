import React from 'react'

const DashboardListingReviews = () => {
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
                                                <a className="nav-link active" href="/dashboardListingReviews"><i className="fas fa-fw fa-star" />Reviews</a>
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
                                                <h2 className="db-pageheader-title">Reviews</h2>
                                                <p className="db-pageheader-text"> In commodo lorem ut erat sagittis variusm euismod lectus vehicula cursus est.</p>
                                            </div>
                                            <div className="d-xl-flex align-items-center">
                                                <a href="#" className="btn btn-primary"> Ask Reviews</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12 ">
                                        <div className="db-card db-overview-widget">
                                            <div className="db-card-body">
                                                <h3 className="db-card-body-title">Reviews</h3>
                                                <div className="db-overview-widget-body">
                                                    <h3 className="db-overview-widget-body-label">
                                                        5
                      </h3>
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
                                                <h3 className="db-card-body-title">Average Rating</h3>
                                                <div className="db-overview-widget-body">
                                                    <h3 className="db-overview-widget-body-label">
                                                        4.9
                      </h3>
                                                    <div className="review-content-rating">
                                                        <span className="star" />
                                                        <span className="star" />
                                                        <span className="star" />
                                                        <span className="star" />
                                                        <span className="star empty" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                        <div className="review-form mt-4">
                                            <h4>All Reviews</h4>
                                            <form>
                                                <div className="form-row">
                                                    <div className="col-md-5 ">
                                                        <select className="select2 custom-select mb-1" id="reviewlist">
                                                            <option selected>Listing Name</option>
                                                            <option value={1}>Heading title of name</option>
                                                            <option value={2}>Heading title of name</option>
                                                            <option value={3}>Heading title of name</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-md-5">
                                                        <select className="select2 custom-select mb-1" id="reviewsort">
                                                            <option selected>Sort</option>
                                                            <option value={1}>Sort by Date</option>
                                                            <option value={2}>Sort by High Review</option>
                                                            <option value={3}>Sort by Low Review</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-md-2">
                                                        <a href="#" className="btn btn-primary btn-block">search</a>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-4">
                                        <div className="review-block bg-white">
                                            <div className="review-content">
                                                <div className="d-xl-flex justify-content-between">
                                                    <div className="review-content-head">
                                                        <h3 className="review-content-title">Doris Knapp</h3>
                                                        <div className="review-content-rating">
                                                            <span className="star" />
                                                            <span className="star" />
                                                            <span className="star" />
                                                            <span className="star half" />
                                                            <span className="star empty" />
                                                            <a href="#" className="rating-review">4.0</a>
                                                        </div>
                                                    </div>
                                                    <div className="d-xl-flex align-items-center">
                                                        <div className="custom-control custom-checkbox custom-control-inline">
                                                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                            <label className="custom-control-label" htmlFor="customCheck1">Hidden</label>
                                                        </div>
                                                        <div className="custom-control custom-checkbox custom-control-inline">
                                                            <input type="checkbox" className="custom-control-input" id="customCheck2" />
                                                            <label className="custom-control-label" htmlFor="customCheck2">Featured</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className="review-content-heading-text text-dark">Good budget workspacer</p>
                                                <p className="review-content-text">I highly recommend this places lorem dignissim at. Nunc quis mag na non miquis magna eleifend vestibulum quis magna. Aliquam aliquam viverra nisl, id malesuada urna finibus at. Cras tristique felis risus, eget auctor mi sagittis quis. Nulla placerat ultrices metus a commodo.
                    </p>
                                                <a className="btn btn-primary btn-sm" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">Respond</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-3 ">
                                        <div className="collapse" id="collapseExample">
                                            <div className="db-card">
                                                <div className="db-card-header">
                                                    <h5 className="db-card-header-title">Respond to review</h5>
                                                </div>
                                                <div className="db-card-body">
                                                    <div className="review-content-head">
                                                        <h3 className="review-content-title">Doris Knapp</h3>
                                                        <div className="review-content-rating">
                                                            <span className="star" />
                                                            <span className="star" />
                                                            <span className="star" />
                                                            <span className="star half" />
                                                            <span className="star empty" />
                                                            <a href="#" className="rating-review">4.0</a>
                                                        </div>
                                                    </div>
                                                    <form className>
                                                        <div className="form-group">
                                                            <label htmlFor="exampleFormControlTextarea1">Write Your Response</label>
                                                            <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} placeholder="Thanks Doris, Great" defaultValue={""} />
                                                        </div>
                                                        <button type="submit" className="btn btn-primary btn-sm btn-sm save">Save</button>
                                                        <a className="btn btn-outline-primary btn-sm" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">close</a>
                                                    </form></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-3">
                                        <div className="review-block bg-white">
                                            <div className="review-content">
                                                <div className="d-xl-flex justify-content-between">
                                                    <div className="review-content-head">
                                                        <h3 className="review-content-title">Praveen Johel</h3>
                                                        <div className="review-content-rating">
                                                            <span className="star" />
                                                            <span className="star" />
                                                            <span className="star" />
                                                            <span className="star" />
                                                            <span className="star" />
                                                            <a href="#" className="rating-review">5.0</a>
                                                        </div>
                                                    </div>
                                                    <div className="d-xl-flex align-items-center">
                                                        <div className="custom-control custom-checkbox custom-control-inline">
                                                            <input type="checkbox" className="custom-control-input" id="customCheck3" />
                                                            <label className="custom-control-label" htmlFor="customCheck3">Hidden</label>
                                                        </div>
                                                        <div className="custom-control custom-checkbox custom-control-inline">
                                                            <input type="checkbox" className="custom-control-input" id="customCheck4" />
                                                            <label className="custom-control-label" htmlFor="customCheck4">Featured</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className="review-content-heading-text text-dark">Review Heading Title</p>
                                                <p className="review-content-text">Pellentesque non imperdiet ante, non vehicula neque. Maecenas volutpat cursus lorem a dignissim. Sed vel neque eget lorem gravida malesuada a id erat. Etiam commodo dignissim lacus, quis eleifend erat imperdiet in. Vestibulum sit amet ultrices turpis, vel sagittis est.
                    </p>
                                                <a className="btn btn-primary btn-sm" data-toggle="collapse" href="#respond2" role="button" aria-expanded="false" aria-controls="respond2">Respond</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-3 ">
                                        <div className="collapse" id="respond2">
                                            <div className="db-card">
                                                <div className="db-card-header">
                                                    <h5 className="db-card-header-title">Respond to review</h5>
                                                </div>
                                                <div className="db-card-body">
                                                    <div className="review-content-head">
                                                        <h3 className="review-content-title">Praveen Johel</h3>
                                                        <div className="review-content-rating">
                                                            <span className="star" />
                                                            <span className="star" />
                                                            <span className="star" />
                                                            <span className="star" />
                                                            <span className="star" />
                                                            <a href="#" className="rating-review">5.0</a>
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="exampleFormControlTextarea1">Write Your Response</label>
                                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} placeholder="Thanks Praveen, Great" defaultValue={""} />
                                                    </div>
                                                    <button type="submit" className="btn btn-primary btn-sm btn-sm save">Save</button>
                                                    <a className="btn btn-outline-primary btn-sm" data-toggle="collapse" href="#respond2" role="button" aria-expanded="false" aria-controls="respond2">close</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-3">
                                        <div className="review-block bg-white">
                                            <div className="review-content">
                                                <div className="d-xl-flex justify-content-between">
                                                    <div className="review-content-head">
                                                        <h3 className="review-content-title">Joey Heathcote</h3>
                                                        <div className="review-content-rating">
                                                            <span className="star" />
                                                            <span className="star" />
                                                            <span className="star" />
                                                            <span className="star" />
                                                            <span className="star" />
                                                            <a href="#" className="rating-review">5.0</a>
                                                        </div>
                                                    </div>
                                                    <div className="d-xl-flex align-items-center">
                                                        <div className="custom-control custom-checkbox custom-control-inline">
                                                            <input type="checkbox" className="custom-control-input" id="customCheck5" />
                                                            <label className="custom-control-label" htmlFor="customCheck5">Hidden</label>
                                                        </div>
                                                        <div className="custom-control custom-checkbox custom-control-inline">
                                                            <input type="checkbox" className="custom-control-input" id="customCheck6" />
                                                            <label className="custom-control-label" htmlFor="customCheck6">Featured</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className="review-content-heading-text text-dark">Review Heading Title</p>
                                                <p className="review-content-text">Pellentesque non imperdiet ante, non vehicula neque. Maecenas volutpat cursus lorem a dignissim. Sed vel neque eget lorem gravida malesuada a id erat. Etiam commodo dignissim lacus, quis eleifend erat imperdiet in. Vestibulum sit amet ultrices turpis, vel sagittis est.
                    </p>
                                                <a className="btn btn-primary btn-sm" data-toggle="collapse" href="#respond3" role="button" aria-expanded="false" aria-controls="respond3">Respond</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-3 ">
                                        <div className="collapse" id="respond3">
                                            <div className="db-card">
                                                <div className="db-card-header">
                                                    <h5 className="db-card-header-title">Respond to review</h5>
                                                </div>
                                                <div className="db-card-body">
                                                    <div className="review-content-head">
                                                        <h3 className="review-content-title">Joey Heathcote</h3>
                                                        <div className="review-content-rating">
                                                            <span className="star" />
                                                            <span className="star" />
                                                            <span className="star" />
                                                            <span className="star" />
                                                            <span className="star" />
                                                            <a href="#" className="rating-review">5.0</a>
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="exampleFormControlTextarea1">Write Your Response</label>
                                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} placeholder="Thanks Joey, Great" defaultValue={""} />
                                                    </div>
                                                    <button type="submit" className="btn btn-primary btn-sm btn-sm save">Save</button>
                                                    <a className="btn btn-outline-primary btn-sm" data-toggle="collapse" href="#respond3" role="button" aria-expanded="false" aria-controls="respond3">close</a>
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

export default DashboardListingReviews
