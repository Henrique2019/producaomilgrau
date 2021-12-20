import React, {useState} from 'react';
import Router from 'next/router';
import axios from 'axios';


const Login = () => {
  const [loginError, setLoginError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nome, setNome] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
    //call api
    axios.post('http://localhost:8080/usuarios', {
      
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
        nome,
      }),
    })
      .then((r) => {
        return r.json();
      })
      .then((data) => {
        if (data && data.error) {
          setLoginError(data.message);
        }
        if (data && data.token) {
          //set cookie
          cookie.set('token', data.token, {expires: 2});
          Router.push('/');
        }
      });
  }
  return (
    <form onSubmit={handleSubmit}>
      <p>Login</p>
      <input
      placeholder='nome'
        name="nome"
        type="nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
      placeholder='email'
        name="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
      placeholder='senha'
        name="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input type="submit" value="Submit" />
      {loginError && <p style={{color: 'red'}}>{loginError}</p>}
    </form>
  );
};

export default Login;