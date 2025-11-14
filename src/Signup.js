import React from 'react';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import config from './aws-exports';
import '@aws-amplify/ui-react/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

Amplify.configure(config);

export default function Signup() {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-lg p-4" style={{ maxWidth: '400px', width: '100%' }}>
        <h2 className="text-center mb-4">Create Your Account</h2>

        <Authenticator socialProviders={['google']} variation="modal">
          {({ signOut, user }) => (
            <div>
              <h3 className="text-center">Welcome {user.username}</h3>
              <button className="btn btn-secondary w-100 mt-3" onClick={signOut}>
                Sign Out
              </button>
            </div>
          )}
        </Authenticator>
      </div>
    </div>
  );
}
