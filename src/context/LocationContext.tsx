import { useGetCurrentUser } from 'hooks/useGetCurrentUser';
import React from 'react';
import { type CurrentUser } from 'services/userService';

const defaultContextValue = {};
const LocationContext = React.createContext(defaultContextValue);

LocationContext.displayName = 'LocationContext';

/**
 * @description
 * This provider is responsible for managing the state for our location
 * More info: https://kentcdodds.com/blog/authentication-in-react-applications
 * 
 * @example
 * <LocationProvider>
 *   <Component_That_Needs_Access_to_Location_Context />
 *    ^^
 *     ---this component calls the `useLocation` hook to grab or set the data in the Location Context
 * </LocationProvider>
 */
const LocationProvider = ({ children }) => {
  const [zipCode, setZipCode] = React.useState('');
  const {data, isLoading} = useGetForeCast(zipCode, {enabled: zipCode.length > 4});

  const values = {
    zipCode,
    setZipCode
  };

  return <LocationContext.Provider value={values}>{children}</LocationContext.Provider>;
};

/**
 * @description
 * A hook responsible for interacting with and retrieving data from LocationContext.
 * @example
 * const {zipCode, setZipCode} = useLocation();
 */
const useLocation = () => {
  const context = React.useContext(LocationContext);

  if (context === undefined || Object.keys(context).length === 0) {
    throw new Error(`useLocation must be used within a LocationProvider`);
  }

  return context;
};

export { LocationProvider, useLocation };
