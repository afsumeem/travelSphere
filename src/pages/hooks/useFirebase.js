import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendEmailVerification, updateProfile, sendPasswordResetEmail } from "firebase/auth";
import initializeFirebase from '../Firebase/firebase.init';

initializeFirebase()


const useFirebase = () => {

    const auth = getAuth();

    const [user, setUsers] = useState({});
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");
    const [admin, setAdmin] = useState(false);



    //create and sign in user with email and password

    const getUserName = e => {
        setName(e.target.value);
    };
    const getUserEmail = e => {
        setEmail(e.target.value);

    };
    const getUserPassword = e => {
        setPassword(e.target.value);

    };

    //registration

    const handleRegistration = () => {

        if (password.length > 6) {
            setError("password should have 6 character")
            return;
        }

        return createUserWithEmailAndPassword(auth, email, password)

    };


    //user sign in with email and password

    const userLogin = () => {

        setIsLoading(true);

        return signInWithEmailAndPassword(auth, email, password)

    };


    //set user name
    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }


    //verify users Email
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                console.log(result)
            })
    };


    //reset password

    const handleResetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(result => {
                alert('Password Reset Successfully! Check your email!!')
            })
    }


    //Google sign in
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        setIsLoading(true);

        return signInWithPopup(auth, googleProvider)
            .finally(() => setIsLoading(false));
    };


    //user state change

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUsers(user)
            } else {
                setUsers({})
            }
            setIsLoading(false);
        });
        return () => unSubscribe;
    }, [isLoading])



    //Sign out

    const logOut = () => {
        setIsLoading(true);

        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false))

    };



    //save user to database

    const saveUser = (name, email, method) => {

        const users = { name: name, email: email };

        fetch('https://mighty-waters-53050.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(users)
        })
            .then()
    }

    // check admin

    useEffect(() => {
        fetch(`https://mighty-waters-53050.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])


    //return all functions
    return {
        user,
        setUsers,
        error,
        setError,
        name,
        email,
        setUserName,
        password,
        handleResetPassword,
        getUserName,
        getUserEmail,
        getUserPassword,
        verifyEmail,
        userLogin,
        handleRegistration,
        signInUsingGoogle,
        isLoading,
        logOut,
        saveUser,
        admin
    }
};

export default useFirebase;

