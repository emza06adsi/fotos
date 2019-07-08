// import React from 'react';
import React, { Component } from 'react';
import './App.css';
import firebase from 'firebase'
class App extends Component {

  constructor() {
    super();
    this.state = {
      user: null
    };


    this.handleAuth = this.handleAuth.bind(this);
    this.handleLogout = this.handleLogout.bind(this);

  }



  componentWillMount() {
    const db = firebase.firestore()
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user: user });
    });
  }

  handleAuth() {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(provider)
      .then(result => console.log(`${result.user.email} ha iniciado secion`))
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
        <div>
          <img  width="100" src={this.state.user.photoURL} alt={this.state.user.displayName} />
          <p> hola {this.state.user.displayName}!</p>
          <button onClick={this.handleLogout}> </button>
        </div>
      );
    } else {
      return (
        <button onClick={this.handleAuth}>registrate para ver o ingresar las fotos</button>

      )
    }
    // si no haga otra cosa

  }

  render() {
    return (
      <div className="App-header">
        <p>
          {this.renderloginButon()}
        </p>
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
