import React, { useState } from 'react';
import { graphql, useMutation } from 'react-relay';

export const SignIn = ({refetch}) => {
  const [loginNameValue, setLoginName] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  
  const handleEditLoginName = (e) => {
    if (e?.target?.value) {
      setLoginName(e?.target?.value);
    }
  }
  const handleEditPassword = (e) => {
    if (e?.target?.value) {
      setPasswordValue(e.target.value);
    }
  }
  
  const [commitSignIn, isSigningIn] = useMutation(graphql`
    mutation SignInMutation($input: signInInput!) {
      signIn(input:$input) {
        me {
          id
          uid
        }
      }
    }
  `);
  const handleLogin = () => {
    commitSignIn({
      variables: {
        input: {
          usernameOrEmail: loginNameValue,
          passwordHash: passwordValue
        }
      },
      onCompleted: () => {
        refetch({}, { fetchPolicy: 'network-only' });
      }
    })
  };
  if (isSigningIn) return <div className="loading">loading</div>;
  return <div className="SignIn">
      <h1 className="title">Sign In</h1>
      <div className="signup-form">
        <div className="field-row">
          <div className="field-name">{"username or email*: "}</div>
          <input
            name="usernameOrEmail"
            className="field-input"
            type="text"
            onChange={handleEditLoginName}
            value={loginNameValue}
          />
        </div>
        <div className="field-row">
          <div className="field-name">{"password*: "}</div>
          <input
            name="password"
            className="field-input"
            type="password"
            onChange={handleEditPassword}
            value={passwordValue}
          />
        </div>
      </div>
      <button className="signin-button" onClick={handleLogin}>Sign In</button>
  </div>
};