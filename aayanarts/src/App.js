import React from 'react';
import { Route, Switch,Redirect } from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';

import SignInAndSignUpComp from './pages/sing-in-and-sign-up/sign-in-and-sign-up.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import { connect } from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';

class App extends React.Component{
  
  unsubscribeFromAuth = null;

  componentDidMount(){
   const {setCurrentUser} = this.props;
   this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth)
         userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          })
          })
      }
          setCurrentUser(userAuth)
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return(
      <div>
      <Header></Header>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route path="/signin" render={() => this.props.currentUser ? (<Redirect to='/' />): (<SignInAndSignUpComp />)} />
      </Switch>

  </div>
    )
  }
}

// old code  
//const mapStateToProps = ({user}) => ({
//   currentUser:user.currentUser
// })

const mapStateToProps = createStructuredSelector({
     currentUser:selectCurrentUser
 })

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps,mapDispatchToProps)(App);
