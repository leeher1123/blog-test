import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "../../../firebase/firebase";
import {actions} from "../redux/slice";

const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();

  const setAuthState = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(actions.setUser(user));
        const uid = user.uid;
      } else {
        dispatch(actions.setUser(null));
      }
    });
  }

  useEffect(() => {
    setAuthState();
  }, [])

  return children;
}

export default AuthProvider;
