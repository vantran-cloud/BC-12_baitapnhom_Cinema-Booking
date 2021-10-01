import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class PageNotFound extends Component {
    render() {
        return (
            <div style={{ textAlign: 'center', margin: '100px' }}>
                <img src="https://itphutran.com/wp-content/uploads/2017/05/H%C6%B0%E1%BB%9Bng-d%E1%BA%ABn-x%E1%BB%AD-l%C3%BD-chuy%E1%BB%83n-h%C6%B0%E1%BB%9Bng-khi-b%E1%BB%8B-l%E1%BB%97i-404-Page-Not-Found-trong-Java.jpg" alt="" style={{ width: "600px", }} />
                <div>
                    <Link className="btn btn-dark" to="/" style={{ marginTop: '50px', width: '100px'}}>Go Back</Link>
                </div>
            </div>


        )
    }
}
