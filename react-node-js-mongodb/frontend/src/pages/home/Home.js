import React, { useContext } from 'react';
import { CheckLoginContext } from '../../contextProvider/CheckLoginContextProvider';
import './Home.css';
import Slider from './_partials/Slider';


export default function Home() {


 const { isLogin } = useContext(CheckLoginContext);

 if (!isLogin) {
  window.location.href = '/user/login';
  return;
 }


 return (
  <>
   <Slider />
  </>
 )
}
