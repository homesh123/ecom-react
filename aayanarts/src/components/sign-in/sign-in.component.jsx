import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss';
import {auth,signInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            email:'',
            password:''
        }
    }

    handleChange = async event => {
        const {value,name} = event.target;
        const {email,password} = this.state;

        try {
            await auth.createUserWithEmailAndPassword(email,password);
            this.setState({email:'',password:''})
        } catch (error) {
            console.log(error)
        }
        this.setState({[name]:value})
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({email:'',password:''});
    }

    render(){
        return(
            <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={this.handleSubmit}>
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
                <div className="buttons">
                <CustomButton type='submit' >Sign In</CustomButton>
                <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
                </div>
            </form>
            </div>
        )
    }

}

export default SignIn;