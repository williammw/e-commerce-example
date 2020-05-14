import React from 'react';
import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';


class SignIn extends React.Component{
    constructor(props) {
        super(props);
    
    this.state = {
        email: '',
        password:'',    
        }
    }
    handlSubmit = event => {
        event.preventDefault();
        this.setState({ email: '', password: '' });
    }
    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    }
    render() { 
        return (
            <div className='sign-in'>
                <h2>I already have an Account</h2>
                <span>Sign in with your email and password</span>
                <form>
                    <FormInput
                        name="email"
                        type="email"
                        label="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        required />                  
                    <FormInput
                        name="password"
                        type="password"
                        label="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        required />
                   
                    <CustomButton type="submit" >Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} >{' '} Sign In {' '} with Google</CustomButton>
                    
                </form>
            </div>
        )
    }

}

export default SignIn