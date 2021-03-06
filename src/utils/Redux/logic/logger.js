import { createLogic } from 'redux-logic';
import Debug from '../../Debug';

export const loggerLogic = createLogic({
  type: '*', // take all actions
  validate: ({ getState, action }, allow, reject) => {
    Debug.time(action.type);
    Debug.log('Action triggered: ', action.type); // log actions type
    Debug.log('State', getState() );
    allow(action); // allow to pass to reducer
  },
  process: ({ action, getState }, done, dispatch) => {
    Debug.log('Action ended: ', action.type);
    Debug.timeEnd(action.type);
    Debug.log('State', getState() );
    dispatch();
    done();
  }
});

export default [
  loggerLogic
];