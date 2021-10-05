import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actLogOut } from 'containers/shared/Auth/module/actions';
import './Header.scss';

class Header extends Component {

    handleLogOut = () => {
        this.props.logOut();
        this.props.history.push('/');
    }
    render() {
        return (
            <div className="container">
                <nav className="navbar navbar-expand-sm navbar-light bg-light">
                    <a className="navbar-brand" href="/"><img src="https://cybersoft.edu.vn/wp-content/uploads/2017/04/MAX-OP1.png" style={{ width: "200px" }} /></a>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav  m-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home<span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/news">News</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/application">Application</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/lichSuDatVe">Booking</Link>
                            </li>
                        </ul>

                        <ul>
                            <li className="nav-item">
                                <Link className="nav-link" to="/register">Register</Link>
                            </li>
                        </ul>

                        <ul >
                            {this.props.currentUser ? (
                                <li className="nav-item" onClick={this.handleLogOut}>
                                    <a className="nav-link login">LogOut</a>
                                </li>
                            ) : (
                                <li className="nav-item">
                                    <Link className="nav-link login" to="/login">Login</Link>
                                </li>
                            )}
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    currentUser: state.authReducer.currentUser,
});

const mapDispatchToProps = dispatch => ({
    logOut: () => dispatch(actLogOut())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));