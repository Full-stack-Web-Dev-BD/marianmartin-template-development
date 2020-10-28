import React from 'react'
import Navbar from '../layout/Navbar'

const Blog = () => {
    return (
        <div>
            <div className="main-wrapper">
                <Navbar/>
                <div className="pageheader">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 col-12">
                                <div className="pageheader-caption">
                                    <h1 className="pageheader-caption-title">Blog Default</h1>
                                    <p className="pageheader-caption-text">Lorem ipsum dolor sit amet, consecteturconsectetur adipiscing eliorbi fringilla ipsum tellusa varius loremid blandit adipiscing varius loremid blandit . </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* pageheader close  */}
                {/* breadcrumb start  */}
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 col-12">
                            <div className="custom-breadcrumb">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                                        <li className="breadcrumb-item active">Blog Default</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                {/* breadcrumb close  */}
                <div className="space-lg space-md space-xs">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="post-block">
                                            {/* post classic block */}
                                            <div className="post-img">
                                                <a href="/blogSingle"><img src="assets/images/post-img-1.jpg" alt="" className="img-fluid" /></a>
                                                <div className="sticky-badge">Sticky Post</div>
                                            </div>
                                            <div className="post-content">
                                                <h2 className="post-title"><a href="/blogSingle" className="title">20 Best Texas Working Spaces for Serious
                        Professionals </a></h2>
                                                <div className="post-meta">
                                                    <div className="meta">
                                                        <span className="meta-posted-by"><img src="./assets/images/avatar-2.jpg" alt="" className="admin-profile" /> <a href="#" className="admin-profile-name">Kevin Muse</a></span>
                                                        <span className="meta-date"><span className="date-icon"><i className="far fa-calendar-alt" /></span>July 10, 2019</span>
                                                        <span className="meta-category"><span className="category-icon"><i className="far fa-folder-open" /></span><a href="#" className="meta-category-text">Coworking</a>,<a href="#" className="meta-category-text"> Office</a>
                                                        </span>
                                                    </div>
                                                    {/* postmeta close */}
                                                </div>
                                                <p className="post-content-text">Maecenas tristique, sem ac malesuada ornare, odio justo pellentesqu aecenas tristique, sem ac malesuada ornare, odio justo pellentesque......</p>
                                                {/* postmeta start */}
                                            </div>
                                        </div>
                                        {/* /.post classic block */}
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        {/* post block start */}
                                        <div className="post-block">
                                            {/* post classic block */}
                                            <div className="post-carousel">
                                                <div className="owl-post owl-carousel owl-theme">
                                                    {/* owl-item */}
                                                    <div className="item">
                                                        <div className="post-img">
                                                            <a href="/blogSingle"><img src="assets/images/post-img-1.jpg" alt="" className="img-fluid" /></a>
                                                        </div>
                                                    </div>
                                                    {/* owl-item */}
                                                    <div className="item">
                                                        <div className="post-img">
                                                            <a href="/blogSingle"><img src="assets/images/post-img-2.jpg" alt="" className="img-fluid" /></a>
                                                        </div>
                                                    </div>
                                                    {/* owl-item */}
                                                    <div className="item">
                                                        <div className="post-img">
                                                            <a href="/blogSingle"><img src="assets/images/post-img-3.jpg" alt="" className="img-fluid" /></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* post content start */}
                                            <div className="post-content">
                                                <h2 className="post-title"><a href="/blogSingle" className="title">What to look for in a short-term office space in a popular location</a></h2>
                                                {/* post meta start*/}
                                                <div className="post-meta">
                                                    <div className="meta">
                                                        <span className="meta-posted-by"><img src="./assets/images/avatar-3.jpg" alt="" className="admin-profile" /> <a href="#" className="admin-profile-name">John Deo</a></span>
                                                        <span className="meta-date"><span className="date-icon"><i className="far fa-calendar-alt" /></span>July 09, 2019</span>
                                                        <span className="meta-category"><span className="category-icon"><i className="far fa-folder-open" /></span><a href="#" className="meta-category-text">Office</a></span>
                                                    </div>
                                                    {/* post meta close */}
                                                </div>
                                                <p className="post-content-text">Duis hendrerit metus dolor, eget vehicula lacus tempus vehicula. Nullam a dolor pellentesquante nec, condimentum felis... </p>
                                                {/* post content close */}
                                            </div>
                                        </div>
                                        {/* /.post classic block */}
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        {/* post block start */}
                                        <div className="post-block">
                                            {/* post classic block */}
                                            <div className="embed-responsive embed-responsive-16by9 rounded-top">
                                                <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/ggr9alqVeHA" allowFullScreen />
                                            </div>
                                            <div className="post-content">
                                                <h2 className="post-title"><a href="/blogSingle" className="title">Why start-up videographers should rent a space</a></h2>
                                                {/* post meta start */}
                                                <div className="post-meta">
                                                    <div className="meta">
                                                        <span className="meta-posted-by"><img src="./assets/images/avatar-4.jpg" alt="" className="admin-profile" /> <a href="#" className="admin-profile-name">Simon Negi</a></span>
                                                        <span className="meta-date"><span className="date-icon"><i className="far fa-calendar-alt" /></span>July 08, 2019</span>
                                                        <span className="meta-category"><span className="category-icon"><i className="far fa-folder-open" /></span><a href="#" className="meta-category-text">Coworking</a></span>
                                                    </div>
                                                    {/* post meta close */}
                                                </div>
                                                <p className="post-content-text">Cras tincidunt dui vel ullamcorper pulvinar. Sed luctus, libero sed sodales tincidunt, velit quam imperdiet arcu, vitae convallis justo felis sit amet tellus...</p>
                                            </div>
                                            {/* post block close */}
                                        </div>
                                        {/* /.post classic block */}
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        {/* post block start */}
                                        <div className="post-block">
                                            <div className="post-content rounded-top">
                                                {/* post vertical block */}
                                                <blockquote className="custom-blockquote">
                                                    <p className="font-italic">“It provides everything that newly set up business may need, from convenient and secure location, to office and warehouse space all within the same building.”</p>
                                                </blockquote>
                                            </div>
                                            {/* post block close */}
                                        </div>
                                        {/* /.post vertical block */}
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        {/* pagination start */}
                                        <nav aria-label="Page navigation example">
                                            <ul className="pagination">
                                                <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                                <li className="page-item active"><a className="page-link " href="#">2</a></li>
                                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                                <li className="page-item"><a className="page-link" href="#">Next</a></li>
                                            </ul>
                                        </nav>
                                        {/* pagimation close */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                                <div className="post-sidebar">
                                    <div className="widget-search">
                                        {/* widget-search */}
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control" placeholder="Search Article.." aria-label="Search Article.." />
                                        </div>
                                    </div>
                                    {/* /.widget */}
                                    {/* widget-categories */}
                                    <div className="widget widget-categories">
                                        <h3 className="widget-title">Category</h3>
                                        <div className="widget-content">
                                            <ul>
                                                <li><a href="#">Office Space</a></li>
                                                <li><a href="#">Coworking Space</a></li>
                                                <li><a href="#">Meeting Space</a></li>
                                                <li><a href="#">Event Space</a></li>
                                                <li><a href="#">Retail Space</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* /.widget-categories */}
                                    {/* widget-recent-post */}
                                    <div className="widget widget-recent-post">
                                        <h3 className="widget-title">Recent Post</h3>
                                        <div className="widget-content">
                                            <ul className>
                                                {/* recent-post-block */}
                                                <li>
                                                    <div className="recent-post-content">
                                                        <h4 className="recent-title"><a href="/blogSingle" className="title">Best England Retail Spaces for
                            Professionals &amp; Entrepreneurs</a></h4>
                                                        <p className="meta-date"><span className="date-icon"><i className="far fa-calendar-alt" /></span>July 12, 2019</p>
                                                    </div>
                                                </li>
                                                {/* /.recent-post-block */}
                                                {/* recent-post-block */}
                                                <li>
                                                    <div className="recent-post-content">
                                                        <h4 className="recent-title"><a href="/blogSingle" className="title">10 Ways to Remote Working is
                            Increasing Productivity</a></h4>
                                                        <p className="meta-date"><span className="date-icon"><i className="far fa-calendar-alt" /></span>July 11, 2019</p>
                                                    </div>
                                                </li>
                                                {/* /.recent-post-block */}
                                                {/* recent-post-block */}
                                                <li>
                                                    <div className="recent-post-content">
                                                        <h4 className="recent-title"><a href="/blogSingle" className="title">What to look for in a short-term office space in a popular location</a></h4>
                                                        <p className="meta-date"><span className="date-icon"><i className="far fa-calendar-alt" /></span>July 10, 2019</p>
                                                    </div>
                                                </li>
                                                {/* /.recent-post-block */}
                                            </ul>
                                        </div>
                                    </div>
                                    {/* widget-archives */}
                                    <div className="widget widget-archive">
                                        <h3 className="widget-title">Archives</h3>
                                        <div className="widget-content">
                                            <ul>
                                                <li><a href="#">December 2019</a></li>
                                                <li><a href="#">November 2019</a></li>
                                                <li><a href="#">October 2019</a></li>
                                                <li><a href="#">September 2019</a></li>
                                                <li><a href="#">August 2019</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* /.widget-archives */}
                                    {/* widget-tags */}
                                    <div className="widget widget-tags">
                                        <h3 className="widget-title">Tags</h3>
                                        <div className="widget-content">
                                            <a href="#">Space</a>
                                            <a href="#">Office</a>
                                            <a href="#">Events</a>
                                            <a href="#">Portfolio </a>
                                            <a href="#">Creative</a>
                                        </div>
                                    </div>
                                    {/* /.widget-tags */}
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
                                    <p className="tiny-footer-text">Copyright © 2020 Virtulab Companies Inc. All rights reserved</p>
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

export default Blog
