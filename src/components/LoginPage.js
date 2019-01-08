import React from 'react';
import { connect } from 'react-redux';
import { startLogin, startLoginFacebook } from '../actions/auth';

export const LoginPage = ({ startLogin, startLoginFacebook }) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Expensify</h1>
            <p>It's time to get your expenses under control.</p>
            <button className="button button--google" onClick={startLogin}>Login with Google</button>
            <div className="box-layout__space"></div>
            <button className="button" onClick={startLoginFacebook}>Login with Facebook</button>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin()),
    startLoginFacebook: () => dispatch(startLoginFacebook())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);