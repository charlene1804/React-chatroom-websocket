import { connect } from 'react-redux';

import { toggleSettings, setNewEmailInputValue, setNewPasswordInputValue, checkLogin } from 'src/store/actions';

import Settings from 'src/components/Settings';

const mapStateToProps = (state) => ({
  isOpen: state.settingsOpen,
  emailInputValue: state.emailInputValue,
  passwordInputValue: state.passwordInputValue,
});

const mapDispatchToProps = (dispatch) => ({
  toggleSettings: () => {
    dispatch(toggleSettings());
  },
  // quand mon composant va appeler changeInputValue, le param sera ma newValue
  // je vais m'en servir pour dispatch une action en lui passant newValue
  changeEmailInputValue: (newEmailValue) => {
    dispatch(setNewEmailInputValue(newEmailValue));
  },
  // quand mon composant va appeler changeInputValue, le param sera ma newValue
  // je vais m'en servir pour dispatch une action en lui passant newValue
  changePasswordInputValue: (newPasswordValue) => {
    dispatch(setNewPasswordInputValue(newPasswordValue));
  },
  handleSettingsSubmit: (couple) => {
    // quand mon composant va appeler handleSettingsSubmit, le param sera mon couple email pwd
    // je vais m'en servir pour dispatch une action
    dispatch(checkLogin(couple));
    console.log('dans connectedSettings couple est', couple);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
