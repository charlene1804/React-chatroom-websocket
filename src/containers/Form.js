import { connect } from 'react-redux';

import Form from 'src/components/Form';
// pour déclencher mes actions
import { setNewInputValue, addNewMessage } from '../store/actions';

// j'utilise mapStateToProps pour passer des données de mon state à mon composant de présentation
const mapStateToProps = (state) => ({
  inputValue: state.inputValue,
});
// mapDispatchToProps pour passer des fonctions à mon composant de présentation
const mapDispatchToProps = (dispatch) => ({
  // quand mon composant va appeler changeInputValue, le param sera ma newValue
  // je vais m'en servir pour dispatch une action en lui passant newValue
  changeInputValue: (newValue) => {
    dispatch(setNewInputValue(newValue));
    console.log('dans connectedForm newValue est', newValue);
  },
  handleSubmit: (message) => {
    // quand mon composant va appeler handleSubmit, le param sera mon message
    // je vais m'en servir pour dispatch une action en lui passant l'inputValue au moment du submit
    dispatch(addNewMessage(message.inputValue));
    console.log('dans connectedForm message est', message.inputValue);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
