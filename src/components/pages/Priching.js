import React from 'react'
import Navbar from '../layout/Navbar'

const Priching = () => {
    return (
        <div>
            <div className="main-wrapper">
                <Navbar/>
                <div className="pageheader">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-7 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="pageheader-caption">
                                    <h1 className="pageheader-caption-title">Pricing page design</h1>
                                    <p className="pageheader-caption-text">Outstanding pricing page examples for directory &amp; Listing html template. Its responsive build with bootstrap 4.</p>
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
                                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                        <li className="breadcrumb-item active">Pricing</li>
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
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                {/* pricing start */}
                                <div className="pricing-block">
                                    <div className="pricing-head">
                                        <div className="pricing-head-icon">
                                            <img src="./assets/images/pricing-icon-1.png" alt="" />
                                        </div>
                                        <div className="pricing-head-price">
                                            <h3 className="pricing-head-lable">Basic</h3>
                                            <p className="pricing-head-value"><sup className="dolor-sign">$</sup>0</p>
                                        </div>
                                        <div className="pricing-btn"><a href="#" className="btn btn-outline-primary" data-toggle="modal" data-target="#exampleModal">Try it now</a></div>
                                        <div className="pricing-content">
                                            <ul className="pricing-content-list">
                                                <li>1 Listing Upload</li>
                                                <li>2 Gallery Photo</li>
                                                <li>No Video</li>
                                                <li>No Featured Listing</li>
                                                <li>Email Support</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* pricing close */}
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                {/* pricing start */}
                                <div className="pricing-block pricing-block-selected">
                                    <div className="pricing-badge">Popluar</div>
                                    <div className="pricing-head">
                                        <div className="pricing-head-icon">
                                            <img src="./assets/images/pricing-icon-2.png" alt="" />
                                        </div>
                                        <div className="pricing-head-price">
                                            <h3 className="pricing-head-lable">Professional</h3>
                                            <p className="pricing-head-value"><sup className="dolor-sign">$</sup>20</p>
                                        </div>
                                        <div className="pricing-btn"><a href="#" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Select this plan</a></div>
                                        <div className="pricing-content">
                                            <ul className="pricing-content-list">
                                                <li>3 Listing Upload</li>
                                                <li>6 Gallery Photo</li>
                                                <li>Yes Video</li>
                                                <li>1 Featured Listing</li>
                                                <li>24x7 Email Support</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* pricing close */}
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                {/* pricing start */}
                                <div className="pricing-block">
                                    <div className="pricing-head">
                                        <div className="pricing-head-icon">
                                            <img src="./assets/images/pricing-icon-3.png" alt="" />
                                        </div>
                                        <div className="pricing-head-price">
                                            <h3 className="pricing-head-lable">Advance</h3>
                                            <p className="pricing-head-value"><sup className="dolor-sign">$</sup>60</p>
                                        </div>
                                        <div className="pricing-btn"><a href="#" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Select this plan</a></div>
                                        <div className="pricing-content">
                                            <ul className="pricing-content-list">
                                                <li>8 Listing Upload</li>
                                                <li>16 Gallery Photo</li>
                                                <li>Yes Video</li>
                                                <li>2 Featured Listing</li>
                                                <li>Priority Email</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* pricing close */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="space-lg space-md space-xs pt-0">
                    <div className="container">
                        <div className="row">
                            <div className="offset-xl-2 col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12 text-center ">
                                {/* section heading start */}
                                <div className="section-heading">
                                    <h2 className="section-heading-title">Frequently Asked Questions?</h2>
                                </div>
                                {/* section heading close */}
                            </div>
                        </div>
                        <div className="row">
                            <div className="offset-xl-1 col-xl-10 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="accrodion-regular">
                                    <div id="accordion">
                                        <div className>
                                            {/* accordions card start  */}
                                            <div className="card">
                                                <div className="card-header active" id="headingOne">
                                                    <h5 className="card-title">
                                                        <a href="#collapseOne" className="collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                            How much does cost?<span className="fas fa-chevron-down" />
                                                        </a>
                                                    </h5>
                                                </div>
                                                <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion" style={{}}>
                                                    <div className="card-body">
                                                        <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. <br /><br />Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* accordions card close  */}
                                            {/* accordions card start  */}
                                            <div className="card">
                                                <div className="card-header" id="headingTwo">
                                                    <h5 className="card-title">
                                                        <a href="#collapseTwo" className data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                                            Which plan is right for me? <span className="fas fa-chevron-down " />
                                                        </a>
                                                    </h5>
                                                </div>
                                                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                                    <div className="card-body">
                                                        <p> Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* accordions card close  */}
                                            {/* accordions card start  */}
                                            <div className="card">
                                                <div className="card-header" id="headingThree">
                                                    <h5 className="card-title">
                                                        <a href="#collapseThree" className data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                            How to manage my billing?<span className="fas fa-chevron-down " />
                                                        </a>
                                                    </h5>
                                                </div>
                                                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                                    <div className="card-body">
                                                        <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. <br /><br /> Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* accordions card close  */}
                                            {/* accordions card start  */}
                                            <div className="card">
                                                <div className="card-header" id="headingFour">
                                                    <h5 className="card-title">
                                                        <a href="#collapseFour" className data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                            Can I change my plan? <span className="fas fa-chevron-down " />
                                                        </a>
                                                    </h5>
                                                </div>
                                                <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                                                    <div className="card-body">
                                                        <p>The collapse JavaScript plugin is used to show and hide content. Buttons or anchors are used as triggers that are mapped to specific elements you toggle. Accordion bootstrap 4, bootstrap accordion example.
                          <br /><br /> Nam porta neque magna, ut lacinia metus pretium eu. Integer iaculis, lectus a aliquam viverra, felis ligula pretium eros, sed blandit lectus dui et diam. Donec lorem est, eleifend id felis at, imperdiet egestas dui.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* accordions card close  */}
                                        </div>
                                    </div>
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
            {/* Button trigger modal */}
            {/* Modal */}
            <div className="modal payment-gatway fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-body ">
                            <h4 className="heading-title">Choose your payment method</h4>
                            <form>
                                <div className="form-row ">
                                    <div className="col-md-4"><input id="test0" name="same-group-name" type="radio" /><label htmlFor="test0">
                                        <div className="image"><img src="assets/images/paypal-logo.png" alt="" /></div>
                                    </label>
                                    </div>
                                    <div className="col-md-4"><input id="test1" name="same-group-name" type="radio" /><label htmlFor="test1">
                                        <div className="image"><img src="assets/images/stripe-logo.png" alt="" /></div>
                                    </label>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer stock-images">
                            <a href="#" className="close btn btn-primary" data-dismiss="modal" aria-label="Close">
                                Close
          </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Priching
