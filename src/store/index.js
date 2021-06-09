// on importe createStore depuis redux
import { createStore, applyMiddleware } from 'redux';
// on importe les dev tools pour redux
import { composeWithDevTools } from 'redux-devtools-extension';
import authMiddleware from 'src/middlewares/auth';
// on importe notre reducer
import reducer from './reducer';

// on donne notre reducer (dans lequel on va mettre notre state initial et tout) a createStore...
const store = createStore(
  reducer,
  // on utilise le package dev tools en 2ème param du reducer
  composeWithDevTools(applyMiddleware(authMiddleware)),
);

// sur ce store, redux va nous donner 3 méthodes :
// store.subscribe -> s'abonner aux modifs
// store.dispatch -> envoyer une action
// store.getState -> récupéré un instantané du state

// on exporte ce store
export default store;
