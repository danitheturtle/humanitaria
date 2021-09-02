import React, { useState, useEffect } from 'react';
import { useQueryLoader, usePreloadedQuery, useMutation } from 'react-relay';
import * as landingQuery from '../../routes/__generated__/landingQuery.graphql';

export const Landing = ({ queryRef }) => {
  const [usernameValue, setUsernameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  
  const [landingQueryRef, loadLandingQuery, disposeLandingQuery] = useQueryLoader(landingQuery, queryRef);
  const landingQueryData = usePreloadedQuery(landingQuery, landingQueryRef);
  
  const [commitSignIn, isSigningIn] = useMutation(graphql`
    mutation LandingSignInMutation($input: signInInput!) {
      signIn(input:$input) {
        me {
          username
          uid
        }
      }
    }
  `);
  const [commitAccountCreation, isBeingCreated] = useMutation(graphql`
    mutation LandingCreateUserMutation($input: createUserInput!) {
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
      onCompleted: data => {
        loadLandingQuery({}, { fetchPolicy: 'network-only' });
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
      onCompleted: data => {
        handleLogin();
      }
    })
  }
  
  if (isBeingCreated) return <div className="LandingPage">
    <div className="loading">
      loading
    </div>
  </div>;
  if (landingQueryData.me) {
    return <div className="LandingPage">
      <div className="id-label">{"Your uid is: "}{landingQueryData?.me?.uid}</div>
    </div>
  } else {
    return <div className="LandingPage">
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
    </div>;
  }
  
}