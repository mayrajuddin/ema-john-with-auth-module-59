import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UseContext';
import './SignUp.css'
const SignUp = () => {
    const [error, setError] = useState(null)
    const { createUser, loading } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        if (password !== confirm) {
            setError(alert('passoword did not match! '))
            return;
        }
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset()
                navigate('/')
            }).catch(error => console.error(error))
    }
    return (
        <div className='form-div signUp-form'>
            <div className="pd">
                <h4>Sign Up </h4>
                <form className='main-form' onSubmit={handleSignUp}>
                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="confirm">Confirm Password</label>
                        <input type="password" name="confirm" id="confirm" />
                    </div>
                    <input className='submit-btn' type="submit" value="Sign Up" />
                </form>
                {/* <input type="submit" value="Sign Up" /> */}
                <p>Already have an Account? <Link to='/login'>Login</Link></p>
                <button type='button'>Continue With Google</button>
            </div>
        </div>
    );
};

export default SignUp;