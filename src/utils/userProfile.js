// import firebase from 'firebase/compat/app';
// import 'firebase/compat/firestore';
import {doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';
//import { auth, provider } from '../firebase/firebase';

// eslint-disable-next-line no-unused-vars
// import firebase from 'firebase/app';
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-unused-vars

export const createUserProfileDocument = async (userAuth) => {
    // eslint-disable-next-line no-unused-vars
        if (!userAuth) return;
    
        const userRef = doc(db, 'users', userAuth.uid);
        const snapshot = await getDoc(userRef);
        
        if (!snapshot.exists()){
            const { displayName, email, photoURL } = userAuth;
            const createdAt = new Date();
    
            try {
                await setDoc(userRef, {
                    displayName,
                    email,
                    photoURL,
                    createdAt,
                });
            } catch (error){
                console.error('Error creating user profile: ', error.message);
    
            }
        }
        
        return userRef;
    }
    
    


