import Main from '../components/Main'
import LoginForm from '../components/Login'
import { useSelector , useDispatch } from 'react-redux';
import cookie from 'react-cookies'
import { useEffect } from 'react';
import {getToken} from '../store/states'
import swal from 'sweetalert';


const Home = () => {

  const dispatch = useDispatch();
  

  useEffect(() => {
    if (cookie.load('token')) {
      dispatch(getToken({token : cookie.load('token')}))
    }

  }, [])

  const state = useSelector((state) => {
    return {
      token: state.stateReducer.token,
    }
  });

  if (!state.token) return (
    <>
      <LoginForm />
    </>
  )
  return (
    <>
      <Main />
    </>
  )
}

export default Home