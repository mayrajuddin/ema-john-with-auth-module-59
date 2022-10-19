import React, { useContext, } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UseContext';
import './LogIn.css'
const LogIn = () => {
    const { signIn, googleSign, twitterLogIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const signInHandle = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset()
                navigate(from, { from: true })
            }).catch(error => console.error(error))
    }
    const handleTwitter = () => {
        twitterLogIn()
            .then(result => {
                navigate(from, { from: true })
            }).catch(error => console.error(error))
    }
    return (
        <div className='form-div'>
            <h4>Login</h4>
            <div className="pd">
                <form className='main-form' onSubmit={signInHandle}>
                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" required />
                    </div>
                    <input className='submit-btn' type="submit" value="Login" />
                </form>
                <p>New to Ema-john? <Link to='/signup'>Create New Account</Link></p>
                <button type='button' onClick={googleSign} className='btn-google'>Continue With Google</button>
                <p><small>Or</small></p>
                <button type='button' onClick={handleTwitter} className='btn-twitter'>Continue With Twitter</button>
            </div>
        </div>
    );
};

export default LogIn;