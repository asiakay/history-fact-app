import React, { useState, useEffect } from 'react';
import { auth } from '../firebase/firebase';
import { GoogleAuthProvider } from 'firebase/auth';
import { createUserProfileDocument } from '../utils/userProfile';
import { onAuthStateChanged } from 'firebase/auth';
import { Modal, Button, Form, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
  const [user, setUser] = useState(null);
  const [isSignUp, setIsSignUp] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const signInWithGoogle = async () => {
    try {
      const googleProvider = new GoogleAuthProvider();
      googleProvider.setCustomParameters({ prompt: 'select_account' });

      const result = await auth.signInWithPopup(googleProvider);
      const user = result.user;
      await createUserProfileDocument(user);
      setShowModal(false);
    } catch (error) {
      console.error('Error during Google sign in: ', error);
    }
  };

  const signUpWithEmail = async (e) => {
    e.preventDefault();
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user);
      setEmail('');
      setPassword('');
      setIsSignUp(false);
      setShowModal(false);
    } catch (error) {
      console.error('Error during email sign up: ', error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setEmail('');
      setPassword('');
      setShowModal(false);
    } catch (error) {
      console.error('Error during email sign in: ', error);
    }
  };

  const signOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error('Error during sign out: ', error);
    }
  };

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <div>
      {user ? (
        <>
          <Nav className="me-2 d-flex align-items-center flex-nowrap">
            <Nav.Item>
              <Nav.Link style={{ color: 'red' }}>
                Welcome, {user.displayName}!
              </Nav.Link>
            </Nav.Item>
            <Nav.Link as={Link} to="/profile" style={{ color: 'red' }}>
              Profile
            </Nav.Link>
            <Nav.Item>
              <Nav.Link onClick={signOut} style={{ color: 'red' }}>
                Log Out
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </>
      ) : (
        <Button onClick={handleShow}>Login / Sign Up</Button>
      )}

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{isSignUp ? 'Sign Up' : 'Login'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {isSignUp ? (
            <Form onSubmit={signUpWithEmail}>
              <
Form.Group controlId="formBasicEmail">
<Form.Label>Email address</Form.Label>
<Form.Control
type="email"
placeholder="Enter email"
value={email}
onChange={(e) => setEmail(e.target.value)}
/>
</Form.Group>
<Form.Group controlId="formBasicPassword">
<Form.Label>Password</Form.Label>
<Form.Control
type="password"
placeholder="Password"
value={password}
onChange={(e) => setPassword(e.target.value)}
/>
</Form.Group>
<Button variant="primary" type="submit">
Sign Up
</Button>
<Button variant="secondary" onClick={() => setIsSignUp(false)}>
Back to Login
</Button>
</Form>
) : (
<Form onSubmit={handleLogin}>
<Form.Group controlId="formBasicEmail">
<Form.Label>Email address</Form.Label>
<Form.Control
type="email"
placeholder="Enter email"
value={email}
onChange={(e) => setEmail(e.target.value)}
/>
</Form.Group>
<Form.Group controlId="formBasicPassword">
<Form.Label>Password</Form.Label>
<Form.Control
type="password"
placeholder="Password"
value={password}
onChange={(e) => setPassword(e.target.value)}
/>
</Form.Group>
<Button variant="primary" type="submit">
Login
</Button>
<Button variant="secondary" onClick={() => setIsSignUp(true)}>
Sign Up
</Button>
<Button variant="info" onClick={signInWithGoogle}>
Login with Google
</Button>
</Form>
)}
</Modal.Body>
</Modal>
</div>
);
};

export default Login;
