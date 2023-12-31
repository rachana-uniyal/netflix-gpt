import React,{useEffect} from 'react';
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { auth } from '../utils/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { LOGO, SUPPORTED_LANGUAGE, USER_ICON } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector(store => store.gpt.showGptSearch)

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

  const handleGPTSearchClick = () =>{
    dispatch(toggleGptSearchView())
  }

  const handleLanguageChange = (e)=>{
    dispatch(changeLanguage(e.target.value))
  }

  return (
    <div className='w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row  justify-between'>
        <img className="w-44 mx-auto md:mx-0" src={LOGO}
        alt="logo"/>
        {user && (<div className='flex p-2 justify-between'>
          {showGptSearch && <select className='p-2 bg-gray-800 text-white m-2' onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGE.map(lang =>
              <option key={lang.identifier} value={lang.identifier}>{lang.name}
            </option> )}
          </select>}
          <button className='py-2 px-4 m-2 bg-purple-800 text-white mx-4 rounded-md'
          onClick={handleGPTSearchClick}>
            {showGptSearch? "Home Page": "GPT Search"}</button>
          <img  className="md:block hidden w-12 h-12 " src={USER_ICON}
          alt = "usericon"/>
          <button className='font-bold text-white' onClick={handleSignOut}>Sign Out</button>
        </div>
        )}
    </div>
  )
}

export default Header