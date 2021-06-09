// J'importe mes actions décentralisées
import { NEW_INPUT, SUBMIT, TOGGLE_SETTINGS, NEW_INPUT_EMAIL, NEW_INPUT_PASSWORD, LOGIN_SUCCESS } from './actions';

import { getHighestMessageId } from './selectors';

const initialState = {
  fakeMessages: [
    {
      id: 1,
      userName: 'Super Chat',
      messageText: 'Salut, ça va?',
    },
    {
      id: 2,
      userName: 'Super Chat',
      messageText: 'T\'aurais pas des super-croquettes?',
    },
    {
      id: 3,
      userName: 'Super Chat',
      messageText: 'Stp',
    },
  ],
  nickname: 'Michel',
  inputValue: '',
  settingsOpen: false,
  emailInputValue: '',
  passwordInputValue: '',
};

function reducer(oldState = initialState, action) {
  switch (action.type) {
    case NEW_INPUT:
      return {
        ...oldState,
        // la veleur de l'input est modifiée à chaque action de l'utilisateur (nouveau caractère)
        inputValue: action.newInputValue,
      };
    case NEW_INPUT_EMAIL:
      return {
        ...oldState,
        // la veleur de l'input est modifiée à chaque action de l'utilisateur (nouveau caractère)
        emailInputValue: action.newInputValue,
      };
    case NEW_INPUT_PASSWORD:
      return {
        ...oldState,
        // la veleur de l'input est modifiée à chaque action de l'utilisateur (nouveau caractère)
        passwordInputValue: action.newInputValue,
      };
    case SUBMIT: {
      const newMessage = {
        id: getHighestMessageId(oldState) + 1,
        userName: oldState.nickname,
        // ici message est la valeur de l'input au moment où l'utilisateur submit
        messageText: action.text,
      };
      return {
        ...oldState,
        // lorsqu'un nouveau message est submit, je le concat à l'array de départ
        fakeMessages: oldState.fakeMessages.concat(newMessage),
      };
    }
    case TOGGLE_SETTINGS:
      return {
        ...oldState,
        // on inverse avec !
        settingsOpen: !oldState.settingsOpen,
      };
    case LOGIN_SUCCESS:
      return {
        ...oldState,
        // on inverse avec !
        nickname: action.nickname,
      };
    default: return {
      ...oldState,
    };
  }
}

export default reducer;
