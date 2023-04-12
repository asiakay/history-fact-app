import { collection, addDoc, db } from "../firebase/firestore"

try {
    const docRef = await addDoc(collection(db, "users"), {
    first: "Asia", 
    last: "Kay",
    born: 1881
});
console.log("Document written with ID: ", docRef.id);

} catch (e){
    console.error("Error adding document: ", e);
}