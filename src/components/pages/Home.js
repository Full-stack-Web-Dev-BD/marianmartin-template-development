import React from 'react'
import Footer from '../layout/Footer'
import Navbar from '../layout/Navbar'

function Home() {
    return (
        <div>

            <div className="main-wrapper">
                {/* header start */}
                <Navbar />
                {/* header close */}
                <div className="container-fluid">
                    {/* hero section start  */}
                    <div className="hero-slider-section">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="hero-slider">
                                    {/* hero slider item start  */}
                                    <div className="hero-slider-item">
                                        <img src="./assets/images/hero-slide-img-1.jpg" alt="" className="img-fluid" />
                                    </div>
                                    <div className="hero-slider-item">
                                        <img src="./assets/images/hero-slide-img-2.jpg" alt="" className="img-fluid" />
                                    </div>
                                    <div className="hero-slider-item">
                                        <img src="./assets/images/hero-slide-img-3.jpg" alt="" className="img-fluid" />
                                    </div>
                                    {/* hero slider item close  */}
                                </div>
                            </div>
                        </div>
                        {/* hero serach area start  */}
                        <div className="hero-search-area">
                            <div className="row">
                                <div className="offset-xl-2 col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div className="hero-search-area-caption">
                                        <h1 className="hero-search-area-caption-title">The Best Offices to Work in Your City</h1>
                                        <p className="hero-search-area-caption-text">Book from thousands of unique work and meeting spaces.</p>
                                    </div>
                                    <div className="hero-search-area-form">
                                        <form className="form-row">
                                            <div className="col-xl-4 col-lg-4 col-md-5 col-sm-12 col-12">
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
                                                    <option value="IN">India</option>
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
                                            <div className="col-xl-4 col-lg-4 col-md-5 col-sm-12 col-12">
                                                <select className="select2 form-control custom-select">
                                                    <option>All Space</option>
                                                    <option value="United States">Meeting Space</option>
                                                    <option value="United Kingdom">Coworking Space</option>
                                                    <option value="Afghanistan">Office space</option>
                                                    <option value="Aland Islands">Retail Space</option>
                                                    <option value="Albania">Event Space</option>
                                                    <option value="Algeria">Virtual Office</option>
                                                </select>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-2 col-sm-12 col-12">
                                                <a href="#" className="btn btn-primary btn-lg">Search</a>
                                            </div>
                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                                <p className="hero-search-area-form-small-text">Top cities:<a href="listing-location.html"> New York</a>, <a href="listing-location.html">San Francisco</a>, <a href="listing-location.html">Los Angeles</a>, <a href="listing-location.html">Chicago</a>, <a href="listing-location.html">Houston</a></p>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* hero serach area close  */}
                    </div>
                </div>
                <div className="space-lg space-md space-xs">
                    <div className="container-fluid">
                        <div className="row">
                            {/* section heading start  */}
                            <div className="offset-xl-2 col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="section-heading text-center">
                                    <h2 className="section-heading-title">Types of office space available </h2>
                                    <p className="section-heading-text lead">Explore the different types of office space availableto rentand discover <br /> which is right for your business.</p>
                                </div>
                            </div>
                            {/* section heading close  */}
                        </div>
                        <div className="row">
                            <div className="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-6">
                                {/* space showcase start  */}
                                <a href="listing-single.html" className="space-showcase-block">
                                    <div className="space-showcase-img zoom-img">
                                        <img src="./assets/images/space-img-1.jpg" alt="" className="img-fluid" />
                                    </div>
                                    <div className="space-showcase-content">
                                        <h3 className="space-showcase-content-title">Meeting space</h3>
                                    </div>
                                </a>
                                {/* space showcase close  */}
                            </div>
                            {/* space showcase start  */}
                            <div className="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-6">
                                <a href="listing-single.html" className="space-showcase-block">
                                    <div className="space-showcase-img zoom-img">
                                        <img src="./assets/images/space-img-2.jpg" alt="" className="img-fluid" />
                                    </div>
                                    <div className="space-showcase-content">
                                        <h3 className="space-showcase-content-title">Coworking space</h3>
                                    </div>
                                </a>
                            </div>
                            {/* space showcase close  */}
                            {/* space showcase start  */}
                            <div className="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-6">
                                <a href="listing-single.html" className="space-showcase-block">
                                    <div className="space-showcase-img zoom-img">
                                        <img src="./assets/images/space-img-3.jpg" alt="" className="img-fluid" />
                                    </div>
                                    <div className="space-showcase-content">
                                        <h3 className="space-showcase-content-title">Office space</h3>
                                    </div>
                                </a>
                            </div>
                            {/* space showcase close  */}
                            {/* space showcase start  */}
                            <div className="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-6">
                                <a href="listing-single.html" className="space-showcase-block">
                                    <div className="space-showcase-img zoom-img">
                                        <img src="./assets/images/space-img-4.jpg" alt="" className="img-fluid" />
                                    </div>
                                    <div className="space-showcase-content">
                                        <h3 className="space-showcase-content-title">Retail space</h3>
                                    </div>
                                </a>
                            </div>
                            {/* space showcase close  */}
                            {/* space showcase start  */}
                            <div className="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-6">
                                <a href="listing-single.html" className="space-showcase-block">
                                    <div className="space-showcase-img zoom-img">
                                        <img src="./assets/images/space-img-5.jpg" alt="" className="img-fluid" />
                                    </div>
                                    <div className="space-showcase-content">
                                        <h3 className="space-showcase-content-title">Event space</h3>
                                    </div>
                                </a>
                            </div>
                            {/* space showcase close  */}
                            {/* space showcase start  */}
                            <div className="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-6">
                                <a href="listing-single.html" className="space-showcase-block">
                                    <div className="space-showcase-img zoom-img">
                                        <img src="./assets/images/space-img-6.jpg" alt="" className="img-fluid" />
                                    </div>
                                    <div className="space-showcase-content">
                                        <h3 className="space-showcase-content-title">Virtual office</h3>
                                    </div>
                                </a>
                            </div>
                            {/* space showcase close  */}
                        </div>
                    </div>
                </div>
                <div className="space-lg space-md space-xs pt-4">
                    <div className="container">
                        <div className="row">
                            {/* section heading start  */}
                            <div className="offset-xl-2 col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="section-heading text-center">
                                    <h2 className="section-heading-title">Explore our available office spaces</h2>
                                    <p className="section-heading-text lead">Etiam condimentum augue ac nunc commodo euismo aecenas vitae lectus ornare, ornare velit nec, volutpat lacus.</p>
                                </div>
                            </div>
                            {/* section heading close  */}
                        </div>
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                {/* listing block start  */}
                                <div className="listing-block">
                                    <div className="listing-img">
                                        <a href="listing-single.html"> <img src="./assets/images/listing-img-1.jpg" alt="" className="img-fluid" /></a>
                                        <div className="listing-badge">Featured</div>
                                        <a href="listing-single.html" className="listing-category-badge badge-light-brose">
                                            Office Space
                </a>
                                        <div className="like-icon" />
                                    </div>
                                    <div className="listing-content">
                                        <div className="listing-content-head">
                                            <h3 className="listing-content-head-title"> <a href="listing-single.html">Heading for Office Space Title</a></h3>
                                            <p className="listing-content-head-text">Ahmedabad, Gujarat, India</p>
                                        </div>
                                        <div className="review-content-rating">
                                            <span className="star" />
                                            <span className="star" />
                                            <span className="star" />
                                            <span className="star" />
                                            <span className="star empty" />
                                            <a href="listing-single.html" className="rating-review">4.0</a>
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
                                {/* listing block close  */}
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                {/* listing block start  */}
                                <div className="listing-block">
                                    <div className="listing-img">
                                        <a href="listing-single.html"> <img src="./assets/images/listing-img-2.jpg" alt="" className="img-fluid" /></a>
                                        <a href="listing-single.html" className="listing-category-badge badge-light-orange">
                                            Meeting Space
                </a>
                                        <div className="like-icon" />
                                    </div>
                                    <div className="listing-content">
                                        <div className="listing-content-head">
                                            <h3 className="listing-content-head-title"> <a href="listing-single.html">Meeting Office Space Title</a></h3>
                                            <p className="listing-content-head-text">Surat, Gujarat, India</p>
                                        </div>
                                        <div className="review-content-rating">
                                            <span className="star" />
                                            <span className="star" />
                                            <span className="star" />
                                            <span className="star empty" />
                                            <span className="star empty" />
                                            <a href="listing-single.html" className="rating-review">5.0</a>
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
                                {/* listing block close  */}
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                {/* listing block start  */}
                                <div className="listing-block">
                                    <div className="listing-img">
                                        <a href="listing-single.html"> <img src="./assets/images/listing-img-3.jpg" alt="" className="img-fluid" /></a>
                                        <a href="listing-single.html" className="listing-category-badge badge-light-purple">
                                            Coworking Space
                </a>
                                        <div className="like-icon" />
                                    </div>
                                    <div className="listing-content">
                                        <div className="listing-content-head">
                                            <h3 className="listing-content-head-title"> <a href="listing-single.html">Coworking Office Space Title</a></h3>
                                            <p className="listing-content-head-text">Vadodara, Gujarat, India</p>
                                        </div>
                                        <div className="review-content-rating">
                                            <span className="star" />
                                            <span className="star" />
                                            <span className="star" />
                                            <span className="star half" />
                                            <span className="star empty" />
                                            <a href="listing-single.html" className="rating-review">4.5</a>
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
                                {/* listing block close  */}
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-center mt-3">
                                <a href="listing-categories.html" className="btn btn-outline-primary">Browse all space</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="space-lg space-md space-xs bg-light rounded">
                    <div className="container">
                        <div className="row">
                            <div className="offset-xl-2 col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12">
                                {/* section heading start  */}
                                <div className="section-heading text-center">
                                    <h2 className="section-heading-title">How it Works?</h2>
                                    <p className="section-heading-text lead">Aliquam sagittis consectetur ligulan aliquam turpis cursus at. In aliquet auguenec libero ultricies velit pellentesque.</p>
                                </div>
                                {/* section heading close  */}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                {/* process block start  */}
                                <div className="process-block">
                                    <div className="process-block-number">1</div>
                                    <div className="process-content">
                                        <div className="process-content-icon">
                                            <img src="./assets/images/location-map.png" alt="" />
                                        </div>
                                        <h3 className="process-content-title">List your space</h3>
                                        <p>It takes no longer than 15 minutes to list your space on spacely. Our user friendly onboarding process! </p>
                                    </div>
                                </div>
                                {/* process block close  */}
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                {/* process block start  */}
                                <div className="process-block">
                                    <div className="process-block-number">2</div>
                                    <div className="process-content">
                                        <div className="process-content-icon">
                                            <img src="./assets/images/graph-icon.png" alt="" />
                                        </div>
                                        <h3 className="process-content-title">Get more orders</h3>
                                        <p>Right after you complete the onboarding process, we will publish your workspace on our marketplace. </p>
                                    </div>
                                </div>
                                {/* process block close  */}
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                {/* process block start  */}
                                <div className="process-block">
                                    <div className="process-block-number">3</div>
                                    <div className="process-content">
                                        <div className="process-content-icon">
                                            <img src="./assets/images/money-icon.png" alt="" />
                                        </div>
                                        <h3 className="process-content-title">Earn money</h3>
                                        <p>Orders coming from spacely are 100% prepaid. We will bring you not just leads but new clients.</p>
                                    </div>
                                </div>
                                {/* process block close  */}
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-center mt-5">
                                <a href="register-page.html" className="btn btn-outline-primary">List your space</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="space-lg space-md space-xs">
                    <div className="container">
                        <div className="row">
                            <div className="offset-xl-2 col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12 text-center mb-5 ">
                                {/* section heading start  */}
                                <div className="section-heading">
                                    <h2 className="section-heading-title">Market leaders are already with us </h2>
                                    <p className="lead">The largest coworking and smart office spaces across world chose to work with us. Dozens of smart spaces use our software to manage hundreds of locations.
              </p>
                                </div>
                                {/* section heading close  */}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
                                {/* client logo start  */}
                                <div className="client-logo">
                                    <img src="./assets/images/logo-buffer.png" alt="" className="img-fluid" />
                                </div>
                                {/* client logo close  */}
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
                                {/* client logo start  */}
                                <div className="client-logo">
                                    <img src="./assets/images/logo-buzzumo.png" alt="" className="img-fluid" />
                                </div>
                                {/* client logo close  */}
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
                                {/* client logo start  */}
                                <div className="client-logo">
                                    <img src="./assets/images/logo-clearbit.png" alt="" className="img-fluid" />
                                </div>
                                {/* client logo close  */}
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
                                {/* client logo start  */}
                                <div className="client-logo">
                                    <img src="./assets/images/logo-converkit.png" alt="" className="img-fluid" />
                                </div>
                                {/* client logo close  */}
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
                                {/* client logo start  */}
                                <div className="client-logo">
                                    <img src="./assets/images/logo-envato.png" alt="" className="img-fluid" />
                                </div>
                                {/* client logo close  */}
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
                                {/* client logo start  */}
                                <div className="client-logo">
                                    <img src="./assets/images/logo-frame.png" alt="" className="img-fluid" />
                                </div>
                                {/* client logo close  */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* footer section start */}
                    <Footer/>
                {/* footer section close */}
                
            </div>
        </div>
    )
}

export default Home
