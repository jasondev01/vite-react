import { useState } from 'react'
import axios from 'axios';

const RegisterForm = () => {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    // const [password, setPassword] = useState('');

    const registerAPI = 'http://127.0.0.1:8000/api/register';

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        // const data = {
        //   'email': email,
        //   'first_name': firstName,
        //   'last_name': lastName,
        //   'password': password
        // };
        const data = {
            email: email,
            first_name: firstName,
            last_name: lastName,
            password: password
        };

        console.log(data)
        try {
            const response = await axios.post(registerAPI, data);
            console.log(response.data);
        } catch(error) {
            console.error(error);
        }
    }

    return (
        <section id='register__form' className='py-5'>
            <div className='container-lg mx-auto py-5 d-flex justify-content-center align-items-center'>
                <form onSubmit={handleSubmit} className='bg-info-subtle p-5 rounded-2 d-flex flex-column align-items-center'>
                    <label className="input-group mb-3">
                        <input type="email" placeholder="Email" className="form-control" onChange={e => setEmail(e.target.value)} value={email}/>
                    </label>
                    <label className="input-group mb-3">
                        <input type="text" placeholder="First Name" className="form-control" onChange={e => setFirstName(e.target.value)} value={firstName}/>
                    </label>
                    <label className="input-group mb-3">
                        <input type="text" placeholder="Last Name" className="form-control" onChange={e => setLastName(e.target.value)} value={lastName}/>
                    </label>
                    <label className="input-group mb-3">
                        <input type="password" placeholder="Password"className="form-control" onChange={e => setPassword(e.target.value)} value={password}/>
                    </label>
                    <label className="input-group mb-3">
                        <input type="password" placeholder="Confirm Password" className="form-control" /> {/* value={e => setEmail(e.target.value)}*/}
                    </label>
                    <button type='submit' className='btn btn-dark w-75'>
                        Register
                    </button>
                </form>
            </div> 
        </section>
    )
}

export default RegisterForm
