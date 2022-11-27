import React,{useState, useEffect} from 'react'
import {getAuth, onAuthStateChanged} from "firebase/auth";
import {UserGuestScreen} from "./UserGuestScreen"
import {UserLoggedScreen} from "./UserLoggedScreen"
import { LoadingModal } from '../../components/Shared';

export  function AccountScreen() {
  const [hasLogged, setHasLogged] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth , (user) => {
      setHasLogged(user ? true : false);
    });
  }, []);

  if(hasLogged === null){
    return <LoadingModal  show text="Cargando"/>
  }


  /**si hasLogged es true no devuelve el componente  UserLoggedScreen caso contrario deveulve UserGuestScreen*/
  return hasLogged ? <UserLoggedScreen /> : <UserGuestScreen />;

}