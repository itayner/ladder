import React from 'react';


function RegisterMob(props) {
    return (
        <div className='reg-mob-container'>
            <div className='reg-mob-wrapper'>
                <form>
                    <div className='mb-1'>
                        <label className='form-label' htmlFor='first'>Name</label>
                        <input name='first' type='text' className='form-control' placeholder='first' />
                        <input name='last' type='text' className='form-control' placeholder='last' />
                    </div>
                    <div className='mb-1'>
                        <label className='form-label' htmlFor='email'>Email</label>
                        <input name='email' type='text' className='form-control'  />
                    </div>
                    <div className='mb-1'>
                        <label className='form-label' htmlFor='password'>Create Password</label>
                        <input name='password' type='password' className='form-control' placeholder='password' />
                        <input name='passwordConfirmation' type='password' className='form-control' placeholder='confirm password' />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default RegisterMob;