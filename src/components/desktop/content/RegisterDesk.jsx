import React, {useState} from 'react';
import Joi from 'joi-browser';

function RegisterDesk(props) {
    const [reg, setReg] = useState({
        first: '',
        last: '',
        email: '',
        password: '',
        passwordConfirmation: '',
    })

    const schema = {
        first: Joi.string().required().min(2).label("first"),
        last: Joi.string().required().min(2).label("last"),
        email: Joi.string().required().email().label("email"),
        password: Joi.string().required().min(5).label("password"),
        passwordConfirmation: Joi.string()
  .required()
  .valid(Joi.ref('password'))
  .options({
    language: {
      any: {
        allowOnly: 'Passwords do not match!!!',
      }
    } 
  })
    };
    const validate = (data, schema) => {
        const options = {
            abortEarly: false
        };
        const result = Joi.validate(data, schema, options);
        // result.error === null -> valid
        return result;
    };
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(reg);
        const result = validate(reg, schema);
        console.log(result);        
    };
    const onChange = (e) => {
        const key = e.target.name;
        var updated = {...reg};
        updated[e.target.id] = e.target.value;
        setReg(updated);
    }

    const {first, last, email, password, passwordConfirmation} = reg;

    return (
        <div className='reg-desk-container'>
            <div className='reg-desk-wrapper'>
            <form onSubmit={onSubmit}>
                    <div className='mb-3 mt-2'>
                        <label className='form-label' htmlFor='first'>Name</label>
                        <input name='first' type='text' className='form-control' value={first} placeholder='first' onChange={onChange}/>
                        <input name='last' type='text' className='form-control' value={last} placeholder='last' onChange={onChange}/>
                    </div>
                    <div className='mb-3'>
                        <label className='form-label' htmlFor='email'>Email</label>
                        <input name='email' type='text' className='form-control' value={email} onChange={onChange}/>
                    </div>
                    <div className='mb-3'>
                        <label className='form-label' htmlFor='password'>Create Password</label>
                        <input name='password' type='password' className='form-control' value={password} placeholder='password' onChange={onChange}/>
                        <input name='passwordConfirmation' type='password' className='form-control' value={passwordConfirmation} 
                        placeholder='confirm password' onChange={onChange}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default RegisterDesk;