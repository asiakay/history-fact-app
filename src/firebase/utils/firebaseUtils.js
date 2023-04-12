import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const auth = getAuth();
const db = getFirestore();

export const signUpWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    const userRef = collection(db, 'users').doc(user.uid);
    await addDoc(userRef, { email: user.email });
    return user;
  } catch (error) {
    console.error(error);
  }
};

export const signInWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error(error);
  }
};
