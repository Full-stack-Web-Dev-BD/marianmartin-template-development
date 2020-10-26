import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../layout/Navbar'

const ListingWithMap = () => {
    return (
        <div>
            <div className="main-wrapper">
                <Navbar/>
                <div className="listingmap-filter">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="filter-section">
                                    <span className="filter-section-title"><i className="fas fa-sliders-h filter-icon" />Filter</span>
                                    {/* filter btn start */}
                                    <div className="btn-group" role="group">
                                        <button id="term" type="button" className="btn btn-outline-white btn-sm dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Term
                </button>
                                        <div className="dropdown-menu term-menu" aria-labelledby="term">
                                            <span className="with-arrow"><span className /></span>
                                            <div className="dropdown-menu-body term-menu-body stopevent">
                                                <select className="form-control custom-select" id="search-hide">
                                                    <option value={1}>Hourly</option>
                                                    <option value={2}>Daily</option>
                                                    <option value={3}>Monthly</option>
                                                    <option value={4}>Yearly</option>
                                                </select>
                                            </div>
                                            <div className="dropdown-menu-footer">
                                                <Link to="#" className="btn btn-primary btn-sm">Apply</Link>
                                            </div>
                                        </div>
                                    </div>
                                    {/* filter btn start */}
                                    <div className="btn-group dropdown stopevent" role="group">
                                        <button id="price" type="button" className="btn btn-outline-white btn-sm dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Price
                </button>
                                        <div className="dropdown-menu price-menu" aria-labelledby="price">
                                            <span className="with-arrow"><span className /></span>
                                            <div className="dropdown-menu-body price-menu-body">
                                                <div id="slider-padding" />
                                            </div>
                                        </div>
                                    </div>
                                    {/* filter btn start */}
                                    <div className="btn-group " role="group">
                                        <button id="capacity" type="button" className="btn btn-outline-white btn-sm dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Capacity
                </button>
                                        <div className="dropdown-menu capacity-menu" aria-labelledby="capacity">
                                            <span className="with-arrow"><span className /></span>
                                            <div className="dropdown-menu-body capacity-menu-body stopevent">
                                                <h4 className="menu-title">Capacity</h4>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                    <label className="custom-control-label" htmlFor="customCheck1">1</label>
                                                </div>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck2" />
                                                    <label className="custom-control-label" htmlFor="customCheck2">2-5</label>
                                                </div>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck3" />
                                                    <label className="custom-control-label" htmlFor="customCheck3">6-10</label>
                                                </div>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck4" />
                                                    <label className="custom-control-label" htmlFor="customCheck4">10-15</label>
                                                </div>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck5" />
                                                    <label className="custom-control-label" htmlFor="customCheck5">16-20</label>
                                                </div>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck6" />
                                                    <label className="custom-control-label" htmlFor="customCheck6">21-30</label>
                                                </div>
                                            </div>
                                            <div className="dropdown-menu-footer">
                                                <Link to="#" className="btn btn-primary btn-sm">Apply</Link>
                                            </div>
                                        </div>
                                    </div>
                                    {/* filter btn start */}
                                    <div className="btn-group" role="group">
                                        <button id="size" type="button" className="btn btn-outline-white btn-sm dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Size
                </button>
                                        <div className="dropdown-menu size-menu" aria-labelledby="size">
                                            <span className="with-arrow"><span className /></span>
                                            <div className="dropdown-menu-body size-menu-body stopevent">
                                                <h4 className="menu-title">Size</h4>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck7" />
                                                    <label className="custom-control-label" htmlFor="customCheck7">300Sq.Ft</label>
                                                </div>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck8" />
                                                    <label className="custom-control-label" htmlFor="customCheck8">301 Sq.Ft - 500Sq.Ft</label>
                                                </div>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck9" />
                                                    <label className="custom-control-label" htmlFor="customCheck9">501 Sq.Ft - 600Sq.Ft</label>
                                                </div>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck10" />
                                                    <label className="custom-control-label" htmlFor="customCheck10">601 Sq.Ft - 700Sq.Ft</label>
                                                </div>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck11" />
                                                    <label className="custom-control-label" htmlFor="customCheck11">701 Sq.Ft - 800Sq.Ft</label>
                                                </div>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck12" />
                                                    <label className="custom-control-label" htmlFor="customCheck12">801 Sq.Ft - 900Sq.Ft</label>
                                                </div>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck13" />
                                                    <label className="custom-control-label" htmlFor="customCheck13">901 Sq.Ft - 1000Sq.Ft</label>
                                                </div>
                                            </div>
                                            <div className="dropdown-menu-footer">
                                                <Link to="#" className="btn btn-primary btn-sm">Apply</Link>
                                            </div>
                                        </div>
                                    </div>
                                    {/* filter btn start */}
                                    <div className="btn-group" role="group">
                                        <button id="location" type="button" className="btn btn-outline-white btn-sm dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Location
                </button>
                                        <div className="dropdown-menu location-menu" aria-labelledby="location">
                                            <span className="with-arrow"><span className /></span>
                                            <div className="dropdown-menu-body location-menu-body stopevent">
                                                <h4 className="menu-title">Location</h4>
                                                <select className="select2 form-control custom-select">
                                                    <option>Search By Location</option>
                                                    <option value="AK">Alaska</option>
                                                    <option value="HI">Hawaii</option>
                                                    <option value="CA">California</option>
                                                    <option value="NV">Nevada</option>
                                                    <option value="OR">Oregon</option>
                                                    <option value="WA">Washington</option>
                                                    <option value="AZ">Arizona</option>
                                                    <option value="CO">Colorado</option>
                                                    <option value="ID">Idaho</option>
                                                    <option value="MT">Montana</option>
                                                    <option value="NE">Nebraska</option>
                                                    <option value="NM">New Mexico</option>
                                                    <option value="ND">North Dakota</option>
                                                    <option value="UT">Utah</option>
                                                    <option value="WY">Wyoming</option>
                                                    <option value="AL">Alabama</option>
                                                    <option value="AR">Arkansas</option>
                                                    <option value="IL">Illinois</option>
                                                    <option value="IA">Iowa</option>
                                                    <option value="KS">Kansas</option>
                                                    <option value="KY">Kentucky</option>
                                                    <option value="LA">Louisiana</option>
                                                    <option value="MN">Minnesota</option>
                                                    <option value="MS">Mississippi</option>
                                                    <option value="MO">Missouri</option>
                                                    <option value="OK">Oklahoma</option>
                                                    <option value="SD">South Dakota</option>
                                                    <option value="TX">Texas</option>
                                                    <option value="TN">Tennessee</option>
                                                    <option value="WI">Wisconsin</option>
                                                    <option value="CT">Connecticut</option>
                                                    <option value="DE">Delaware</option>
                                                    <option value="FL">Florida</option>
                                                    <option value="GA">Georgia</option>
                                                    <option value="IN">Indiana</option>
                                                    <option value="ME">Maine</option>
                                                    <option value="MD">Maryland</option>
                                                    <option value="MA">Massachusetts</option>
                                                    <option value="MI">Michigan</option>
                                                    <option value="NH">New Hampshire</option>
                                                    <option value="NJ">New Jersey</option>
                                                    <option value="NY">New York</option>
                                                    <option value="NC">North Carolina</option>
                                                    <option value="OH">Ohio</option>
                                                    <option value="PA">Pennsylvania</option>
                                                    <option value="RI">Rhode Island</option>
                                                    <option value="SC">South Carolina</option>
                                                    <option value="VT">Vermont</option>
                                                    <option value="VA">Virginia</option>
                                                    <option value="WV">West Virginia</option>
                                                </select>
                                            </div>
                                            <div className="dropdown-menu-footer">
                                                <Link to="#" className="btn btn-primary btn-sm">Apply</Link>
                                            </div>
                                        </div>
                                    </div>
                                    {/* filter btn start */}
                                    <div className="btn-group " role="group">
                                        <button id="space-city" type="button" className="btn btn-outline-white btn-sm dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Space Type
                </button>
                                        <div className="dropdown-menu city-menu" aria-labelledby="space-city">
                                            <span className="with-arrow"><span className /></span>
                                            <div className="dropdown-menu-body city-menu-body stopevent">
                                                <h4 className="menu-title">Space Type</h4>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck14" />
                                                    <label className="custom-control-label" htmlFor="customCheck14">Office Space</label>
                                                </div>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck15" />
                                                    <label className="custom-control-label" htmlFor="customCheck15">Coworking Space</label>
                                                </div>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck16" />
                                                    <label className="custom-control-label" htmlFor="customCheck16">Meeting Space</label>
                                                </div>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck17" />
                                                    <label className="custom-control-label" htmlFor="customCheck17">Event Space</label>
                                                </div>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck18" />
                                                    <label className="custom-control-label" htmlFor="customCheck18">Retail Space</label>
                                                </div>
                                            </div>
                                            <div className="dropdown-menu-footer">
                                                <Link to="#" className="btn btn-primary btn-sm">Apply</Link>
                                            </div>
                                        </div>
                                    </div>
                                    {/* filter btn start */}
                                    <div className="btn-group" role="group">
                                        <button id="amenities" type="button" className="btn btn-outline-white btn-sm dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Amenities
                </button>
                                        <div className="dropdown-menu amenities-menu" aria-labelledby="amenities">
                                            <span className="with-arrow"><span className /></span>
                                            <div className="dropdown-menu-body amenities-menu-body stopevent">
                                                <h4 className="menu-title"> Amenities</h4>
                                                <div className="row">
                                                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
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
                                                            <input type="checkbox" className="custom-control-input" id="customCheck23" />
                                                            <label className="custom-control-label" htmlFor="customCheck23">Coffee/Tea</label>
                                                        </div>
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="customCheck24" />
                                                            <label className="custom-control-label" htmlFor="customCheck24">Door w/Lock</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="customCheck25" />
                                                            <label className="custom-control-label" htmlFor="customCheck25">Kitchen</label>
                                                        </div>
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="customCheck26" />
                                                            <label className="custom-control-label" htmlFor="customCheck26">Mailbox Services</label>
                                                        </div>
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
                                                    </div>
                                                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="customCheck31" />
                                                            <label className="custom-control-label" htmlFor="customCheck31">Catering</label>
                                                        </div>
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
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="customCheck36" />
                                                            <label className="custom-control-label" htmlFor="customCheck36">Storage</label>
                                                        </div>
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="customCheck37" />
                                                            <label className="custom-control-label" htmlFor="customCheck37">Window View</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="dropdown-menu-footer">
                                                <Link to="#" className="btn btn-primary btn-sm">Apply</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* listing map filter start */}
                <div className="listinghalfmap-wrapper">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12 pl-0 ">
                                {/* listsingle map start */}
                                <div className="listinghalfmap-content">
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                            {/* list block start */}
                                            <div className="listing-block" id="marker_1">
                                                <div className="listing-img">
                                                    <Link to="#"> <img src="./assets/images/listing-img-1.jpg" alt="" className="img-fluid" /></Link>
                                                    <div className="listing-badge">Featured</div>
                                                    <Link to="#" className="listing-category-badge badge-light-brose">
                                                        Office Space
                      </Link>
                                                    <div className="like-icon" />
                                                </div>
                                                <div className="listing-content">
                                                    <div className="listing-content-head">
                                                        <h3 className="listing-content-head-title"> <Link to="#">Heading for Office Space Title</Link></h3>
                                                        <p className="listing-content-head-text">Ahmedabad, Gujarat, India</p>
                                                    </div>
                                                    <div className="review-content-rating">
                                                        <span className="star" />
                                                        <span className="star" />
                                                        <span className="star" />
                                                        <span className="star" />
                                                        <span className="star empty" />
                                                        <Link to="#" className="rating-review">4.0</Link>
                                                    </div>
                                                    <div className="listing-content-meta">
                                                        <div className="row">
                                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                                                                <span className="lable">Monthly</span> <br /> <span className="value">$2250</span>
                                                            </div>
                                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                                                                <span className="lable">People</span> <br /> <span className="value">12</span>
                                                            </div>
                                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                                                                <span className="lable">Sq.Ft</span> <br /> <span className="value">1200</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* list block close */}
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                            {/* list block start */}
                                            <div className="listing-block" id="marker_2">
                                                <div className="listing-img">
                                                    <Link to="#"> <img src="./assets/images/listing-img-2.jpg" alt="" className="img-fluid" /></Link>
                                                    <Link to="#" className="listing-category-badge badge-light-orange">
                                                        Meeting Space
                      </Link>
                                                    <div className="like-icon" />
                                                </div>
                                                <div className="listing-content">
                                                    <div className="listing-content-head">
                                                        <h3 className="listing-content-head-title"> <Link to="#">Meeting Office Space Title</Link></h3>
                                                        <p className="listing-content-head-text">Surat, Gujarat, India</p>
                                                    </div>
                                                    <div className="review-content-rating">
                                                        <span className="star" />
                                                        <span className="star" />
                                                        <span className="star" />
                                                        <span className="star empty" />
                                                        <span className="star empty" />
                                                        <Link to="#" className="rating-review">5.0</Link>
                                                    </div>
                                                    <div className="listing-content-meta">
                                                        <div className="row">
                                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                                                                <span className="lable">Hourly</span> <br /> <span className="value">$50</span>
                                                            </div>
                                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                                                                <span className="lable">People</span> <br /> <span className="value">3</span>
                                                            </div>
                                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                                                                <span className="lable">Sq.Ft</span> <br /> <span className="value">360</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* list block close */}
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                            {/* list block start */}
                                            <div className="listing-block" id="marker_3">
                                                <div className="listing-img">
                                                    <Link to="#"> <img src="./assets/images/listing-img-3.jpg" alt="" className="img-fluid" /></Link>
                                                    <Link to="#" className="listing-category-badge badge-light-purple">
                                                        Coworking Space
                      </Link>
                                                    <div className="like-icon" />
                                                </div>
                                                <div className="listing-content">
                                                    <div className="listing-content-head">
                                                        <h3 className="listing-content-head-title"> <Link to="#">Coworking Office Space Title</Link></h3>
                                                        <p className="listing-content-head-text">Vadodara, Gujarat, India</p>
                                                    </div>
                                                    <div className="review-content-rating">
                                                        <span className="star" />
                                                        <span className="star" />
                                                        <span className="star" />
                                                        <span className="star half" />
                                                        <span className="star empty" />
                                                        <Link to="#" className="rating-review">4.5</Link>
                                                    </div>
                                                    <div className="listing-content-meta">
                                                        <div className="row">
                                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                                                                <span className="lable">Weekly</span> <br /> <span className="value">$250</span>
                                                            </div>
                                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                                                                <span className="lable">People</span> <br /> <span className="value">24</span>
                                                            </div>
                                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                                                                <span className="lable">Sq.Ft</span> <br /> <span className="value">2200</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* list block close */}
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                            {/* list block start */}
                                            <div className="listing-block" id="marker_4">
                                                <div className="listing-img">
                                                    <Link to="#"> <img src="./assets/images/listing-img-3.jpg" alt="" className="img-fluid" /></Link>
                                                    <Link to="#" className="listing-category-badge badge-light-brose">
                                                        Office Space
                      </Link>
                                                    <div className="like-icon" />
                                                </div>
                                                <div className="listing-content">
                                                    <div className="listing-content-head">
                                                        <h3 className="listing-content-head-title"> <Link to="#">Office Space Title</Link></h3>
                                                        <p className="listing-content-head-text">Bhuj, Gujarat, India</p>
                                                    </div>
                                                    <div className="review-content-rating">
                                                        <span className="star" />
                                                        <span className="star" />
                                                        <span className="star" />
                                                        <span className="star" />
                                                        <span className="star empty" />
                                                        <Link to="#" className="rating-review">4</Link>
                                                    </div>
                                                    <div className="listing-content-meta">
                                                        <div className="row">
                                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                                                                <span className="lable">Weekly</span> <br /> <span className="value">$350</span>
                                                            </div>
                                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                                                                <span className="lable">People</span> <br /> <span className="value">20</span>
                                                            </div>
                                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                                                                <span className="lable">Sq.Ft</span> <br /> <span className="value">2800</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* list block close */}
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                            {/* list block start */}
                                            <div className="listing-block" id="marker_5">
                                                <div className="listing-img">
                                                    <Link to="#"> <img src="./assets/images/listing-img-2.jpg" alt="" className="img-fluid" /></Link>
                                                    <Link to="#" className="listing-category-badge badge-light-orange">
                                                        Meeting Space
                      </Link>
                                                    <div className="like-icon" />
                                                </div>
                                                <div className="listing-content">
                                                    <div className="listing-content-head">
                                                        <h3 className="listing-content-head-title"> <Link to="#">Meeting Office Space Title</Link></h3>
                                                        <p className="listing-content-head-text">Surat, Gujarat, India</p>
                                                    </div>
                                                    <div className="review-content-rating">
                                                        <span className="star" />
                                                        <span className="star" />
                                                        <span className="star" />
                                                        <span className="star empty" />
                                                        <span className="star empty" />
                                                        <Link to="#" className="rating-review">5.0</Link>
                                                    </div>
                                                    <div className="listing-content-meta">
                                                        <div className="row">
                                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                                                                <span className="lable">Hourly</span> <br /> <span className="value">$50</span>
                                                            </div>
                                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                                                                <span className="lable">People</span> <br /> <span className="value">3</span>
                                                            </div>
                                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                                                                <span className="lable">Sq.Ft</span> <br /> <span className="value">360</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* list block close */}
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                            {/* list block start */}
                                            <div className="listing-block" id="marker_6">
                                                <div className="listing-img">
                                                    <Link to="#"> <img src="./assets/images/listing-img-1.jpg" alt="" className="img-fluid" /></Link>
                                                    <Link to="#" className="listing-category-badge badge-light-brose">
                                                        Office Space
                      </Link>
                                                    <div className="like-icon" />
                                                </div>
                                                <div className="listing-content">
                                                    <div className="listing-content-head">
                                                        <h3 className="listing-content-head-title"> <Link to="#">Heading for Office Space Title</Link></h3>
                                                        <p className="listing-content-head-text">Ahmedabad, Gujarat, India</p>
                                                    </div>
                                                    <div className="review-content-rating">
                                                        <span className="star" />
                                                        <span className="star" />
                                                        <span className="star" />
                                                        <span className="star" />
                                                        <span className="star empty" />
                                                        <Link to="#" className="rating-review">4.0</Link>
                                                    </div>
                                                    <div className="listing-content-meta">
                                                        <div className="row">
                                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                                                                <span className="lable">Monthly</span> <br /> <span className="value">$2250</span>
                                                            </div>
                                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                                                                <span className="lable">People</span> <br /> <span className="value">12</span>
                                                            </div>
                                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                                                                <span className="lable">Sq.Ft</span> <br /> <span className="value">1200</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* list block close */}
                                        </div>
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-3">
                                            {/* pagination start */}
                                            <nav aria-label="Page navigation example">
                                                <ul className="pagination">
                                                    <li className="page-item"><Link to="page-link" href="#">Previous</Link></li>
                                                    <li className="page-item active"><Link to="page-link" href="#">1</Link></li>
                                                    <li className="page-item"><Link to="page-link" href="#">2</Link></li>
                                                    <li className="page-item"><Link to="page-link" href="#">3</Link></li>
                                                    <li className="page-item"><Link to="page-link" href="#">Next</Link></li>
                                                </ul>
                                            </nav>
                                            {/* pagination close */}
                                        </div>
                                    </div>
                                </div>
                                {/* listsingle map close */}
                            </div>
                            <div className="col-xl-7 col-lg-6 col-md-12 col-sm-12 col-12 pl-0 order-1">
                                <div id="map" className="listinghalfmap-map" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tiny-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                <p className="tiny-footer-text">Copyright © 2020 Spacely Companies Inc. All rights reserved</p>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="tiny-footer-links">
                                    <ul>
                                        <li><Link to="#">Privacy</Link></li>
                                        <li><Link to="#">Terms</Link></li>
                                        <li><Link to="#">Cookies</Link></li>
                                        <li><Link to="#">FAQ</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ListingWithMap
