import React, { useContext, } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UseContext';
import './LogIn.css'
const LogIn = () => {
    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate()
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
                navigate('/')
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
                <button type='button'>Continue With Google</button>
            </div>
        </div>
    );
};

export default LogIn;