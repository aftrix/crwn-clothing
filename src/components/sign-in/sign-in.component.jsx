import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-botton/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.style.scss';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email: '', password: '' });
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({
            [name]: value
        });
    }

    render() {
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        label='Email'
                        name='email' 
                        type='email'
                        value={this.state.email} 
                        required
                        handleChange={this.handleChange} />
                    <FormInput 
                        label='Password'
                        name='password' 
                        type='password'
                        value={this.state.password} 
                        required
                        handleChange={this.handleChange} />

                    <div className='buttons'>
                        <CustomButton type='submit'> Sign in </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            Sign in with Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;