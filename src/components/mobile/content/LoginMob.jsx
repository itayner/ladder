import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

function LoginMob(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    var error = '';

    const onSubmit = (e) => {
        e.preventDefault();
        if(true){
                console.log('Good email and password');
                //Change route to ladder
                navigate('/ladder');
            }
        else{
            console.log('Bad email and/or password');
            error = 'Invalid email or password';
        }
    }

    return (
        <div className='login-mob-container'>
        <div className='login-mob-wrapper'>
            <form onSubmit={onSubmit}>
                <div className='mb-1'>
                    {error && <h1 style={{color: 'red'}}>{error}</h1>}
                    <label className='form-label' htmlFor='email'>Email</label>
                    <input value={email} name='email' type='text' className='form-control'  />
                </div>
                <div className='mb-1'>
                    <label className='form-label' htmlFor='password'>Password</label>
                    <input value={password} name='password' type='password' className='form-control' placeholder='password' />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
    );
}

export default LoginMob;