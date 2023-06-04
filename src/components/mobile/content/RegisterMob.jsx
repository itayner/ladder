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
                </form>
            </div>
        </div>
    );
}

export default RegisterMob;