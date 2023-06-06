import React from 'react';

function RegisterMob(props) {
    return (
        <div className='reg-mob-container'>
            <div className='reg-mob-wrapper'>
                <form>
                    <div className='mb-3'>
                        <label className='form-label' for='first-name'>First Name</label>
                        <input type='text' className='form-control' id='first-name'  />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label' for='last-name'>Last Name</label>
                        <input type='text' className='form-control' id='last-name'  />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label' for='email-1'>Email</label>
                        <input type='text' className='form-control' id='first-name'  />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label' for='password-1'>Create Password</label>
                        <input type='password' className='form-control' id='password-1' />
                        <input type='password' className='form-control' id='password-2' placeholder='Confirm password' />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default RegisterMob;