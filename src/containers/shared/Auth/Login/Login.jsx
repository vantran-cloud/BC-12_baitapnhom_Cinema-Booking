import React, { Component } from 'react';
import { actLogin } from '../module/actions';
import './Login.scss';
import { connect } from 'react-redux';
import Loading from 'components/Loading/Loading';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
class Login extends Component {
    state = {
        user: {
            taiKhoan: "",
            matKhau: "",
        },

        errors: {
            taiKhoan: "",
            matKhau: "",
        },

        isValidUsername: false,
        isValidPassword: false,
        isValidform: false,
    }

    handleLogin = (event) => {
        event.preventDefault();
        this.props.fecthLogin(this.state.user);
    }

    handleOnChange = (event) => {
        let { name, value } = event.target;
        this.setState(
            {
                user: {
                    ...this.state.user,
                    [name]: value,
                },
            },
            () => {
                console.log(this.state);
            }
        );
    };

    handleError = (event) => {
        let { name, value } = event.target; 
        let { isValidUsername, isValidPassword } = this.state;
        let errorMessage = "";
        if (value === "") {
            switch (name) {
                case "taiKhoan":
                    errorMessage = `Username can not be empty!`;
                    break; 
                case "matKhau":
                    errorMessage = "Password can not be empty!";
                default:
                    break;
            }
        }
        switch (name) {
            case "username":
                isValidUsername = errorMessage === "" ? true : false;
                break;
            case "password":
                isValidPassword = errorMessage === "" ? true : false;
                break;

            default:
                break;
        }
        this.setState({
            errors: {
                ...this.state.errors,
                [name]: errorMessage,
            },
            isValidUsername,
            isValidPassword,
        });
    }

    render() {
        const { currentUser, loading, errors } = this.props;

        if (loading) return <Loading />

        return !currentUser ? (
            <div className="login-background">
                <div className="login-container">
                    <div className="login-content row">
                        <div className="col-12 text-login">Login</div>
                        <form className="login-form" onSubmit={this.handleLogin}>
                            <div className="col-12 form-group login-input">
                                <label className="username">Username</label>
                                <input type="text" name="taiKhoan"
                                    value={this.state.user.taiKhoan}
                                    onChange={this.handleOnChange}
                                    onBlur={this.handleError}
                                    onKeyUp={this.handleError} id=""
                                    className="from-control ip-user"
                                    placeholder="Username" />
                                <smail className="text-danger">
                                    {this.state.errors.taiKhoan}
                                </smail>
                            </div>

                            <div className="col-12 form-group login-input">
                                <lable className="password">Password</lable>
                                <input type="password" name="matKhau"
                                    value={this.state.user.matKhau}
                                    onChange={this.handleOnChange}
                                    onBlur={this.handleError}
                                    onKeyUp={this.handleError}
                                    id="" className="from-control ip-pass"
                                    placeholder="Password" />
                                <smail className="text-danger">
                                    {this.state.errors.matKhau}
                                </smail>
                                <br />
                            </div>

                            <div className="col-12">
                                <button type="submit" className="btn-login">Log In</button>
                            </div>
                           
                            <br />
                            <Link to="/">ComeBack</Link>
                        </form>
                    </div>
                </div>
            </div>
        ) : (<Redirect to="/" />)
    }

}


const mapStateToProps = state => ({
    currentUser: state.authReducer.currentUser,
    loading: state.authReducer.loading,
    errors: state.authReducer.errors,
})
const mapDispatchToProps = dispatch => ({
    fecthLogin: (user) => {
        dispatch(actLogin(user))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
