export const NEW_INPUT = 'NEW_INPUT';
export const SUBMIT = 'SUBMIT';
export const TOGGLE_SETTINGS = 'TOGGLE_SETTINGS';
export const NEW_INPUT_EMAIL = 'NEW_INPUT_EMAIL';
export const NEW_INPUT_PASSWORD = 'NEW_INPUT_PASSWORD';
export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

// j'exporte vers mon reducer setNewInputValue qui appelle une fonction anonyme
// qui prend en param une newValue
// et qui va déclencher une action de type NEW_INPUT qui va générer un newInputValue
export const setNewInputValue = (newValue) => ({
  type: NEW_INPUT,
  // ici newValue est la valeur de l'input onChange
  newInputValue: newValue,
});
// j'exporte vers mon reducer addNewMessage qui appelle une fonction anonyme
// qui prend en param un message
// et qui va déclencher une action de type SUBMIT qui va générer un newMessage
// dont le texte est message
export const addNewMessage = (message) => ({
  type: SUBMIT,
  text: message,
});

export const toggleSettings = () => ({
  type: TOGGLE_SETTINGS,
});

export const setNewEmailInputValue = (newEmailValue) => ({
  type: NEW_INPUT_EMAIL,
  // ici newValue est la valeur de l'input onChange
  newInputValue: newEmailValue,
});
export const setNewPasswordInputValue = (newPasswordValue) => ({
  type: NEW_INPUT_PASSWORD,
  // ici newValue est la valeur de l'input onChange
  newInputValue: newPasswordValue,
});
export const checkLogin = (couple) => ({
  type: LOGIN,
  couple: couple,
});
// export const loginSuccess = (nickname) => ({
//   type: LOGIN_SUCCESS,
//   nickname: nickname,
// });
