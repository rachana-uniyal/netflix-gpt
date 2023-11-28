import React,{useEffect} from 'react';
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { auth } from '../utils/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { LOGO, USER_ICON } from '../utils/constants';

const Header = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid, email, displayName,photoURL }  = user;
          dispatch(addUser({uid: uid, email : email, displayName: displayName, photoURL:photoURL})) 
          navigate("/browse")   
        } else {
          dispatch(removeUser())
          navigate("/")
        }
      });

      return ()=> unsubscribe()
    },[])

  const handleSignOut =() =>{
    signOut(auth).then(() => {
    }).catch((error) => {
      navigate("/error")
    });
  }
  return (
    <div className='w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img className="w-44" src={LOGO}
        alt="logo"/>
        <div className='flex p-2'>
          <img  className="w-12 h-12 " src={USER_ICON}
          alt = "usericon"/>
          <button className='font-bold text-white' onClick={handleSignOut}>Sign Out</button>
        </div>
    </div>
  )
}

export default Header