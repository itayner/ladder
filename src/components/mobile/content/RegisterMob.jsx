import React from 'react';

function RegisterMob(props) {
    return (
        <div className='reg-mob-container'>
            <div className='reg-mob-wrapper'>
                <form>
                    <div className='mb-1'>
                        <label className='form-label' for='first-name'>Name</label>
                        <input type='text' className='form-control' id='first-name' placeholder='first' />
                        <input type='text' className='form-control' id='last-name' placeholder='last' />
                    </div>
                    <div className='mb-1'>
                        <label className='form-label' for='email-1'>Email</label>
                        <input type='text' className='form-control' id='first-name'  />
                    </div>
                    <div className='mb-1'>
                        <label className='form-label' for='password-1'>Create Password</label>
                        <input type='password' className='form-control' id='password-1' placeholder='password' />
                        <input type='password' className='form-control' id='password-2' placeholder='confirm password' />
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default RegisterMob;