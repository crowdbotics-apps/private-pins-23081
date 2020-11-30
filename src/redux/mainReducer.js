import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn51180184Reducer from '../features/SignIn51180184/redux/reducers'
import SignUp22180183Reducer from '../features/SignUp22180183/redux/reducers'
import Dashboard13180182Reducer from '../features/Dashboard13180182/redux/reducers'
import EmailAuth4180181Reducer from '../features/EmailAuth4180181/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn51180184: SignIn51180184Reducer,
SignUp22180183: SignUp22180183Reducer,
Dashboard13180182: Dashboard13180182Reducer,
EmailAuth4180181: EmailAuth4180181Reducer,

});