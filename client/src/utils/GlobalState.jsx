import { createContext, useContext, useReducer } from "react";
import { reducer } from './reducers'
import { Provider } from 'react-redux';
import { store } from './store';

// const StoreContext = createContext();
// // const { Provider } = StoreContext;

const StoreProvider = ({ ...props }) => {
  
  return <Provider store = { store } {...props} />;
};

// const useStoreContext = () => {
//   return useContext(StoreContext);
// };

export { StoreProvider };
