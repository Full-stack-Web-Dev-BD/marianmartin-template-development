import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../layout/Navbar'

function ListingListView() {
    return (
        <div>
            <div className="main-wrapper">
                {/* header start */}
                <Navbar />
                {/* pageheader start */}
                <div className="pageheader">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-7 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="pageheader-caption">
                                    <h1 className="pageheader-caption-title">Layout Grid &amp; List</h1>
                                    <p className="pageheader-caption-text">Change your layout in grid and list view example using bootstrap 4. Design elements using Bootstrap, javascript, css, and html. ... </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* pageheader close */}
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 col-12">
                            {/* breadcrumb start */}
                            <div className="custom-breadcrumb">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="index.html">Home</Link></li>
                                        <li className="breadcrumb-item active">Layout Grid &amp; List</li>
                                    </ol>
                                </nav>
                            </div>
                            {/* breadcrumb close */}
                        </div>
                    </div>
                </div>
                <div className="space-lg space-md space-xs">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
                                <div className="row">
                                    <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12 mb-4">
                                        {/* swich start */}
                                        <div className="page-switcher">
                                            <Link to="/listingListView" className="active"><i className="fas fa-list" /></Link>
                                            <Link to="/listingGridView"><i className="fas fa-th" /></Link>
                                            <Link to="listing-map-view.html"><i className="fas fa-map-marker-alt" /></Link>
                                        </div>
                                        {/* swich close */}
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 mb-4">
                                        {/* select form start */}
                                        <select className="select2 form-control custom-select" id="search-hide">
                                            <option selected>Default</option>
                                            <option value={1}>Most Viewed</option>
                                            <option value={2}>Newest Listing</option>
                                            <option value={3}>Older Listing</option>
                                        </select>
                                        {/* select form close */}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        {/* listing block start */}
                                        <div className="listing-block grid-listing">
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
                                        {/* listing block close */}
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        {/* listing block start */}
                                        <div className="listing-block grid-listing">
                                            <div className="listing-img">
                                                <Link to="#"> <img src="./assets/images/listing-img-2.jpg" alt="" className="img-fluid" /></Link>
                                                <Link to="#" className="listing-category-badge badge-light-purple">
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
                                        {/* listing block close */}
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="listing-block grid-listing">
                                            <div className="listing-img">
                                                <Link to="#"> <img src="./assets/images/listing-img-3.jpg" alt="" className="img-fluid" /></Link>
                                                <Link to="#" className="listing-category-badge badge-light-orange">
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
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        {/* listing block start */}
                                        <div className="listing-block grid-listing">
                                            <div className="listing-img">
                                                <Link to="#"> <img src="./assets/images/listing-img-1.jpg" alt="" className="img-fluid" /></Link>
                                                <Link to="#" className="listing-category-badge badge-light-purple">
                                                    Virtual Space
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
                                        {/* listing block close */}
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-3">
                                        {/* pagination start */}
                                        <nav aria-label="Page navigation example">
                                            <ul className="pagination">
                                                <li className="page-item"><Link className="page-link" to="#">Previous</Link></li>
                                                <li className="page-item active"><Link className="page-link" to="#">1</Link></li>
                                                <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                                                <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                                <li className="page-item"><Link className="page-link" to="#">Next</Link></li>
                                            </ul>
                                        </nav>
                                        {/* pagination close */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                                <div className="filter-sidebar">
                                    <h3 className="filter-sidebar-title"><span className="filter-icon"><i className="fas fa-sliders-h" /></span>Filter</h3>
                                    {/* filter widget start */}
                                    <div className="filter-sidebar-widget">
                                        <Link className="filter-title" data-toggle="collapse" to="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                            Price <i className="fas fa-angle-down" />
                                        </Link>
                                        <div className="collapse show" id="collapseExample">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                <label className="custom-control-label" htmlFor="customCheck1">$0 - $100
                    </label>
                                            </div>
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="customCheck2" />
                                                <label className="custom-control-label" htmlFor="customCheck2">$100 - $200
                    </label>
                                            </div>
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="customCheck3" />
                                                <label className="custom-control-label" htmlFor="customCheck3">$200 - $300
                    </label>
                                            </div>
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="customCheck4" />
                                                <label className="custom-control-label" htmlFor="customCheck4">$300 - $400
                    </label>
                                            </div>
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="customCheck5" />
                                                <label className="custom-control-label" htmlFor="customCheck5">$400 - $500
                    </label>
                                            </div>
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="customCheck6" />
                                                <label className="custom-control-label" htmlFor="customCheck6">$500 - $600
                    </label>
                                            </div>
                                        </div>
                                    </div>
                                    {/* filter widget close */}
                                    {/* filter widget start */}
                                    <div className="filter-sidebar-widget">
                                        <Link className="filter-title" data-toggle="collapse" to="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample2">
                                            Capacity <i className="fas fa-angle-down" />
                                        </Link>
                                        <div className="collapse show" id="collapseExample2">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="customCheck7" />
                                                <label className="custom-control-label" htmlFor="customCheck7">1 Person
                    </label>
                                            </div>
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="customCheck8" />
                                                <label className="custom-control-label" htmlFor="customCheck8">2 - 5 Person
                    </label>
                                            </div>
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="customCheck9" />
                                                <label className="custom-control-label" htmlFor="customCheck9">5 - 10 Person
                    </label>
                                            </div>
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="customCheck10" />
                                                <label className="custom-control-label" htmlFor="customCheck10">10 - 15 Person
                    </label>
                                            </div>
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="customCheck11" />
                                                <label className="custom-control-label" htmlFor="customCheck11">15 - 25 person
                    </label>
                                            </div>
                                        </div>
                                    </div>
                                    {/* filter widget close */}
                                    {/* filter widget start */}
                                    <div className="filter-sidebar-widget">
                                        <Link className="filter-title" data-toggle="collapse" to="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample3">
                                            Size <i className="fas fa-angle-down" />
                                        </Link>
                                        <div className="collapse show" id="collapseExample3">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="customCheck12" />
                                                <label className="custom-control-label" htmlFor="customCheck12">100 Sq.Ft
                    </label>
                                            </div>
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="customCheck13" />
                                                <label className="custom-control-label" htmlFor="customCheck13">100 Sq.Ft - 200 Sq.Ft
                    </label>
                                            </div>
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="customCheck14" />
                                                <label className="custom-control-label" htmlFor="customCheck14">200 Sq.Ft - 300 Sq.Ft
                    </label>
                                            </div>
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="customCheck15" />
                                                <label className="custom-control-label" htmlFor="customCheck15">300 Sq.Ft - 400 Sq.Ft
                    </label>
                                            </div>
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="customCheck16" />
                                                <label className="custom-control-label" htmlFor="customCheck16">400 Sq.Ft - 500 Sq.Ft
                    </label>
                                            </div>
                                        </div>
                                    </div>
                                    {/* filter widget close */}
                                    {/* filter widget start */}
                                    <div className="filter-sidebar-widget mt-2">
                                        <Link to="#" className="btn btn-primary btn-block">Search</Link>
                                    </div>
                                    {/* filter widget close */}
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
                                        <Link to="#"><i className="fab fa-facebook-square" /></Link>
                                        <Link to="#"><i className="fab fa-twitter-square" /></Link>
                                        <Link to="#"><i className="fab fa-linkedin" /></Link>
                                        <Link to="#"><i className="fab fa-pinterest-square" /></Link>
                                        <Link to="#"><i className="fab fa-instagram" /></Link>
                                    </div>
                                </div>
                            </div>
                            {/* footer widget  */}
                            <div className="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-6">
                                <div className="footer-widget">
                                    <h3 className="footer-widget-title">Type of spaces</h3>
                                    <div className="footer-links">
                                        <ul className="list-unstyled">
                                            <li><Link to="#">Coworking space</Link></li>
                                            <li><Link to="#">Meeting space</Link></li>
                                            <li><Link to="#">Office space</Link></li>
                                            <li><Link to="#">Retail Space</Link></li>
                                            <li><Link to="#">Event space</Link></li>
                                            <li><Link to="#">Virtual Space</Link></li>
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
                                            <li><Link to="#">About us</Link></li>
                                            <li><Link to="#">Careers</Link></li>
                                            <li><Link to="#">Clients</Link></li>
                                            <li><Link to="#">Team</Link> </li>
                                            <li><Link to="#">Help Center</Link></li>
                                            <li><Link to="#">Press</Link></li>
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
                    {/* footer section close  */}
                </div>
                {/* footer section close */}
            </div>
            {/* end main wrapper */}
            {/* ============================================================== */}
        </div>

    )
}

export default ListingListView
