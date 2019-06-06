import React, { Component } from 'react';
import styled from "styled-components";


const LoginContainer= styled.div `
 width:100%;
  display:flex;
  justify-content: center;
  align-items: center;
  height: auto;
`
const LoginStyle = styled.form `
width: 50%;
  background: rgba(173, 167, 172, 0.285);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 25%;
  height: 764px;
  position: fixed;
  border: 1px solid black;
  border-radius: 10px;
   span{
font-size: 1.3rem;
}

 input{
  width:30%;
  padding: 10px;
  margin: 10px auto;
  font-size: 1.3rem;
}
 h1{
  font-family: 'Pacifico', cursive;
  font-size: 4rem;
  margin: 0;
}

 button {
  font-weight: 300;
  padding: 15px 20px;
  margin: 15px auto;
  width: 106px;
  background: #a8a8d0a3;
  border-radius: 10px;
}

 img{
  width:25%;
}
  
`

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
            <LoginContainer>
           
            <LoginStyle onSubmit={this.login} >
            <img
            alt="1"
            src="https://images.vexels.com/media/users/3/141955/isolated/preview/d0f766bbe2603124417ed31d027b14c8-camera-icon-or-logo-by-vexels.png"
          />
            <h1>Igram</h1>
             <h3>Login Form</h3>
            <span>usename:</span><input type="text" onChange={e => this.setState({ username: e.target.value })} />
           <span> password:</span><input type='password' />
           <button>Login</button>
            </LoginStyle>
                
            </LoginContainer>
        );
    }
}

export default Login;
