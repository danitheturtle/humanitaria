import React, { useState } from 'react';
import { graphql, useMutation } from 'react-relay';

export const SignUp = ({ refetch }) => {
  const [usernameValue, setUsernameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const [commitSignIn, isSigningIn] = useMutation(graphql `
    mutation SignUpSignInMutation($input: signInInput!) {
      signIn(input:$input) {
        me {
          id
          uid
        }
      }
    }
  `);
  const [commitAccountCreation, isBeingCreated] = useMutation(graphql `
    mutation SignUpMutation($input: createUserInput!) {
      createUser(input:$input) {
        me {
          id,
          uid
        }
      }
    }
  `);
  const handleEditUsername = (e) => {
    if (e?.target?.value) {
      setUsernameValue(e.target.value);
    }
  }
  const handleEditEmail = (e) => {
    if (e?.target?.value) {
      setEmailValue(e.target.value);
    }
  }
  const handleEditPassword = (e) => {
    if (e?.target?.value) {
      setPasswordValue(e.target.value);
    }
  }
  const handleLogin = () => {
    commitSignIn({
      variables: {
        input: {
          usernameOrEmail: usernameValue,
          passwordHash: passwordValue
        }
      },
      onCompleted: () => {
        refetch({}, { fetchPolicy: 'network-only' });
      }
    })
  };
  const handleSignup = () => {
    commitAccountCreation({
      variables: {
        input: {
          username: usernameValue,
          email: emailValue,
          passwordHash: passwordValue
        }
      },
      onCompleted: () => {
        handleLogin();
      }
    })
  }
  if (isBeingCreated || isSigningIn) return <div className="loading">loading</div>;
  
  return <div className="SignUp">
    <h1 className="title">Humanitaria Sign Up</h1>
    <div className="signup-form">
      <div className="field-row">
        <div className="field-name">{"username*: "}</div>
        <input
          name="username"
          className="field-input"
          type="text"
          onChange={handleEditUsername}
          value={usernameValue}
        />
      </div>
      <div className="field-row">
        <div className="field-name">{"email: "}</div>
        <input
          name="email"
          className="field-input"
          type="text"
          onChange={handleEditEmail}
          value={emailValue}
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
    <button className="signup-button" onClick={handleSignup}>Sign Up</button>
  </div>
};
