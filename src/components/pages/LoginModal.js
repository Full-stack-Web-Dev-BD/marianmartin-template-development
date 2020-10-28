import React from 'react'

function LoginModal() {
    return (
        <div>
            <div className="modal fade" id="loginmodal" tabIndex={-1} role="dialog" aria-labelledby="loginmodalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                            {/* login form start */}
                            <div className="login-form border-0">
                                <div className="login-form-body">
                                    <h4 className="login-form-title">Login</h4>
                                    <form>
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <input type="email" className="form-control" id="email" aria-describedby="email" placeholder="example@gmail.com" required />
                                        </div>
                                        <div className="form-group">
                                            <label id="password">Password</label>
                                            <input id="password-field" type="password" className="form-control" name="password" defaultValue placeholder="*************" />
                                            <span toggle="#password-field" className="fa fa-fw fa-eye password-hide-icon showhidepassword" />
                                            <small>Must be 8-20 characters long.</small>
                                        </div>
                                        <button type="submit" className="btn btn-primary btn-block">Login</button>
                                    </form>
                                    <div className="login-remember-password-block">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="rememberme" />
                                            <label className="custom-control-label" htmlFor="rememberme">Remember Me</label>
                                        </div>
                                        <div className="forgot-password-link">
                                            <a href="/forgetPassword"> Forgot Password?</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="login-form-footer">
                                    <p className="login-form-footer-text">Don’t have a Virtulab account?? <a href="/register">Create Account</a> and we’ll set you up so you can list your space.</p>
                                </div>
                            </div>
                            {/* login form close */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginModal
