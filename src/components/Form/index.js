import React from 'react';
import PropTypes from 'prop-types';

import { Send } from 'react-feather';

const Form = ({ inputValue, changeInputValue, handleSubmit }) => (
  <form className="messageForm">
    <input
      type="text"
      placeholder="Saisissez votre message..."
      className="textInput"
      // je lui passe inputValue de mon state grâce au mapStateToProps de mon container Form.js
      value={inputValue}
      onChange={(event) => {
        // quand mon inputValue change (l'utilisateur tape du texte) je fais remonter l'info via
        // une prop changeInputValue passée par mon container
        changeInputValue(event.target.value);
        console.log('dans form/index.js event.target.value est', event.target.value);
      }}
    />
    <button
      type="submit"
      className="messageButton"
      onClick={(event) => {
        event.preventDefault();
        // quand mon form est submit, je fais remonter via une prop handleSubmit
        // passée par mon container avec la valeur de l'input à ce moment là
        handleSubmit({ inputValue });
        console.log('Lors de mon submit mon inputValue qui deviendra mon messageText est', inputValue);
        // je remet mon inputValue à zéro via la prop changeInputValue
        changeInputValue('');
      }}
    > <Send color="#61A2D2" size="3em" />
    </button>
  </form>
);

Form.propTypes = {
  inputValue: PropTypes.string.isRequired,
  changeInputValue: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Form;
