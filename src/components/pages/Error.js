import React from 'react'

const Error = () => {
    return (
        < div className="error-page" >
            <div className="container">
                <div className="row">
                    <div className="offset-xl-2 col-xl-8 col-md-12 col-sm-12 col-12">
                        <div className="error-page-img">
                            <img src="assets/images/error-img.png" alt="" className="img-fluid" />
                        </div>
                        <div className="error-page-content">
                            <h1 className="error-page-content-title">Sorry. The page you are looking for does not exist</h1>
                            <p className="error-page-content-text">We may have removed a page to which you found a link, or you may have the wrong address for the page you are looking for.Recommended actions</p>
                            <a href="/" className="btn btn-primary">Back to homepage</a>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Error
