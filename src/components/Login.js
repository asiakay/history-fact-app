import React, { useState, useEffect } from 'react';
import { auth, provider } from '../firebase/firebase';
import { createUserProfileDocument } from '../utils/userProfile';
import { onAuthStateChanged } from 'firebase/auth';
import Nav from 'react-bootstrap/Nav';
//import CategoryDropdown from './CategoryDropdown';

const Login = () => {
  const [user, setUser] = useState(null);

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

      const result = await auth.signInWithPopup(provider);
      const user = result.user;
      await createUserProfileDocument(user);

    } catch (error) {
      console.error('Error during Google sign in: ', error);
    }
  };

  const signOut = async () => {
    try {
      await auth.signOut();
    } catch (error){
      console.error('Error during sign out: ', error);
    }
  };

    

  return (
    <div>{user ? (
      <>
      <Nav className="me-2">
        <Nav.Item>
          <Nav.Link>Welcome, {user.displayName}!
            </Nav.Link>
        </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={signOut}>Log Out</Nav.Link> 
        </Nav.Item>
      </Nav>
            </>
    ) : (
<>
<Nav>
  <Nav.Item>
    <Nav.Link onClick={signInWithGoogle}>Login</Nav.Link>
    
   
      {/* <StyledNavDropdown/> */}

    </Nav.Item>
    <Nav.Item>
   {/*  <CategoryDropdown/> */}
      </Nav.Item>
    </Nav>
{/* <h1>Login</h1> */}
{/* <button onClick={signInWithGoogle}>Sign in with Google</button> */}
</>

    )}
     
    </div>
  );
};

export default Login;
