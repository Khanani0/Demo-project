import React, { Component } from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

firebase.initializeApp({
  apiKey: "AIzaSyB-TiAROk5BnNMbvdAWYznCbcnw9EDHUUE",
  authDomain: "proto-accounts.firebaseapp.com",
  databaseURL: "https://proto-accounts.firebaseio.com",
  projectId: "proto-accounts",
  storageBucket: "proto-accounts.appspot.com",
  messagingSenderId: "541096078144",
  appId: "1:541096078144:web:b5ed187cf358b5ae44e8a5",
  measurementId: "G-5HCZFEC86E"
});

class SignIn extends Component {
  state = { isSignIn :false }
  uiconfig ={
    signInFlow :"popup",
    signInSuccessUrl: '/MyProjects',
    signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID
  ],
  callbacks : {
    SignInSuccess : () =>false ,
  }
}
  render() { 
    return(<div>
              {this.state.isSignIn ? <div>Signed in</div>:
              <StyledFirebaseAuth id = "Oauth" uiConfig={this.uiconfig} firebaseAuth={firebase.auth()}/> }
          </div>  
    );
  }
}
 
export default SignIn;
