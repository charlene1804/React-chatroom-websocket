import { connect } from 'react-redux';

import Messages from 'src/components/Messages';

// j'utilise mapStateToProps pour passer des données de mon state à mon composant de présentation
const mapStateToProps = (state) => ({
  fakeMessages: state.fakeMessages,
});

export default connect(mapStateToProps)(Messages);
