import React, { Component } from 'react';

class Login extends Component {
 state={
     username:''
 }

login = ()=>{
    const creds ={
        username:this.state.username
    }
    localStorage.setItem('user', JSON.stringify(creds))
}

    render() {
        return (
            <div className='login-container'>
           
            <form className='login' onSubmit={this.login} >
            <img
            alt="1"
            src="https://images.vexels.com/media/users/3/141955/isolated/preview/d0f766bbe2603124417ed31d027b14c8-camera-icon-or-logo-by-vexels.png"
          />
            <h1>Igram</h1>
             <h3>Login Form</h3>
            <span>usename:</span><input type="text" onChange={e => this.setState({ username: e.target.value })} />
           <span> password:</span><input type='password' />
           <button>Login</button>
            </form>
                
            </div>
        );
    }
}

export default Login;
