import React from 'react'

const ResetPassword = () => {
    return (
        <div>
            <div className="main-wrapper">
                <div className="space-lg space-md space-xs">
                    <div className="container">
                        <div className="row">
                            <div className="offset-xl-3 col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                                {/* reset block start */}
                                <div className="reset-block">
                                    <div className="reset-block-body">
                                        <h4 className="reset-block-title">Reset Your Password</h4>
                                        <p>We have send a reset password email to <a href="#" className>example@gmail.com.</a>
                  Please click the reset password link to set your new password.</p>
                                        <p className="text-dark mb-1 font-weight-bold">Didn’t recieve the email yet?</p>
                                        <p>Please check your spam folder, or <a href="/">resend</a> the email.</p>
                                    </div>
                                </div>
                                {/* reset block close */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ============================================================== */}
            {/* end main wrapper */}
            {/* ============================================================== */}
        </div>

    )
}

export default ResetPassword
