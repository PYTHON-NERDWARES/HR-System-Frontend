import Main from '../components/Main'
import LoginForm from '../components/Login'
import { useSelector } from 'react-redux';

const Home = () => {
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