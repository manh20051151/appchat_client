import React, { useEffect, useState } from 'react'
import { getCurrent } from '../store/user/asyncActions'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../store/user/userSlice'
import { useNavigate } from 'react-router-dom'
import path from '../ultils/path'
const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const {isLoggedIn, current}  = useSelector(state => state.user)
  const [currentUser, setCurrentUser] = useState(current)
  useEffect(()=>{
    if(isLoggedIn){
      dispatch(getCurrent())
    }
  },[dispatch, isLoggedIn])

  useEffect(() => {
    setCurrentUser(current)
  }, [current])
  return (
    <div>Header
    <br/>
      {isLoggedIn 
      ? <small>
        <span>{`welcome, ${currentUser?.name} , email: ${currentUser?.username}` }</span>
        <br/>
        <div 
        onClick={()=>{dispatch(logout()); navigate(`/${path.LOGIN}`)  }}
        className='bg-red-500 w-20 hover:rounded-full hover:cursor-pointer'>Đăng xuất</div>
      </small>
      : <span>User</span>
      }
    </div>
  )
}

export default Header