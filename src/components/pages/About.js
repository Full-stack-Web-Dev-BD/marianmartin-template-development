import React from 'react'
import Footer from '../layout/Footer'
import Navbar from '../layout/Navbar'

function About() {
    return (
        <div>
            <div className="main-wrapper">
                {/* header start */}
                <Navbar/>
                {/* header close */}
                {/* gallery img start */}
                <div className="space-lg space-md space-xs pt-0">
                    <div className="container-fluid">
                        <div className="row no-gutters">
                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                                <div className="gallery-img">
                                    <img src="assets/images/gallery-img-1.jpg" alt="" className="img-fluid rounded-left first-thumb-img" />
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                                <div className="gallery-img no-gutters">
                                    <img src="assets/images/gallery-img-2.jpg" alt="" className="img-fluid second-thumb-img" />
                                    <img src="assets/images/gallery-img-3.jpg" alt="" className="img-fluid third-thumb-img" />
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                                <div className="gallery-img">
                                    <img src="assets/images/gallery-img-4.jpg" alt="" className="img-fluid fourth-thumb-img" />
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                                <div className="gallery-img">
                                    <img src="assets/images/gallery-img-5.jpg" alt="" className="img-fluid mb-1 rounded-top-right fifth-thumb-img" />
                                    <img src="assets/images/gallery-img-6.jpg" alt="" className="img-fluid rounded-bottom-right sixth-thumb-img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* gallery img close */}
                {/* about description start  */}
                <div className="space-lg space-md space-xs pt-0">
                    <div className="container">
                        <div className="row">
                            <div className="offset-xl-1 col-xl-10 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-4">
                                        <h1>We believe in spaces that are as <br /> flexible
                  as the way you work.</h1>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                        <p>Vestibulum mollis nunc lacusnec convallis loremesere ise dignissim atun quise magna non mi eleifend vestibulume. Cras mattis quam liberoa lacinias leo congue sitametulla et cursus purus, ac laoreet mi dignissim justo non augue rutrum tempuraesent id nisi in tellus maximus.</p>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                        <p>Praesent sit amet cursus velitliquam vitae egestas augue ace elementum ipsumonec hendrerit velit eu lacus luctus eu accumsan purus congue raesent accumsan metusese ex, nec laoreet elit luctus raesent lobortis euismod dolor Sed sodales, metus non accumsan congue.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* about description close  */}
                {/* counter start  */}
                <div className="space-lg space-md space-xs countup-section bg-light rounded">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="offset-xl-3 col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="row">
                                    <div className=" col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                                        <div className="counter-block">
                                            <h2 className="counter-block-title"><span className="timer" data-from={2000} data-to={2010} data-speed={5000} data-refresh-interval={5}>2010</span></h2>
                                            <p className="counter-block-text">Founded</p>
                                        </div>
                                    </div>
                                    <div className=" col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                                        <div className="counter-block">
                                            <h2 className="counter-block-title"><span className="timer" data-from={0} data-to={2300} data-speed={5000} data-refresh-interval={5}>2300</span>+</h2>
                                            <p className="counter-block-text">Office Locations</p>
                                        </div>
                                    </div>
                                    <div className=" col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                                        <div className="counter-block">
                                            <h2 className="counter-block-title"><span className="timer" data-from={0} data-to={35000} data-speed={5000} data-refresh-interval={5}>2300</span>+</h2>
                                            <p className="counter-block-text">Organisations helped</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* counter close  */}
                </div>
                {/* team section start  */}
                <div className="space-lg space-md space-xs">
                    <div className="container">
                        <div className="row">
                            <div className="offset-xl-2 col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12 text-center">
                                {/* section heading  */}
                                <div className="section-heading">
                                    <h2 className="section-heading-title">Let’s Meet The Team</h2>
                                    <p>Spacely started with helping people build awesome projects. Each day our team continues <br />to grow more creators in the world to do that.</p>
                                </div>
                                {/* section heading  */}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                                {/* team block start  */}
                                <div className="team-member-block">
                                    <div className="team-member-img zoom-img">
                                        <img src="assets/images/team-member-img-1.jpg" alt="" className="img-fluid" />
                                    </div>
                                    <div className="team-member-content">
                                        <h3 className="team-member-content-name">Kenneth Williams</h3>
                                        <p className="team-member-content-meta">Founder</p>
                                    </div>
                                </div>
                                {/* team block close  */}
                            </div>
                            {/* team block start  */}
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                                <div className="team-member-block">
                                    <div className="team-member-img zoom-img">
                                        <img src="assets/images/team-member-img-2.jpg" alt="" className="img-fluid" />
                                    </div>
                                    <div className="team-member-content">
                                        <h3 className="team-member-content-name">Mark Trevino</h3>
                                        <p className="team-member-content-meta">Co-founder</p>
                                    </div>
                                </div>
                            </div>
                            {/* team block close  */}
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                                <div className="team-member-block">
                                    <div className="team-member-img zoom-img">
                                        <img src="assets/images/team-member-img-3.jpg" alt="" className="img-fluid" />
                                    </div>
                                    <div className="team-member-content">
                                        <h3 className="team-member-content-name">Megan Collins</h3>
                                        <p className="team-member-content-meta">Manager</p>
                                    </div>
                                </div>
                            </div>
                            {/* team block close  */}
                            {/* team block start  */}
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                                <div className="team-member-block">
                                    <div className="team-member-img zoom-img">
                                        <img src="assets/images/team-member-img-4.jpg" alt="" className="img-fluid" />
                                    </div>
                                    <div className="team-member-content">
                                        <h3 className="team-member-content-name">Susan Albert</h3>
                                        <p className="team-member-content-meta">Product Manager</p>
                                    </div>
                                </div>
                            </div>
                            {/* team block close  */}
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-center mt-5"><a href="/contact" className="btn btn-outline-primary">Join our team</a></div>
                        </div>
                    </div>
                </div>
                {/* team section close */}
                {/* cta section start  */}
                <div className="space-lg space-md space-xs pt-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                <div className="cta-widget-block">
                                    <div className="cta-widget-content">
                                        <h3 className="cta-widget-content-title">Looking for space?<br />Start here.</h3>
                                        <p className="cta-widget-content-text">Aliquam erat volutpat. Phasellus blandit sit amet lorem a tincidunt. Fusce vitae ante porttitor, sodales risus eumaximus risusnte tincidunt pretium sed eget nisineque. </p>
                                        <a href="/" className="btn btn-primary">Find space</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                <div className="cta-widget-block">
                                    <div className="cta-widget-content">
                                        <h3 className="cta-widget-content-title">Got space to share?<br />Share Space</h3>
                                        <p className="cta-widget-content-text">Sed aliquet nibh lacus, vitae hendrerit sem vulputate euivamus magnaesd lorem mollis a nulla lerisquejusto vel maximus blandit lrot lacinia estsit ameneque.</p>
                                        <a href="#" className="btn btn-primary">Share your space</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* cta section close  */}
                {/* footer section start */}
                <Footer />
                {/* footer section close */}
            </div>
        </div>

    )
}

export default About
