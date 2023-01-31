import React from 'react'
import './Cart.scss'

const Login = () => {
    return (
        <>
        <div className= 'container d-flex justify-content-center p-5'>
            <form className='shadow-lg d-flex flex-column justify-content-center align-items-center gap-3 p-5 rounded'>
                <div className='d-flex flex-column align-items-start'>
                    <label htmlFor="Email">Email:</label>
                    <input className='form-control' type="email" placeholder='Enter your Email'/>
                </div>
                <div className='d-flex flex-column align-items-start'>
                    <label htmlFor="Password">Password:</label>
                    <input className='form-control' type="password" placeholder='Enter your Password'/>
                </div>
                <button type='submit' className='btn btn-primary'>Login</button>
            </form>
            
        </div>
            <div className='spacer1'></div>
        </>
    )
}

export default Login