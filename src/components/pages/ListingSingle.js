import React from 'react'
import Navbar from '../layout/Navbar'

const ListingSingle = () => {
    return (
        <div>
            <div className="main-wrapper">
                <Navbar/>
                <div className="listing-slider-section">
                    <div className="listing-slider">
                        <div className="item"><img src="./assets/images/listing-slider-img-1.jpg" alt="" /></div>
                        <div className="item"><img src="./assets/images/listing-slider-img-2.jpg" alt="" /></div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                {/* listing badges start */}
                                <div className="listing-badges">
                                    <div className="badge badge-success badge-pill"><i className="fas fa-award mr-2" />Verified Space</div>
                                    <div className="like-button">
                                        <div className="like-icon" />
                                    </div>
                                </div>
                                {/* listing badges close */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* listing slider close */}
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            {/* listing nav start */}
                            <div className="listing-nav sticky">
                                <ul>
                                    <li>
                                        <a className="page-scroll" href="#overview">Overview </a>
                                    </li>
                                    <li>
                                        <a className="page-scroll" href="#about">About</a>
                                    </li>
                                    <li>
                                        <a className="page-scroll" href="#amenities">Amenities</a>
                                    </li>
                                    <li>
                                        <a className="page-scroll" href="#video">Video</a>
                                    </li>
                                    <li>
                                        <a className="page-scroll" href="#review">Reviews</a>
                                    </li>
                                    <li>
                                        <a className="page-scroll" href="#location">Location</a>
                                    </li>
                                    <li>
                                        <a className="page-scroll" href="#similarspace">Similar Space</a>
                                    </li>
                                </ul>
                            </div>
                            {/* listing nav close */}
                        </div>
                    </div>
                </div>
                <div className="listing-detail-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 col-lg-8 col-md-7 col-sm-12 col-12">
                                <div className="listing-detail-header" id="overview">
                                    {/* listing detail head start */}
                                    <div className="listing-detail-head">
                                        <h2 className="listing-detail-head-title">Heading Title for Office Space Building</h2>
                                        <p className="listing-detail-head-text"><span className="map-icon"><i className="fas fa-map-marker-alt" /></span>26, Deccan Gymkhana, Ludhiana - 369227 <a href="#location" className="btn-link ml-2 page-scroll">See Location</a></p>
                                    </div>
                                    <div className="listing-detail-body">
                                        <div className="row no-gutters">
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6 border-right">
                                                <div className="listing-detail-body-meta">
                                                    <div className="meta-icon"> <i className="fas fa-calendar-alt" /></div>
                                                    <h4 className="meta-lable">1 Year</h4>
                                                    <span className="meta-value">Minimum term</span>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6 border-right">
                                                <div className="listing-detail-body-meta">
                                                    <div className="meta-icon"> <i className="fas fa-vector-square" /></div>
                                                    <h4 className="meta-lable">180 SqFt</h4>
                                                    <span className="meta-value">Size</span>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6 border-right">
                                                <div className="listing-detail-body-meta">
                                                    <div className="meta-icon"> <i className="fas fa-users" /></div>
                                                    <h4 className="meta-lable">10</h4>
                                                    <span className="meta-value">People</span>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                                                <div className="listing-detail-body-meta">
                                                    <div className="meta-icon"> <i className="fas fa-chair" /></div>
                                                    <h4 className="meta-lable">Office Spaces</h4>
                                                    <span className="meta-value">Space Type</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* listing detail head close */}
                                </div>
                                {/* listing detail start */}
                                <div className="listing-detail-card" id="about">
                                    <h4 className="listing-detail-card-title">Description</h4>
                                    <p>Nulla scelerisque varius nibh eleifend dictum. Integer laoreet dolor nec augue porta ornare. Praesent eget rhoncus velit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent condimentum est purus, ac scelerisque velit tincidunt sed.</p>
                                    <p>Mauris imperdiet, diam vel accumsan vehicula, risus lectus vehicula quam, sed aliquet sapien mauris et tortor. Aenean risus nisi, tristique hendrerit enim eget, tristique blandit nulla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi vitae eleifend ante, sit amet varius libero.</p>
                                    <p>Tmattis quam libero, a lacinia leo congue sit amet. Nulla et cursus purus, ac laoreet mi. In dignissim justo non augue rutrum tempus. Praesent id nisi in tellus maximus porta nec at dui. Phasellus non suscipit turpis, in lobortis eros. Suspendisse ullamcorper a ligula non efficitur. Curabitur interdum consectetur purus.</p>
                                </div>
                                {/* listing detail close */}
                                {/* listing detail start */}
                                <div className="listing-detail-card amenities" id="amenities">
                                    <h4 className="listing-detail-card-title">Amenities</h4>
                                    <ul className="list-inline">
                                        <li className="list-inline-item">WiFi</li>
                                        <li className="list-inline-item">Parking</li>
                                        <li className="list-inline-item">24/7 access</li>
                                        <li className="list-inline-item">Kitchen</li>
                                        <li className="list-inline-item">Phone</li>
                                        <li className="list-inline-item">Receptionist</li>
                                        <li className="list-inline-item">Scan</li>
                                        <li className="list-inline-item">Tea &amp; coffee</li>
                                    </ul>
                                </div>
                                {/* listing detail close */}
                                {/* listing detail start */}
                                <div className="listing-detail-card video" id="video">
                                    <h4 className="listing-detail-card-title">Video</h4>
                                    <div className="video-testimonial-block">
                                        <div className="video-thumbnail"><img src="./assets/images/video-play-img.jpg" alt="" className="img-fluid" /></div>
                                        <div className="video">
                                            <div className="embed-responsive embed-responsive-16by9">
                                                <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowFullScreen />
                                            </div>
                                        </div>
                                        <a href="#" className="video-play" />
                                    </div>
                                </div>
                                {/* listing detail close */}
                                {/* listing detail start */}
                                <div className="listing-detail-card reviews" id="review">
                                    <div className="d-lg-flex justify-content-between mb-4">
                                        <h4 className="listing-detail-card-title mb-xl-0 pt-xl-2">2 Review on office space listing</h4>
                                        <a href="#reviewform" className="btn btn-primary page-scroll">Write a review</a>
                                    </div>
                                    <div className="review-block">
                                        <div className="review-block-img"><img src="./assets/images/avatar-1.jpg" alt="" className="rounded-circle" /></div>
                                        <div className="review-content">
                                            <div className="review-content-head">
                                                <h3 className="review-content-title">Doris Knapp</h3>
                                                <div className="review-content-rating">
                                                    <span className="star" />
                                                    <span className="star" />
                                                    <span className="star" />
                                                    <span className="star half" />
                                                    <span className="star empty" />
                                                    <span className="review-content-date">30 May, 2019</span>
                                                </div>
                                            </div>
                                            <p className="review-content-heading-text text-dark">Good budget workspacer</p>
                                            <p className="review-content-text">I highly recommend this places lorem dignissim at. Nunc quis mag na non miquis magna eleifend vestibulum quis magna. Aliquam aliquam viverra nisl, id malesuada urna finibus at. Cras tristique felis risus, eget auctor mi sagittis quis. Nulla placerat ultrices metus a commodo.
                  </p>
                                        </div>
                                    </div>
                                    <div className="review-block">
                                        <div className="review-block-img"><img src="./assets/images/avatar-2.jpg" alt="" className="rounded-circle" /></div>
                                        <div className="review-content">
                                            <div className="review-content-head">
                                                <h3 className="review-content-title">Yami Myles</h3>
                                                <div className="review-content-rating">
                                                    <span className="star" />
                                                    <span className="star" />
                                                    <span className="star" />
                                                    <span className="star " />
                                                    <span className="star empty" />
                                                    <span className="review-content-date">30 May, 2019</span>
                                                </div>
                                            </div>
                                            <p className="review-content-heading-text text-dark">Awesome office space</p>
                                            <p className="review-content-text">Aliquam porttitor, purus eleifend egestas finibus, orci neque dictum metus, et finibus elit dui sit amet nibh. Ut eu nibh etspendisse lacinia accumsan felis. Aliquam porttitor, purus eleifend egestas finibus, orci neque dictum metus et finibus elit dui sit amet nibh.
                  </p>
                                        </div>
                                    </div>
                                </div>
                                {/* listing detail close */}
                                {/* listing detail start */}
                                <div className="listing-detail-card review-form " id="reviewform">
                                    <h4 className="listing-detail-card-title">Write a Review</h4>
                                    <div id="rating-star" className="mb-3" />
                                    <form className="form-row">
                                        <div className="form-group col-12">
                                            <label htmlFor="reviewtitle">Review Title<span className="require-mark">*</span></label>
                                            <input type="text" name="title" className="form-control" id="reviewtitle" aria-describedby="reviewtitle" placeholder="Write Review Title" required />
                                        </div>
                                        <div className="form-group col-6">
                                            <label htmlFor="reviewtitle">Name<span className="require-mark">*</span></label>
                                            <input type="text" name="name" className="form-control" id="reviewname" aria-describedby="reviewname" placeholder="John Deo" required />
                                        </div>
                                        <div className="form-group col-6">
                                            <label htmlFor="reviewemail">Email<span className="require-mark">*</span></label>
                                            <input type="email" name="email" className="form-control" id="reviewemail" aria-describedby="reviewemail" placeholder="Enter email" required />
                                        </div>
                                        <div className="form-group col-12">
                                            <label htmlFor="reviewdescription">Review Description</label>
                                            <textarea className="form-control" id="reviewdescription" rows={3} defaultValue={""} />
                                        </div>
                                        <div className="review-form-btn">
                                            <button type="submit" className="btn btn-primary btn-sm">Submit review</button>
                                            <small className="require-text">* Required Filed</small>
                                        </div>
                                    </form>
                                </div>
                                {/* listing detail close */}
                                {/* listing detail start */}
                                <div className="listing-detail-card listing-location " id="location">
                                    <h4 className="listing-detail-card-title mb-1">Location</h4>
                                    <p>26, Deccan Gymkhana, Ludhiana - 369227</p>
                                    <div id="listing-map" />
                                </div>
                                {/* listing detail close */}
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-5 col-sm-12 col-12">
                                {/* listing detail start */}
                                <div className="listing-sidebar">
                                    {/* listing widget start */}
                                    <div className="listing-sidebar-widget">
                                        <div className="listing-sidebar-widget-content widget-price">
                                            <p className="widget-price-value">$ 2,550 <span className="widget-price-month">/Month</span></p>
                                        </div>
                                    </div>
                                    {/* listing widget close */}
                                    {/* listing widget start */}
                                    <div className="listing-sidebar-widget">
                                        <h3 className="listing-widget-title">Booking Availability</h3>
                                        <div className="listing-sidebar-widget-content">
                                            <div id="datepicker-inline" />
                                            <a href="#" className="btn btn-primary btn-block">Request to book</a>
                                        </div>
                                    </div>
                                    {/* listing widget close */}
                                    {/* listing widget start */}
                                    <div className="listing-sidebar-widget">
                                        <h3 className="listing-widget-title">Contact a Property Owner</h3>
                                        <div className="listing-sidebar-widget-content">
                                            <div className="contact-details">
                                                <div className="profile-img"><img src="./assets/images/avatar-2.jpg" alt="" /></div>
                                                <h4 className="profile-name">Joanne Mitchell</h4>
                                            </div>
                                            <a href="JavaScript:void(0);" className="btn btn-outline-primary btn-block">
                                                <span data-replace="555-555-1212">555-XX-XXXX</span></a>
                                        </div>
                                    </div>
                                    {/* listing widget close */}
                                    {/* listing widget start */}
                                    <div className="listing-sidebar-widget">
                                        <div className="listing-sidebar-widget-content">
                                            <div className="social-media">
                                                <a href="#"><i className="fab fa-facebook-f" /></a>
                                                <a href="#"><i className="fab fa-twitter" /></a>
                                                <a href="#"><i className="fab fa-linkedin-in" /></a>
                                                <a href="#"><i className="fab fa-pinterest-p" /></a>
                                                <a href="#"><i className="fab fa-instagram" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* listing widget close */}
                                    {/* listing siebar form */}
                                    <div className="listing-sidebar-widget">
                                        <h3 className="listing-widget-title">Request Quote</h3>
                                        <div className="listing-sidebar-widget-content quote-form">
                                            <form className="form-row">
                                                <div className="form-group col-12">
                                                    <label htmlFor="quotetitle">Name<span className="require-mark">*</span></label>
                                                    <input type="text" name="name" className="form-control" id="quotetitle" aria-describedby="quotename" placeholder="John Deo" required />
                                                </div>
                                                <div className="form-group col-12">
                                                    <label htmlFor="quoteemail">Email<span className="require-mark">*</span></label>
                                                    <input type="email" name="email" className="form-control" id="quoteemail" aria-describedby="quoteemail" placeholder="Enter email" required />
                                                </div>
                                                <div className="form-group col-12">
                                                    <label htmlFor="quotephone">Phone<span className="require-mark">*</span></label>
                                                    <input type="tel" name="phone" className="form-control" id="quotephone" aria-describedby="quotephone" placeholder={+91} required />
                                                </div>
                                                <div className="form-group col-12">
                                                    <label htmlFor="datepicker">Availability<span className="require-mark">*</span></label>
                                                    <div className="input-group">
                                                        <input type="text" className="form-control" id="datepicker" placeholder="mm/dd/yyyy" />
                                                        <div className="input-group-append">
                                                            <span className="input-group-text"><i className="fas fa-calendar-alt" /></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group col-12">
                                                    <label htmlFor="quotedescription">Message to Host</label>
                                                    <textarea className="form-control" id="quotedescription" rows={4} placeholder="Write short message to host" defaultValue={""} />
                                                </div>
                                                <button type="submit" className="btn btn-primary btn-block">Send Request Quote</button>
                                            </form>
                                        </div>
                                    </div>
                                    {/* listing siebar form */}
                                </div>
                                {/* listing detail close */}
                            </div>
                        </div>
                    </div>
                    <div className="space-lg space-md space-xs" id="similarspace">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-5">
                                    <h2>Discover similar spaces you’ll love.</h2>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                    {/* listing block start */}
                                    <div className="listing-block">
                                        <div className="listing-img">
                                            <a href="#"> <img src="./assets/images/listing-img-1.jpg" alt="" className="img-fluid" /></a>
                                            <div className="listing-badge">Featured</div>
                                            <a href="#" className="listing-category-badge badge-light-brose">
                                                Office Space
                  </a>
                                            <div className="like-icon" />
                                        </div>
                                        <div className="listing-content">
                                            <div className="listing-content-head">
                                                <h3 className="listing-content-head-title"> <a href="#">Heading for Office Space Title</a></h3>
                                                <p className="listing-content-head-text">Ahmedabad, Gujarat, India</p>
                                            </div>
                                            <div className="review-content-rating">
                                                <span className="star" />
                                                <span className="star" />
                                                <span className="star" />
                                                <span className="star" />
                                                <span className="star empty" />
                                                <a href="#" className="rating-review">4.0</a>
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
                                    {/* listing block close */}
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                    {/* listing block start */}
                                    <div className="listing-block">
                                        <div className="listing-img">
                                            <a href="#"> <img src="./assets/images/listing-img-2.jpg" alt="" className="img-fluid" /></a>
                                            <a href="#" className="listing-category-badge badge-light-orange">
                                                Meeting Space
                  </a>
                                            <div className="like-icon" />
                                        </div>
                                        <div className="listing-content">
                                            <div className="listing-content-head">
                                                <h3 className="listing-content-head-title"> <a href="#">Meeting Office Space Title</a></h3>
                                                <p className="listing-content-head-text">Surat, Gujarat, India</p>
                                            </div>
                                            <div className="review-content-rating">
                                                <span className="star" />
                                                <span className="star" />
                                                <span className="star" />
                                                <span className="star empty" />
                                                <span className="star empty" />
                                                <a href="#" className="rating-review">5.0</a>
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
                                    {/* listing block close */}
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                    {/* listing block start */}
                                    <div className="listing-block">
                                        <div className="listing-img">
                                            <a href="#"> <img src="./assets/images/listing-img-3.jpg" alt="" className="img-fluid" /></a>
                                            <a href="#" className="listing-category-badge badge-light-purple">
                                                Coworking Space
                  </a>
                                            <div className="like-icon" />
                                        </div>
                                        <div className="listing-content">
                                            <div className="listing-content-head">
                                                <h3 className="listing-content-head-title"> <a href="#">Coworking Office Space Title</a></h3>
                                                <p className="listing-content-head-text">Vadodara, Gujarat, India</p>
                                            </div>
                                            <div className="review-content-rating">
                                                <span className="star" />
                                                <span className="star" />
                                                <span className="star" />
                                                <span className="star half" />
                                                <span className="star empty" />
                                                <a href="#" className="rating-review">4.5</a>
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
                                    {/* listing block close */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* footer section start */}
                <div className="footer-dark">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12">
                                {/* footer widget  */}
                                <div className="footer-widget">
                                    <div className="brand-logo"><img src="./assets/images/primary-white-logo.png" alt="" /></div>
                                    <p className="footer-widget-text">Welcome to the largest office space marketplace in the world. This is your one-stop shop for renting coworking space, serviced offices, shared office space and virtual offices in World. </p>
                                    <div className="footer-location">
                                        <p className="phone-numbers">1800 123 345 789</p>
                                        <p className="address">3 Doris St, North Sydney, NSW 2060</p>
                                    </div>
                                    <div className="social-media">
                                        <a href="#"><i className="fab fa-facebook-square" /></a>
                                        <a href="#"><i className="fab fa-twitter-square" /></a>
                                        <a href="#"><i className="fab fa-linkedin" /></a>
                                        <a href="#"><i className="fab fa-pinterest-square" /></a>
                                        <a href="#"><i className="fab fa-instagram" /></a>
                                    </div>
                                </div>
                            </div>
                            {/* footer widget  */}
                            <div className="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-6">
                                <div className="footer-widget">
                                    <h3 className="footer-widget-title">Type of spaces</h3>
                                    <div className="footer-links">
                                        <ul className="list-unstyled">
                                            <li><a href="#">Coworking space</a></li>
                                            <li><a href="#">Meeting space</a></li>
                                            <li><a href="#">Office space</a></li>
                                            <li><a href="#">Retail Space</a></li>
                                            <li><a href="#">Event space</a></li>
                                            <li><a href="#">Virtual Space</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* footer widget  */}
                            <div className="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-6">
                                <div className="footer-widget">
                                    <h3 className="footer-widget-title">Company</h3>
                                    <div className="footer-links">
                                        <ul className="list-unstyled">
                                            <li><a href="#">About us</a></li>
                                            <li><a href="#">Careers</a></li>
                                            <li><a href="#">Clients</a></li>
                                            <li><a href="#">Team</a> </li>
                                            <li><a href="#">Help Center</a></li>
                                            <li><a href="#">Press</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* footer widget  */}
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                                <div className="footer-widget">
                                    <h3 className="footer-widget-title">Language</h3>
                                    <div className="footer-langauge">
                                        <select className="form-control" id="select2-flag-icons">
                                            <option value="AK" data-flag="ad"> Alaska</option>
                                            <option value="HI" data-flag="ae"> Hawaii</option>
                                            <option value="in" data-flag="in"> India</option>
                                            <option value="CA" data-flag="af"> California</option>
                                            <option value="NV" data-flag="ag"> Nevada</option>
                                            <option value="OR" data-flag="ao"> Oregon</option>
                                            <option value="WA" data-flag="at"> Washington</option>
                                            <option value="AZ" data-flag="gm"> Arizona</option>
                                            <option value="CO" data-flag="az"> Colorado</option>
                                            <option value="ID" data-flag="be"> Idaho</option>
                                            <option value="MT" data-flag="bi"> Montana</option>
                                            <option value="NE" data-flag="bn"> Nebraska</option>
                                            <option value="NM" data-flag="aw"> New Mexico</option>
                                            <option value="ND" data-flag="bj"> North Dakota</option>
                                            <option value="UT" data-flag="bh"> Utah</option>
                                            <option value="WY" data-flag="bm"> Wyoming</option>
                                            <option value="AL" data-flag="br"> Alabama</option>
                                            <option value="AR" data-flag="bs"> Arkansas</option>
                                            <option value="IL" data-flag="au"> Illinois</option>
                                            <option value="IA" data-flag="ba"> Iowa</option>
                                            <option value="KS" data-flag="bt"> Kansas</option>
                                            <option value="KY" data-flag="bq"> Kentucky</option>
                                            <option value="LA" data-flag="ci"> Louisiana</option>
                                            <option value="MN" data-flag="cn"> Minnesota</option>
                                            <option value="MS" data-flag="cz"> Mississippi</option>
                                            <option value="MO" data-flag="ec"> Missouri</option>
                                            <option value="OK" data-flag="dk"> Oklahoma</option>
                                            <option value="SD" data-flag="cz"> South Dakota</option>
                                            <option value="TX" data-flag="ee"> Texas</option>
                                            <option value="TN" data-flag="cl"> Tennessee</option>
                                            <option value="WI" data-flag="cf"> Wisconsin</option>
                                            <option value="CT" data-flag="co"> Connecticut</option>
                                            <option value="DE" data-flag="cy"> Delaware</option>
                                            <option value="FL" data-flag="cu"> Florida</option>
                                            <option value="GA" data-flag="cn"> Georgia</option>
                                            <option value="IN" data-flag="cz"> Indiana</option>
                                            <option value="ME" data-flag="dm"> Maine</option>
                                            <option value="MD" data-flag="ec"> Maryland</option>
                                            <option value="MA" data-flag="cw"> Massachusetts</option>
                                            <option value="MI" data-flag="ee"> Michigan</option>
                                            <option value="NH" data-flag="hm"> New Hampshire</option>
                                            <option value="NJ" data-flag="gu"> New Jersey</option>
                                            <option value="NY" data-flag="hr"> New York</option>
                                            <option value="NC" data-flag="gr"> North Carolina</option>
                                            <option value="OH" data-flag="hn"> Ohio</option>
                                            <option value="PA" data-flag="hk"> Pennsylvania</option>
                                            <option value="RI" data-flag="ht"> Rhode Island</option>
                                            <option value="SC" data-flag="hu"> South Carolina</option>
                                            <option value="VT" data-flag="il"> Vermont</option>
                                            <option value="VA" data-flag="im"> Virginia</option>
                                            <option value="WV" data-flag="gi"> West Virginia</option>
                                        </select>
                                    </div>
                                </div>
                                {/* footer widget  */}
                            </div>
                        </div>
                    </div>
                    {/* tiny footer  */}
                    <div className="tiny-footer">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                    <p className="tiny-footer-text">Copyright © 2020 Spacely Companies Inc. All rights reserved</p>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                    <div className="tiny-footer-links">
                                        <ul>
                                            <li><a href="#">Privacy</a></li>
                                            <li><a href="#">Terms</a></li>
                                            <li><a href="#">Cookies</a></li>
                                            <li><a href="#">FAQ</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* footer section close  */}
                </div>
                {/* footer section close */}
            </div>
        </div>

    )
}

export default ListingSingle
