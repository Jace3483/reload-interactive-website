import React, { useState, useEffect } from 'react';
import { Amplify, Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
import { Container, Card, Form, Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

Amplify.configure(awsconfig);

function MyAccount() {
  const [user, setUser] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    async function fetchUser() {
      try {
        const currentUser = await Auth.currentAuthenticatedUser();
        setUser(currentUser);

        const attrs = currentUser.attributes || {};
        setFirstName(attrs['custom:firstName'] || '');
        setLastName(attrs['custom:lastName'] || '');
      } catch (err) {
        console.error('Error fetching user:', err);
        setMessage('Failed to load user info.');
      }
    }

    fetchUser();
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!user) {
      setMessage('No user signed in.');
      return;
    }

    try {
      await Auth.updateUserAttributes(user, {
        'custom:firstName': firstName,
        'custom:lastName': lastName,
      });
      setMessage('Account updated successfully!');
    } catch (err) {
      console.error('Error updating account:', err);
      setMessage('Failed to update account.');
    }
  };

  const handleSignOut = async () => {
    try {
      await Auth.signOut();
      setUser(null);
      setMessage('Signed out successfully.');
    } catch (err) {
      console.error('Error signing out:', err);
      setMessage('Failed to sign out.');
    }
  };

  if (!user) return <p>Loading user info...</p>;

  return (
    <Container style={{ maxWidth: '500px', marginTop: '50px' }}>
      <Card>
        <Card.Body>
          <h3>My Account</h3>
          {message && <Alert variant="info">{message}</Alert>}
          <Form onSubmit={handleUpdate}>
            <Form.Group className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Update
            </Button>
            <Button
              variant="secondary"
              style={{ marginLeft: '10px' }}
              onClick={handleSignOut}
            >
              Sign Out
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default MyAccount;
