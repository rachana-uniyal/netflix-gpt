import React,{useEffect} from 'react'
import Header from './Header'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { auth } from '../utils/firebase'
import { onAuthStateChanged } from 'firebase/auth'

const Browse = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

    useEffect(()=>{
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid, email, displayName,photoURL }  = user;
          dispatch(addUser({uid: uid, email : email, displayName: displayName, photoURL:photoURL})) 
          navigate("/browse")   
        } else {
          dispatch(removeUser())
          navigate("/")
        }
      });
    },[])

  return (
    <div><Header/></div>
  )
}

export default Browse