import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss';
import {signInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            email:'',
            password:''
        }
    }

    handleChange = event => {
        const {value,name} = event.target;

        this.setState({[name]:value})
    }

    render(){
        return(
            <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form>
                <FormInput name="email" 
                type="email" 
                handleChange={this.handleChange}
                label="Email"
                value={this.state.email} required />
                <FormInput 
                name="password" 
                type="password"
                label="Password"
                handleChange={this.handleChange}
                value={this.state.password} 
                required />
                <CustomButton type='submit' >Sign In</CustomButton>
                <CustomButton onClick={signInWithGoogle} >Sign In with Google</CustomButton>
            </form>
            </div>
        )
    }

}

export default SignIn;