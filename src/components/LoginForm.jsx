import React from 'react'

const LoginForm = () => {
    return (
        <section id='login__form' className='py-5'>
            <div className='container-lg mx-auto py-5 d-flex justify-content-center align-items-center'>
                <form action="" className='bg-info-subtle p-5 rounded-2 d-flex flex-column align-items-center'>
                    <label class="input-group mb-3">
                        <input type="text" placeholder="Username or Email" class="form-control" />
                    </label>
                    <label class="input-group mb-3">
                        <input type="password" placeholder="Password" class="form-control" />
                    </label>
                    <button type='submit' className='btn btn-dark w-75'>
                        Submit
                    </button>
                </form>
            </div> 
        </section>
    )
}

export default LoginForm
