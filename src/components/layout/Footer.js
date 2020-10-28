import React from 'react'

function Footer() {
    return (
        <div>
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
        </div>
    )
}

export default Footer
