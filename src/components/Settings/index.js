import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './settings.scss';

const Settings = ({ isOpen,
  toggleSettings,
  emailInputValue,
  changeEmailInputValue,
  passwordInputValue,
  changePasswordInputValue,
  handleSettingsSubmit,
}) => (
  // <div className={isOpen ? 'settings settings--open' : 'settings'}>
  <div className={classNames('settings', { 'settings--open': isOpen })}>
    <button
      type="button"
      onClick={toggleSettings}
      className={
        classNames('settings__toggle', { 'settings__toggle--open': isOpen })
      }
    >
      +
    </button>
    <form className="settings__form">
      <input
        type="text"
        className="settings__input"
        placeholder="email"
        value={emailInputValue}
        onChange={(event) => {
          // quand mon inputValue change (l'utilisateur tape du texte) je fais remonter l'info via
          // une prop changeEmailInputValue passée par mon container
          changeEmailInputValue(event.target.value);
          console.log('dans settings/index.js email event.target.value est', event.target.value);
        }}
      />
      <input
        placeholder="Mot de passe"
        className="settings__input"
        type="password"
        value={passwordInputValue}
        onChange={(event) => {
          // quand mon inputValue change (l'utilisateur tape du texte) je fais remonter l'info via
          // une prop changePasswordInputValue passée par mon container
          changePasswordInputValue(event.target.value);
          console.log('dans settings/index.js password event.target.value est', event.target.value);
        }}
      />
      <button
        type="submit"
        className="settings__submit"
        onClick={(event) => {
          event.preventDefault();
          // quand mon form est submit, je fais remonter via une prop handleSettingsSubmit
          // passée par mon container avec la valeur de l'input à ce moment là
          const authObject = { email: emailInputValue, password: passwordInputValue };
          handleSettingsSubmit(authObject);
          console.log('Dans Settings/index.js de mon authObject est ', authObject);
          // je remet mes inputValue à zéro via la prop change...InputValue
          changeEmailInputValue('');
          changePasswordInputValue('');
        }}
      >
        Envoyer
      </button>
    </form>
  </div>
);

Settings.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleSettings: PropTypes.func.isRequired,
  emailInputValue: PropTypes.string.isRequired,
  changeEmailInputValue: PropTypes.func.isRequired,
  passwordInputValue: PropTypes.string.isRequired,
  changePasswordInputValue: PropTypes.func.isRequired,
  handleSettingsSubmit: PropTypes.func.isRequired,
};

export default Settings;
