import Login from '../components/Login'
import Inscription from '../components/Inscription'
import {useState} from 'react'

export default function Insciption({...navigation}) {

  const [IsLogin,SetIsLogin] = useState(true)

  return (

    <>
    {
      IsLogin ? 
      <Login SetIsLogin={SetIsLogin} navigation={navigation} /> :
      <Inscription SetIsLogin={SetIsLogin} navigation={navigation}/>
    }
    </>
  );
}
