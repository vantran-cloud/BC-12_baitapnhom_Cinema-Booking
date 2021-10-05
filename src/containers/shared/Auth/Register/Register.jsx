import React, { Component } from 'react';
import { actRegister } from '../module/actions';
import './Register.scss';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { actFetchUserList } from './module/actions';

class Register extends Component {
    state = {
        user: {
            taiKhoan: "",
            matKhau: "",
            email: "",
            soDt: "",
            maNhom: "GP07",
            maLoaiNguoiDung: "KhachHang",
            hoTen: "",
        },

        errors: {
            taiKhoan: "",
            matKhau: "",
            email: "",
            soDt: "",
            hoTen: ""
        },

        isValidUsername: false,
        isValidPassword: false,
        isValidEmail: false,
        isValidHoTen: false,
        isValidPhoneNumber: false,
        isValidform: false,
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

    handleRegister = (event) => {
        event.preventDefault();
        if (this.state.isValidform) {
            this.props.register(this.state.user);
        }
        else{
            alert(" Vui lòng kiểm tra lại thông tin")
        }
    }

    handleError = (event) => {

        let { name, value } = event.target;
        let { isValidUsername, isValidPassword, isValidHoTen, isValidPhoneNumber, isValidEmail } = this.state;
        let errorMessage = "";
        if (value === "") {
            switch (name) {
                case "taiKhoan":
                    errorMessage = `Username can not be empty!`;
                    break;
                case "matKhau":
                    errorMessage = "Password can not be empty!";
                    break;
                case "hoTen":
                    errorMessage = "Name can not be empty!";
                    break;
                case "email":
                    errorMessage = "Email can not be empty!";
                    break;
                case "soDt":
                    errorMessage = "Phone number can not be empty!";
                    break;
                default:
                    break;
            }
        }
        switch (name) {
            case "taiKhoan":
                isValidUsername = errorMessage === "" ? true : false;
                break;
            case "matKhau":
                isValidPassword = errorMessage === "" ? true : false;
                if (value && (value.length < 6 || value.length > 10)) {
                    errorMessage = "password must be 6 to 10 characters"
                }
                break;
            case "hoTen":
                isValidHoTen = errorMessage === "" ? true : false;
                const pattern = new RegExp(
                    "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
                      "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
                      "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$"
                  );
                  if (value && !pattern.test(value)) {
                    errorMessage = "không được có ký tự đặt biệt và số"
                }
                break;
            case "email":
                const emailreRegex = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
                if (value && !value.match(emailreRegex)) {
                    errorMessage = "Invalid email"
                }

                if (value) {
                    console.log(this.props);
                    this.props.listUser?.map(user => {
                        if (value === user.email) {
                            errorMessage = "email đã tồn tại"
                        }
                    })
                }
                break;

            case "soDt":
                if( value && (value.length !== 10)) {
                    errorMessage = "phone number must be 10 digits";
                }
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
            isValidHoTen,
            isValidEmail,
            isValidPhoneNumber,
        }, () => { this.handleValidForm() });
    }

    handleValidForm = () => {
        const { isValidUsername, isValidPassword, isValidHoTen, isValidPhoneNumber, isValidEmail } = this.state;
        if (isValidUsername && isValidPassword && isValidHoTen && isValidPhoneNumber && isValidEmail) {
            this.setState({
                isValidform: true,
            })
        }

    }

    render() {
        if ((this.props.currentUser || this.props.userInfor)) {
            return (<Redirect to="/login" />)
        }


        return (

            <div>
                <form onSubmit={this.handleRegister}>

                    <div className="register-content">
                        <div className="container">
                            <h1 className="title">Register</h1>
                            <p>Please fill in this form to create an account.</p>
                            <hr />
                            <div className="row">
                                <input type="text" placeholder="Name" name="hoTen" id="text" value={this.state.user.hoTen}
                                    onChange={this.handleOnChange}
                                    onBlur={this.handleError}
                                    onKeyUp={this.handleError} />

                                <smail className="text-danger">
                                    {this.state.errors.hoTen}
                                </smail>

                                <input type="number" placeholder="Phone Number" name="soDt" id="numberphone" value={this.state.user.soDt}
                                    onChange={this.handleOnChange}
                                    onBlur={this.handleError}
                                    onKeyUp={this.handleError} />

                                <smail className="text-danger">
                                    {this.state.errors.soDt}
                                </smail>

                                <input type="text" placeholder="Name" name="taiKhoan" id="text" value={this.state.user.taiKhoan}
                                    onChange={this.handleOnChange}
                                    onBlur={this.handleError}
                                    onKeyUp={this.handleError} />

                                <smail className="text-danger">
                                    {this.state.errors.taiKhoan}
                                </smail>


                                <input type="text" placeholder="Enter Email" name="email" id="email" value={this.state.user.email}
                                    onChange={this.handleOnChange}
                                    onBlur={this.handleError}
                                    onKeyUp={this.handleError} />

                                <smail className="text-danger">
                                    {this.state.errors.email}
                                </smail>

                                <input type="password" placeholder="Password" name="matKhau" id="psw-repeat" value={this.state.user.matKhau}
                                    onChange={this.handleOnChange}
                                    onBlur={this.handleError}
                                    onKeyUp={this.handleError} />

                                <smail className="text-danger">
                                    {this.state.errors.matKhau}
                                </smail>
                            </div>
                            <hr />
                            <button type="submit" className="registerbtn">Register</button>
                            <Link to="/">Go Back</Link>
                        </div>
                    </div>

                </form>

            </div>
        )
    }

    componentDidMount() {
        this.props.fetchUserList()
    }

}

const mapStateToProps = state => ({
    userInfor: state.authReducer.userInfor,
    currentUser: state.authReducer.currentUser,
    listUser: state.userListReducer.listUser,
})


const mapDispatchToProps = dispatch => ({
    register: user => {
        dispatch(actRegister(user))
    },

    fetchUserList: () => {
        dispatch(actFetchUserList())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Register)