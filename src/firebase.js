import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
    apiKey: "AIzaSyBxQm1KN64hk7THV3_i-djB1DF3w-Hpldk",
    authDomain: "netflix-xlone-7ea0b.firebaseapp.com",
    projectId: "netflix-xlone-7ea0b",
    storageBucket: "netflix-xlone-7ea0b.firebasestorage.app",
    messagingSenderId: "398465101318",
    appId: "1:398465101318:web:cf52f8b0a7b3417b145d87",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

const signup = async (name, email,password)=>{
    try{
        const res = await createUserWithEmailAndPassword(auth, email, password)
        const user = res.user
        await addDoc(collection(db, 'user'), {
            uid: user.uid,
            name, 
            authProvider : 'local',
            email
        })
    } catch(error){
        console.log(error)
        toast.error(error.code.split('/')[1].split('-').join(' '))
    }
}

const login = async(email, password)=>{
    try {
        await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
        console.log(error)
        toast.error(error.code.split("/")[1].split("-").join(" "));
    }
}

const logout = ()=>{
    signOut(auth)
}

export { auth, db, signup, login, logout };