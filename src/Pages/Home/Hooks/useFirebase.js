import { useEffect, useState } from "react";
import firebaseConfigInitialize from "../../Firebase/Firebase.initiaoize";
import { getAuth, createUserWithEmailAndPassword,signOut ,onAuthStateChanged ,signInWithEmailAndPassword,signInWithPopup,updateProfile,getIdToken  } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";



firebaseConfigInitialize()
const useFirebase = ()=>{
 const [user , setUser] = useState({});
 const [isLoading, setIsLoading] = useState(true);
 const [error , setError] = useState('')
 const auth = getAuth();
 const [admin , setAdmin]= useState(false);
 const [token, setToken]= useState('')
 const googleProvider = new GoogleAuthProvider();

 const registerUser = (email, Password,name,history)=>{
    createUserWithEmailAndPassword(auth, email, Password)
    .then(result=>{
        const newUser = {email, displayName: name};
        setUser(newUser)
        saveUser(email, name,'POST')
        // seve user to database
      
        updateProfile(auth,{
            displayName:name
        }).then(()=>{

        }).catch((error)=>{

        })
        // send name to firebase after creation
        history.push('/home')
        setError('')
    }).catch((error)=>{
        setError(error.message)
        console.log(error)
    })
    .finally(()=>{
        setIsLoading(false)
    })
 };

useEffect(()=>{
    fetch(`http://localhost:5000/users/${user.email}`)
    .then(res=> res.json())
    .then(data=>{
        setAdmin(data.admin)
    })
},[user.email])



 const singInWithGmailPassword = (email , password, location, history)=>{
    signInWithEmailAndPassword(auth, email, password)
    .then(result=>{
        const destination= location?.state?.from || '/home';
        history.replace(destination)
        setError('')
        
        setUser(result.user)

    }).catch((error)=>{
        setError(error.message)
    })
    .finally(()=>{
        setIsLoading(false)
    })
 };

 const singInWithGoogle=(location, history)=>{
    signInWithPopup(auth, googleProvider)
    .then(result=>{
        setUser(result.user)
        saveUser(user.eamil, user.displayName,'PUT')
        setError('')
        const destination= location?.state?.from || '/home';
        history.replace(destination)
    }).catch((error)=>{
        setError(error.message)
    }).finally(()=>{
        setIsLoading(false)
    })
 }
 useEffect(()=>{
   const unsubscribe= onAuthStateChanged (auth, (user)=>{
        if(user){
            setUser(user)
            getIdToken(user)
            .then(idToken=>{
                setToken(idToken)
                console.log(idToken)
            })
        }else{
            setUser({})
        }
        setIsLoading(false)
    })
    return ()=> unsubscribe;
 },[])

 const logOut = ()=>{
     signOut(auth)
     .then(()=>{

     }).catch((error)=>{
        setError(error.message)
    })
     .finally(()=>{
        setIsLoading(false)
     })
 }

 const saveUser= (email, displayName ,method)=>{
    const user = {email, displayName };
    fetch('http://localhost:5000/users', {
        method: method,
        headers:{
            'content-type': 'application/json'
        },body:JSON.stringify(user)
    })
    .then(res=>res.json())
 }

 return {user,admin,token,registerUser,logOut,singInWithGmailPassword,isLoading,error,singInWithGoogle}
}


export default useFirebase;