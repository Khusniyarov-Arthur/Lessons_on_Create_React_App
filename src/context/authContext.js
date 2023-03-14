import React from 'react';
import PropTypes from 'prop-types';
import {useAuth} from '../hooks/useAuth';

export const authContext = React.createContext({});

export const AuthContextProvider = ({children}) => {
  const {auth, clearAuth} = useAuth();
  // const {auth, status, clearAuth} = useAuth();

  return (
    // <authContext.Provider value={{auth, status, clearAuth}}>
    <authContext.Provider value={{auth, clearAuth}}>
      {children}
    </authContext.Provider>
  );
};

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
