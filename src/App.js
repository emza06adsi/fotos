// import React from 'react';
import React, { Component } from 'react';
import './App.css';
import firebase from 'firebase'
import FileUpload from './FileUpload'
class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      user: null
    };

    this.handleAuth = this.handleAuth.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    //this.setState=this.setState.bind(this);
  }


  //  componentDidMount =()=>{
  //    firebase.auth().onAuthStateChanged( user => {
  //      this.setState({user:user});
  //    });
  //  }

  // componentWillMount() {
  //   firebase.auth().onAuthStateChanged(user => {
  //     if (user) {
  //       this.setState({ user: user });
  //     } else {
  //       this.setState({ user:null });
  //     }

  //   });
  // }

    // var user = firebase.auth().currentUser;
    // var provider = new firebase.auth.GoogleAuthProvider();
    
    // componentDidMount(){
     
    // }
  handleAuth() {
     
    
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().onIdTokenChanged(user=>{
      this.setState({user:user})
    })
    firebase.auth().signInWithPopup(provider)
        .then(result => console.log(`${result.user.email}  `))
        .catch(error => console.log(`${error.code}: ${error.message}`))
  }


handleLogout() {
  firebase.auth().signOut()
    .then(result => console.log(`${result.user.email} ha salido `))
    .catch(error => console.log(`${error.code}: ${error.message}`))
}



renderloginButon() {
  // si el usuario está logueado
  if (this.state.user) {
    return (
      < div >
        <img  width="200vw" src={this.state.user.photoURL} alt={this.state.user.displayName} />
        <p> hola {this.state.user.displayName}!</p>
        <button onClick={this.handleLogout}>cerrar sesion </button>
      <FileUpload/>
      </div >
   
   );
    
  } else {
    return (
      <button onClick={this.handleAuth}>registrate para ver o ingresar las fotos</button>
    );

  }
  // si no haga otra cosa

}

render() {
  return (
    <div className="App">
      <div className="App-header">
        <h2> albun personal </h2>
        <div>
          {this.renderloginButon()}
        </div>
      </div>
    </div>
  );
}
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Ed  it <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
// service firebase.storage {
//   match /b/{bucket}/o {
//     match /{allPaths=**} {
//       allow read, write: if request.auth != null;
//     }
//   }
// }