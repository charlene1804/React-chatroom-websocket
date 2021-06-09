import { LOGIN, LOGIN_SUCCESS } from 'src/store/actions';
// j'importe axios
import axios from 'axios';

const authMiddleware = (store) => (next) => (action) => {
  // on va réagir a différentes actions
  // par exemple, ici, on va cibler l'action "CONNEXION"
  if (action.type === LOGIN) {
    console.log('action.couple avant requête axios:', action.couple);
    axios({ method: 'post', url: 'http://localhost:3001/login', data: { email: action.couple.email , password: action.couple.password } })
      .then((response) => {
        store.dispatch({ type: 'LOGIN_SUCCESS', nickname: response.data.pseudo });
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }
  else {
    next(action);
  }
};
export default authMiddleware;
